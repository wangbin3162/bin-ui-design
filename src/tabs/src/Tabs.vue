<template>
  <div ref="rootRef" class="bin-tabs-wrapper" :class="[type, { closable: closable }]">
    <scroll-pane ref="scrollPaneRef" class="nav-wrapper">
      <div class="tab-list">
        <!--下标-->
        <div v-if="type === 'default'" class="tabs-active-bar" :style="status.activeBarStyle"></div>
        <span
          v-for="(tab, index) in data"
          :id="tab.key"
          :key="tab.key || 'tab-' + index"
          class="tab-item"
          :class="[
            { 'width-icon': tab.icon },
            { 'no-close': tab.noClose },
            { active: tab.key === modelValue }
          ]"
          @click.stop="handleSelectTab(tab)"
          @contextmenu.stop.prevent="openMenu(tab, $event)"
        >
          <i v-if="tab.icon" class="custom-icon" :class="['b-iconfont', `b-icon-${tab.icon}`]"></i>
          {{ tab.title }}
          <i
            v-if="type !== 'default' && closable && !tab.noClose"
            class="b-iconfont b-icon-close"
            @click.prevent.stop="closeSelectedTab(tab)"
          ></i>
        </span>
      </div>
    </scroll-pane>
    <template v-if="contextMenu">
      <transition name="zoom-in-top">
        <ul
          v-show="status.visible"
          class="contextmenu"
          :style="{ left: status.left + 'px', top: status.top + 'px' }"
        >
          <slot name="menu">
            <li>自定义插入li标签</li>
          </slot>
        </ul>
      </transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import ScrollPane from './ScrollPane.vue'
import { nextTick, onBeforeUnmount, onMounted, ref, reactive, watch } from 'vue'
import { throttle, deepCopy } from '../../_utils/util'
import { on, off } from '../../_utils/dom'
import { addResizeListener, removeResizeListener } from '../../_utils/resize-event'
import type { TabItem, TabsProps, ScrollPaneInstance } from './types'

defineOptions({
  name: 'BTabs'
})
const emit = defineEmits(['update:modelValue', 'change', 'tab-close', 'tab-select'])
const props = withDefaults(defineProps<TabsProps>(), {
  type: 'default'
})

const rootRef = ref<HTMLElement | null>(null)
const scrollPaneRef = ref<ScrollPaneInstance | null>(null)
const status = reactive({
  visible: false, // 选中面板弹出
  top: 0, // 选中面板top
  left: 0, // 选中面板left
  selectedTag: {}, // 选中的tag
  activeBarStyle: {}
})

// 计算导航条样式属性
const calcBar = () => {
  if (!props.data || props.data.length === 0) return
  let style = {
    width: '',
    transform: '',
    msTransform: '',
    webkitTransform: ''
  }
  let width = 0
  let offset = 0
  // 获取选中的el的宽度
  props.data.every(tab => {
    let $el = rootRef.value?.querySelector(`#${tab.key}`)
    if (!$el) return false
    let isActive = $el.classList.contains('active')
    if (!isActive) {
      offset += $el['clientWidth']
      return true
    } else {
      width = $el['clientWidth']
      return false
    }
  })
  const transform = `translateX(${offset}px)`
  style.width = `${width}px`
  style.transform = transform
  style.msTransform = transform
  style.webkitTransform = transform
  status.activeBarStyle = style
}
// 计算滚动宽度
const calcScrollWidth = () => {
  scrollPaneRef.value?.calcWidth()
  if (props.type === 'default') {
    // 计算bar位置
    nextTick(() => {
      calcBar()
    })
  }
}

// 移动到当前的tag
const moveToCurrentTab = () => {
  nextTick(() => {
    if (!props.data || props.data.length === 0) return
    if (props.data.length === 0) return
    let $target = rootRef.value?.querySelector(`#${props.modelValue}`)
    if ($target) scrollPaneRef.value?.moveToTarget($target as HTMLElement)
  })
}
// 更新选中active
const emitInput = () => {
  const tag = status.selectedTag as TabItem
  emit('update:modelValue', tag.key)
  emit('change', tag)
}
// 选择当前tab
const handleSelectTab = tab => {
  status.selectedTag = { ...tab }
  emitInput()
  if (props.type === 'default') {
    // 计算bar位置
    nextTick(() => {
      calcBar()
    })
  }
}

// 移动焦点至后一个view
const toLastView = (visitedViews, view) => {
  status.selectedTag = { key: '' }
  const currentIndex = visitedViews.findIndex(t => t.key === view.key)
  // 前后的索引缓存
  let prev = currentIndex - 1
  let next = currentIndex + 1
  // 如果下一个索引小于数组长度
  if (next < visitedViews.length) {
    status.selectedTag = { ...visitedViews[next] }
  } else if (next === visitedViews.length) {
    // 如果当前关闭的是最后一个tag，则判断其前一个索引是否存在，如存在则跳至前一个
    if (prev >= 0) {
      status.selectedTag = { ...visitedViews[prev] }
    }
  }
  emitInput()
}
// 关闭当前的tab页签
const closeSelectedTab = tab => {
  // 缓存tabs
  let visitedViews = deepCopy(props.data)
  if (tab.key === props.modelValue) {
    toLastView(visitedViews, tab)
  }
  emit('tab-close', tab)
} // 打开右键菜单选择
const openMenu = (tab, e) => {
  if (props.contextMenu) {
    status.visible = true
    status.selectedTag = tab
    status.left = e.clientX
    status.top = e.clientY
    emit('tab-select', tab)
  }
}
const closeMenu = () => {
  status.visible = false
}
const calcEvent = throttle(calcScrollWidth, 10)
onMounted(() => {
  addResizeListener(rootRef.value, calcEvent)
  on(window, 'resize', calcEvent)
  calcScrollWidth()
})
onBeforeUnmount(() => {
  removeResizeListener(rootRef.value, calcEvent)
  off(window, 'resize', calcEvent)
})
watch(
  [() => props.data, () => props.modelValue],
  () => {
    nextTick(() => {
      calcScrollWidth()
    })
  },
  { immediate: true, deep: true }
)
watch(
  () => status.visible,
  val => {
    if (val) {
      document.body.addEventListener('click', closeMenu)
    } else {
      document.body.removeEventListener('click', closeMenu)
    }
  }
)
watch(
  () => props.modelValue,
  () => {
    moveToCurrentTab()
  }
)

defineExpose({
  handleSelectTab,
  moveToCurrentTab,
  calcScrollWidth,
  openMenu,
  closeMenu,
  closeSelectedTab
})
</script>
