<template>
  <teleport to="body" :disabled="!appendToBody">
    <div class="bin-drawer-root">
      <transition name="fade-in">
        <div
          v-show="visible"
          v-if="mask"
          :class="maskClasses"
          :style="wrapStyles"
          @click="handleMask"
        ></div>
      </transition>
      <div ref="wrapRef" :class="wrapClasses" :style="wrapStyles" @click="handleWrapClick">
        <transition :name="'move-' + placement" @after-leave="wrapShow = false">
          <div v-show="visible" :class="classes" :style="mainStyles">
            <div ref="content" :class="contentClasses">
              <a v-if="showClose" class="bin-drawer-close" @click="close">
                <slot name="close">
                  <i class="b-iconfont b-icon-close"></i>
                </slot>
              </a>
              <div v-if="$slots.header || title" class="bin-drawer-header">
                <slot name="header">
                  <div class="bin-drawer-header-inner">{{ title }}</div>
                </slot>
              </div>
              <div class="bin-drawer-body" :style="styles">
                <slot></slot>
              </div>
              <div v-if="$slots.footer" class="bin-drawer-footer">
                <div style="text-align: right">
                  <slot name="footer"></slot>
                </div>
              </div>
            </div>
            <div
              v-if="draggable"
              class="bin-drawer-drag"
              :class="{ 'bin-drawer-drag-left': placement === 'left' }"
              @mousedown="handleTriggerMousedown"
            >
              <slot name="trigger">
                <div class="bin-drawer-drag-move-trigger">
                  <div class="bin-drawer-drag-move-trigger-point">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue'
import { on, off } from '../../_utils/dom'
import { transferIncrease } from '../../_utils/config'
import { useLockScreen } from '../../_hooks'

import type { DrawerProps } from './types'

defineOptions({
  name: 'BDrawer'
})
const slots = defineSlots()
const emit = defineEmits(['update:modelValue', 'close', 'resize-width'])
const props = withDefaults(defineProps<DrawerProps>(), {
  width: 300,
  minWidth: 300,
  maskClosable: true,
  showClose: true,
  mask: true,
  zIndex: 0,
  placement: 'right',
  lockScroll: true
})

const prefixCls = 'bin-drawer'
const visible = ref(props.modelValue)
const wrapShow = ref(false)
const wrapRef = ref<HTMLElement | null>(null)
const canMove = ref(false)
const dragWidth = ref(props.width)
const wrapperWidth = ref(props.width)
const wrapperLeft = ref(0)
const modalIndex = ref(transferIncrease())

if (props.lockScroll) {
  useLockScreen(visible)
}

const wrapClasses = computed(() => [
  `${prefixCls}-wrap`,
  {
    [`${prefixCls}-hidden`]: !wrapShow.value,
    [`${props.className}`]: !!props.className,
    [`${prefixCls}-no-mask`]: !props.mask,
    [`${prefixCls}-wrap-inner`]: props.inner,
    [`${prefixCls}-wrap-dragging`]: canMove.value
  }
])

const wrapStyles = computed(() => ({ zIndex: modalIndex.value + props.zIndex }))

const mainStyles = computed(() => {
  let style = {}
  const width = parseInt(dragWidth.value.toString())
  const styleWidth = {
    width: width <= 100 ? `${width}%` : `${width}px`
  }
  Object.assign(style, styleWidth)
  return style
})

const contentClasses = computed(() => [
  `${prefixCls}-content`,
  { [`${prefixCls}-content-no-mask`]: !props.mask }
])

const classes = computed(() => [
  `${prefixCls}`,
  `${prefixCls}-${props.placement}`,
  {
    [`${prefixCls}-no-header`]: !(slots.header || props.title),
    [`${prefixCls}-inner`]: props.inner
  }
])

const maskClasses = computed(() => [
  `${prefixCls}-mask`,
  { [`${prefixCls}-mask-inner`]: props.inner }
])

function handleClose() {
  visible.value = false
  emit('update:modelValue', false)
  emit('close')
}

function close() {
  if (!props.beforeClose) {
    return handleClose()
  }
  const before = props.beforeClose()
  if (before && before.then) {
    before.then(() => {
      handleClose()
    })
  } else {
    handleClose()
  }
}

function handleMask() {
  if (props.maskClosable && props.mask) close()
}

function handleWrapClick(e: MouseEvent) {
  // use indexOf,do not use === ,because bin-modal-wrap can have other custom className
  const className = (e.target as HTMLElement).getAttribute('class')
  if (className && className.indexOf(`${prefixCls}-wrap`) > -1) handleMask()
}

function handleSetWrapperWidth() {
  if (!wrapRef.value) return
  const { width, left } = wrapRef.value.getBoundingClientRect()
  wrapperWidth.value = width
  wrapperLeft.value = left
}

function handleMousemove(e: MouseEvent) {
  if (!canMove.value || !props.draggable) return
  // 更新容器宽度和距离左侧页面距离，如果是window则距左侧距离为0
  handleSetWrapperWidth()
  const left = e.pageX - wrapperLeft.value
  // 如果抽屉方向为右边，宽度计算需用容器宽度减去left
  let width = props.placement === 'right' ? +wrapperWidth.value - left : left
  // 限定最小宽度
  width = Math.max(width, +props.minWidth)
  // e.atMin = width === +props.minWidth
  // 如果当前width不大于100，视为百分比
  if (width <= 100) width = (width / +wrapperWidth.value) * 100
  dragWidth.value = width
  emit('resize-width', width)
}

function handleMouseup() {
  if (!props.draggable) return
  canMove.value = false
}

function handleTriggerMousedown() {
  canMove.value = true
  // 防止鼠标选中抽屉中文字，造成拖动trigger触发浏览器原生拖动行为
  window?.getSelection()?.removeAllRanges()
}

watch(
  () => props.modelValue,
  val => {
    visible.value = val
    if (val) {
      modalIndex.value = transferIncrease()
      wrapShow.value = true
    }
  }
)

onMounted(() => {
  if (visible.value) wrapShow.value = true
  on(document, 'mousemove', handleMousemove)
  on(document, 'mouseup', handleMouseup)
  handleSetWrapperWidth()
})

onBeforeUnmount(() => {
  off(document, 'mousemove', handleMousemove)
  off(document, 'mouseup', handleMouseup)
})
</script>
