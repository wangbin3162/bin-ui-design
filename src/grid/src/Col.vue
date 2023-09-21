<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import '../styles/index.css'
import { computed, inject } from 'vue'
import type { RowProps, ColProps } from './types'

const prefixCls = 'bin-col'

defineOptions({
  name: 'BCol'
})
const props = defineProps<ColProps>()

const rowProps = inject<RowProps>('BRow', {})

const classes = computed(() => {
  const classList = [
    `${prefixCls}`,
    {
      [`${prefixCls}-span-${props.span}`]: props.span,
      [`${prefixCls}-order-${props.order}`]: props.order,
      [`${prefixCls}-offset-${props.offset}`]: props.offset,
      [`${prefixCls}-push-${props.push}`]: props.push,
      [`${prefixCls}-pull-${props.pull}`]: props.pull,
      [`${props.className}`]: !!props.className
    }
  ]

  ;['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
    if (typeof props[size] === 'number') {
      classList.push(`${prefixCls}-span-${size}-${props[size]}`)
    } else if (typeof props[size] === 'object') {
      let propItem = props[size]
      Object.keys(propItem).forEach(prop => {
        classList.push(
          prop !== 'span'
            ? `${prefixCls}-${size}-${prop}-${propItem[prop]}`
            : `${prefixCls}-span-${size}-${propItem[prop]}`
        )
      })
    }
  })

  return classList
})
const gutter = computed(() => rowProps.gutter)
const styles = computed(() => {
  let style = {}
  if (gutter.value && gutter.value !== 0) {
    style = {
      paddingLeft: +gutter.value / 2 + 'px',
      paddingRight: +gutter.value / 2 + 'px'
    }
  }
  return style
})
</script>
