<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import type { RowProps } from './types'
const prefixCls = 'bin-row'

defineOptions({
  name: 'BRow'
})
const props = withDefaults(defineProps<RowProps>(), {
  gutter: 0
})

provide<RowProps>('BRow', props)

const classes = computed(() => {
  return [
    {
      [`${prefixCls}`]: !props.type,
      [`${prefixCls}-${props.type}`]: !!props.type,
      [`${prefixCls}-${props.type}-${props.align}`]: !!props.align,
      [`${prefixCls}-${props.type}-${props.justify}`]: !!props.justify,
      [`${props.className}`]: !!props.className
    }
  ]
})

const styles = computed(() => {
  let style = {}
  if (props.gutter !== 0) {
    style = {
      marginLeft: +props.gutter / -2 + 'px',
      marginRight: +props.gutter / -2 + 'px'
    }
  }
  return style
})
</script>
