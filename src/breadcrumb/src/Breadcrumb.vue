<template>
  <div ref="el" class="bin-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import type { BreadcrumbProps, BreadcrumbInject } from './types'

defineOptions({
  name: 'BBreadcrumb'
})
const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
  separatorIcon: ''
})

const el = ref<HTMLElement | null>(null)

provide<BreadcrumbInject>('Breadcrumb', { props })
onMounted(() => {
  const items = el.value?.querySelectorAll('.bin-breadcrumb__item')
  if (items?.length) {
    items[items.length - 1].setAttribute('aria-current', 'page')
  }
})
</script>
