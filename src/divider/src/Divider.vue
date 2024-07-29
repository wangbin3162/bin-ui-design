<template>
  <div
    :class="[
      'bin-divider',
      `bin-divider-${type}`,
      {
        ['bin-divider-dashed']: !!dashed
      }
    ]"
  >
    <span v-if="$slots.default" :class="['bin-divider-inner-text', `is-${align}`]">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { DividerProps } from './types'

defineOptions({
  name: 'BDivider'
})

withDefaults(defineProps<DividerProps>(), {
  type: 'horizontal',
  align: 'center',
  dashed: false
})
</script>
