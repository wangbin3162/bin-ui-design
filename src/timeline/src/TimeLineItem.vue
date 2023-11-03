<template>
  <li :class="itemClasses">
    <div :class="tailClasses"></div>
    <div ref="dotEl" :class="headClasses" :style="customStyle">
      <slot name="dot"></slot>
    </div>
    <div :class="contentClasses">
      <slot></slot>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { BTimelineItemProps } from './types'
import { computed, onMounted, ref } from 'vue'

const prefixCls = 'bin-timeline'
defineOptions({
  name: 'BTimelineItem'
})

const props = withDefaults(defineProps<BTimelineItemProps>(), {
  color: 'primary'
})

const dotEl = ref<HTMLElement | null>(null)
let dot = ref(false)

const itemClasses = computed(() => `${prefixCls}-item`)

const tailClasses = computed(() => `${prefixCls}-item-tail`)

const headColorShow = computed(() =>
  ['primary', 'success', 'info', 'warning', 'danger'].includes(props.color)
)

const headClasses = computed(() => [
  `${prefixCls}-item-head`,
  {
    [`${prefixCls}-item-head-custom`]: dot.value,
    [`${prefixCls}-item-head-${props.color}`]: headColorShow.value
  }
])
const customStyle = computed(() => {
  let style = {}
  if (props.color) {
    if (!headColorShow.value) {
      style = {
        color: props.color,
        'border-color': props.color,
        top: props.dotTop
      }
    } else {
      style = {
        top: props.dotTop
      }
    }
  }

  return style
})

const contentClasses = computed(() => `${prefixCls}-item-content`)

onMounted(() => {
  dot.value = !!dotEl.value?.innerHTML.length
})
</script>
