<template>
  <div :style="circleSize" class="bin-circle">
    <svg viewBox="0 0 100 100">
      <path
        :d="pathString"
        :stroke="trailColor"
        :stroke-width="trailWidth"
        :fill-opacity="0"
        :style="trailStyle"
      ></path>
      <path
        :d="pathString"
        :stroke-linecap="strokeLinecap"
        :stroke="strokeColor"
        :stroke-width="computedStrokeWidth"
        fill-opacity="0"
        :style="pathStyle"
      ></path>
    </svg>
    <div class="bin-circle-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import type { CircleProps } from './types'
import { computed } from 'vue'

defineOptions({
  name: 'BCircle'
})

const props = withDefaults(defineProps<CircleProps>(), {
  percent: 0,
  size: 120,
  strokeWidth: 6,
  strokeColor: '#1089ff',
  strokeLinecap: 'round',
  trailWidth: 5,
  trailColor: '#eaeef2'
})

const percentValue = computed(() => Math.max(0, Math.min(100, props.percent)))

const circleSize = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`
}))

const radius = computed(() => 50 - props.strokeWidth / 2)

const computedStrokeWidth = computed(() =>
  percentValue.value === 0 && props.dashboard ? 0 : props.strokeWidth
)

const pathString = computed(() => {
  const r = radius.value
  if (props.dashboard) {
    return `M 50,50 m 0,${r} a ${r},${r} 0 1 1 0,-${2 * r} a ${r},${r} 0 1 1 0,${2 * r}`
  } else {
    return `M 50,50 m 0,-${r} a ${r},${r} 0 1 1 0,${2 * r} a ${r},${r} 0 1 1 0,-${2 * r}`
  }
})

const len = computed(() => Math.PI * 2 * radius.value)

const trailStyle = computed(() => {
  let style = {}
  if (props.dashboard) {
    style = {
      'stroke-dasharray': `${len.value - 75}px ${len.value}px`,
      'stroke-dashoffset': `-${75 / 2}px`,
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
    }
  }
  return style
})

const pathStyle = computed(() => {
  let style = {}
  if (props.dashboard) {
    style = {
      'stroke-dasharray': `${(percentValue.value / 100) * (len.value - 75)}px ${len.value}px`,
      'stroke-dashoffset': `-${75 / 2}px`,
      transition:
        'stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s'
    }
  } else {
    style = {
      'stroke-dasharray': `${len.value}px ${len.value}px`,
      'stroke-dashoffset': `${((100 - percentValue.value) / 100) * len.value}px`,
      transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    }
  }
  return style
})
</script>
