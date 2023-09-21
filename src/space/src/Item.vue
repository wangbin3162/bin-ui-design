<template>
  <div :class="`${prefixCls}__item`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { SpaceItemProps } from './types'

defineOptions({
  name: 'BSpace'
})
withDefaults(defineProps<SpaceItemProps>(), {
  prefixCls: 'bin-space'
})
</script>
