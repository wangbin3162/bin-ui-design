<template>
  <div
    class="bin-splitter-container clear-fix"
    :class="{ 'hide-line': hideLine, 'is-active': status.active }"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
  >
    <pane class="bin-splitter-pane splitter-left" :split="split" :style="leftStyle">
      <slot name="left"></slot>
    </pane>

    <resizer
      :class-name="className"
      :style="resizerStyle"
      :split="split"
      @mousedown="onMouseDown"
      @dblclick="onDblclick"
    ></resizer>

    <pane class="bin-splitter-pane splitter-right" :split="split" :style="rightStyle">
      <slot name="right">
        <p>type: {{ status.type }}</p>
        <p>resizeType: {{ status.resizeType }}</p>
        <p>active: {{ status.active }}</p>
        <p>hasMoved: {{ status.hasMoved }}</p>
      </slot>
    </pane>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { computed, reactive } from 'vue'
import Resizer from './Resizer.vue'
import Pane from './Pane.vue'
import type { SplitProps } from './types'

defineOptions({
  name: 'BSplit'
})

const emit = defineEmits(['resize'])
const props = withDefaults(defineProps<SplitProps>(), {
  default: 200,
  min: 60,
  split: 'vertical'
})

const status = reactive({
  active: false,
  hasMoved: false,
  hasResize: false, // 是否拖拽过
  pixel: props.default,
  type: props.split === 'vertical' ? 'width' : 'height',
  resizeType: props.split === 'vertical' ? 'left' : 'top'
})

const leftStyle = computed(() => {
  const style = props.defaultWrapStyle
  const px = `${status.pixel}px`
  if (style && style.length > 0) {
    return { [status.type]: status.hasResize ? px : `${style[0]}` }
  }
  return { [status.type]: px }
})
const resizerStyle = computed(() => {
  const style = props.defaultWrapStyle
  const px = `${status.pixel}px`
  if (style && style.length > 0) {
    return {
      [status.resizeType]: status.hasResize ? px : `${style[0]}`,
      backgroundColor: props.resizerColor
    }
  }
  return { [status.resizeType]: px, backgroundColor: props.resizerColor }
})
const rightStyle = computed(() => {
  const style = props.defaultWrapStyle
  const px = `calc(100% - ${status.pixel}px)`
  if (style && style.length > 1) {
    return { [status.type]: status.hasResize ? px : `${style[1]}` }
  }
  return { [status.type]: px }
})

const onDblclick = () => {
  const style = props.defaultWrapStyle
  if (style && style.length > 1) {
    status.hasResize = false // 是否拖拽过
    emit('resize', status.pixel)
    return
  }
  if (style && style.length === 1) {
    if (!status.hasMoved) {
      status.pixel = props.default
      emit('resize', style[0])
    }
  }
}
const onMouseDown = () => {
  status.active = true
  status.hasMoved = false
}
const onMouseUp = () => {
  status.active = false
}
const onMouseMove = (e: MouseEvent) => {
  if (e.buttons === 0) {
    status.active = false
  }
  if (status.active) {
    status.hasResize = true
    let offset = 0
    let target = e.currentTarget as HTMLElement
    if (props.split === 'vertical') {
      while (target) {
        offset += target.offsetLeft
        target = target.offsetParent as HTMLElement
      }
    } else {
      while (target) {
        offset += target.offsetTop
        target = target.offsetParent as HTMLElement
      }
    }
    const currentPage = props.split === 'vertical' ? e.pageX : e.pageY
    const targetOffset =
      props.split === 'vertical'
        ? (e.currentTarget as HTMLElement)?.offsetWidth
        : (e.currentTarget as HTMLElement)?.offsetHeight
    const px = currentPage - offset
    if (px >= props.min && px < targetOffset - props.min) {
      status.pixel = px
    }
    emit('resize', status.pixel)
    status.hasMoved = true
  }
}
</script>
