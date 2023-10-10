<template>
  <div :class="['bin-skeleton__item', `bin-skeleton__${variant}`]">
    <ImagePlaceholder v-if="variant === 'image'" />
  </div>
</template>

<script setup lang="ts">
import ImagePlaceholder from './ImagePlaceholder.vue'
import type { SkeletonItemProps } from './types'

defineOptions({
  name: 'BSkeletonItem'
})

withDefaults(defineProps<SkeletonItemProps>(), {
  variant: 'text'
})
</script>
