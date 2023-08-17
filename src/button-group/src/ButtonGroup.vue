<template>
  <div class="bin-button-group" :class="{ 'bin-button-group--vertical': vertical }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ButtonGroupProps } from './types'
defineOptions({
  name: 'BButtonGroup'
})

defineProps<ButtonGroupProps>()
</script>
