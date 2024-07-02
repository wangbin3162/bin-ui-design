<template>
  <div class="bin-trend" :class="classes">
    <span class="bin-trend-text"><slot></slot></span>
    <Icon :name="flagType" class="bin-trend-flag" :size="iconSize" />
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import type { TrendProps } from './types'
import { computed } from 'vue'
import Icon from '../../icon/src/Icon.vue'

defineOptions({
  name: 'BTrend'
})

const props = withDefaults(defineProps<TrendProps>(), {
  colorful: true,
  upIcon: 'caret-up',
  downIcon: 'caret-down',
  iconSize: 14
})

const flagType = computed(() => {
  return props.flag === 'up' ? props.upIcon : props.flag === 'down' ? props.downIcon : ''
})

const classes = computed(() => {
  return [
    {
      ['bin-trend-up']: props.flag === 'up',
      ['bin-trend-down']: props.flag === 'down',
      ['bin-trend-reverse-color']: props.reverseColor,
      ['bin-trend-colorful']: props.colorful,
      ['bin-trend-text-color']: props.textColor
    }
  ]
})

defineExpose({})
</script>
