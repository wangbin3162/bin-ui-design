<template>
  <div
    :class="[
      'bin-progress',
      status ? 'progress-' + status : '',
      {
        'bin-progress-text': !showText,
        'bin-progress-text-inside': textInside
      }
    ]"
    role="progressbar"
    :aria-valuenow="percentValue"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="bin-progress-bar" :class="{ 'is-active': active }">
      <div class="bin-progress-bar__outer" :style="barOutStyle">
        <div class="bin-progress-bar__inner" :style="barStyle">
          <div v-if="showText && textInside" class="bin-progress-bar__innerText">
            {{ percentValue }}%
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showText && !textInside"
      class="bin-progress__text"
      :style="{ fontSize: progressTextSize + 'px' }"
    >
      <template v-if="!status">{{ percentValue }}%</template>
      <template v-else>
        <slot v-if="status === 'text'"></slot>
        <b-icon v-else :name="iconClass"></b-icon>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import BIcon from '../../icon/src/Icon.vue'
import type { ProgressProps } from './types'
import { computed } from 'vue'

defineOptions({
  name: 'BProgress'
})

const props = withDefaults(defineProps<ProgressProps>(), {
  percent: 0,
  strokeWidth: 8,
  showText: true
})

const percentValue = computed(() => Math.max(0, Math.min(100, props.percent)))

const barOutStyle = computed(() => ({
  height: props.strokeWidth + 'px',
  borderRadius: props.radius,
  backgroundColor: props.bgColor
}))

const barStyle = computed(() => ({
  width: percentValue.value + '%',
  backgroundColor: props.color,
  borderRadius: props.radius
}))

const iconClass = computed(() => (props.status === 'success' ? 'check-circle' : 'close-circle'))

const progressTextSize = computed(() => {
  let size = 12 + props.strokeWidth * 0.4
  return size > 16 ? 16 : size
})
</script>
