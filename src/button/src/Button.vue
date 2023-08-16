<template>
  <button
    class="bin-button"
    :class="{
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-dashed': dashed,
      'is-transparent': transparent,
      'is-background': background
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types'
defineProps<ButtonProps>()
</script>
