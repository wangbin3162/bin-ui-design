<template>
  <div :class="[split, className]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  split: {
    type: String,
    validator: (value: string) => ['vertical', 'horizontal'].includes(value),
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})
</script>
