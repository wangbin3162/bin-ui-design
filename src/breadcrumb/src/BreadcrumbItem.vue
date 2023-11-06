<template>
  <span class="bin-breadcrumb__item">
    <span ref="link" :class="['bin-breadcrumb__inner']" role="link">
      <slot></slot>
    </span>
    <i
      v-if="separatorIcon"
      class="bin-separator icon"
      :class="['b-iconfont', 'b-icon-' + separatorIcon]"
    ></i>
    <span v-else class="bin-separator" role="presentation">{{ separator }}</span>
  </span>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue'
import type { BreadcrumbInject } from './types'

defineOptions({
  name: 'BBreadcrumbItem'
})
const parent = inject<BreadcrumbInject>('Breadcrumb')
const separator = ref(parent?.props.separator)
const separatorIcon = ref(parent?.props.separatorIcon)
const link = ref(null)
</script>
