<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="modal-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <b-mask
        v-show="visible"
        :mask="mask"
        :mask-class="[{ 'screen-center': screenCenter }, maskClass]"
        :z-index="modalIndex"
        @click="onModalClick"
      >
        <transition :name="transitionName || 'dialog-fade'">
          <div
            v-show="visible"
            ref="modalRef"
            :class="[
              'bin-modal',
              { 'bin-modal-wrap': draggable },
              { 'is-fullscreen': fullscreen },
              { 'screen-center': screenCenter },
              customClass
            ]"
            aria-modal="true"
            role="dialog"
            :aria-label="title || 'dialog'"
            :style="style"
            @click.stop=""
          >
            <div class="bin-modal-close">
              <slot name="ctrl"></slot>
              <i v-if="showClose" class="b-iconfont b-icon-close" @click="handleClose"></i>
            </div>
            <div v-if="$slots.title || title" class="bin-modal-header">
              <slot name="title">
                <span class="bin-modal-title">
                  {{ title }}
                </span>
              </slot>
            </div>
            <template v-if="rendered">
              <div class="bin-modal-body" :style="bodyStyles">
                <slot></slot>
              </div>
            </template>
            <div v-if="$slots.footer" class="bin-modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </transition>
      </b-mask>
    </transition>
  </teleport>
</template>

<script lang="ts">
import BMask from './Mask.vue'
import { defineComponent, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import {
  default as useDialog,
  CLOSE_EVENT,
  CLOSED_EVENT,
  OPEN_EVENT,
  OPENED_EVENT,
  UPDATE_MODEL_EVENT
} from './useModal'
import { useModalDrag } from '../../_hooks'
import { addEventListenerWrap } from './addListener'

let mousePosition: { x: number; y: number } | null = null
const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => (mousePosition = null), 100)
}

// 只有点击事件支持从鼠标位置动画展开
if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  addEventListenerWrap(document.documentElement, 'click', getClickPosition, true)
}

function getScroll(w: Window, top: boolean): number {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`]
  const method = `scroll${top ? 'Top' : 'Left'}`
  if (typeof ret !== 'number') {
    const d = w.document
    // @ts-ignore
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      // @ts-ignore
      ret = d.body[method]
    }
  }
  return ret
}

function setTransformOrigin(node: HTMLElement, value: string) {
  const style = node.style
  ;['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix => {
    // @ts-ignore
    style[`${prefix}TransformOrigin`] = value
  })
  style[`transformOrigin`] = value
}

function offset(el: HTMLElement): { left: number; top: number } {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top
  }
  const doc = el.ownerDocument
  const w = doc.defaultView // || doc.parentWindow
  if (w) {
    pos.left += getScroll(w, false)
    pos.top += getScroll(w, true)
  }
  return pos
}

export default defineComponent({
  name: 'BModal',
  components: { BMask },
  props: {
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function,
      default: undefined
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    bodyStyles: {
      type: Object,
      default: () => ({})
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    escClosable: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    top: {
      type: String,
      default: '100px'
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    maskClass: {
      type: [String, Array, Object],
      default: ''
    },
    width: {
      type: String,
      default: '520px'
    },
    draggable: Boolean,
    zIndex: {
      type: Number,
      default: 0
    },
    transitionName: {
      type: String,
      default: 'dialog-fade'
    },
    screenCenter: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: String,
      default: 'calc(100vh - 80px)'
    }
  },
  emits: [OPEN_EVENT, OPENED_EVENT, CLOSE_EVENT, CLOSED_EVENT, UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const modalRef = ref(null)

    const { modelValue, draggable, destroyOnClose } = toRefs(props)
    useModalDrag({
      visible: modelValue,
      destroyOnClose,
      draggable
    })

    const updateCallback = (visible: boolean) => {
      if (props.modelValue) {
        // first show
        if (!visible) {
          const dialogNode = modalRef.value
          if (!dialogNode) return
          const cusTransition = props.transitionName && props.transitionName !== 'dialog-fade'
          if (cusTransition) {
            setTransformOrigin(dialogNode, '')
            return
          }
          if (mousePosition) {
            const elOffset = offset(dialogNode)
            setTransformOrigin(
              dialogNode,
              `${mousePosition.x - elOffset.left}px ${mousePosition.y - elOffset.top}px`
            )
          } else {
            setTransformOrigin(dialogNode, '')
          }
        }
      }
    }
    watch(
      () => props.modelValue,
      val => {
        nextTick(() => {
          updateCallback(!val)
        })
      }
    )
    onMounted(() => {
      nextTick(() => {
        updateCallback(false)
      })
    })
    return {
      ...useDialog(props, emit, modalRef),
      modalRef
    }
  }
})
</script>
