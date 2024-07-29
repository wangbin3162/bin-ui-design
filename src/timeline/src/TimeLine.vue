<template>
  <ul :class="cpClasses">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import type { BTimelineProps } from './types'
import { computed } from 'vue'

const prefixCls = 'bin-timeline'

defineOptions({
  name: 'BTimeline'
})

const props = defineProps<BTimelineProps>()

const cpClasses = computed(() => [`${prefixCls}`, { [`${prefixCls}-pending`]: props.pending }])
</script>
