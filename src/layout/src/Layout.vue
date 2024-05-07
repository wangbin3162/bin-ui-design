<template>
  <div class="bin-layout">
    <div v-if="hasSider" class="bin-layout-sider" :style="siderStyle">
      <div class="sider-inner" :class="{ hide: collapsed && !showCollapsedContent }">
        <slot name="sider">hasSider</slot>
      </div>
      <div
        v-if="showToggle"
        class="bin-layout-toggle-button"
        :class="{ collapsed }"
        @click="collapsed = !collapsed"
      >
        <b-icon name="left"></b-icon>
      </div>
    </div>
    <div class="bin-layout-content" :style="contentStyles"><slot>content</slot></div>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { computed, ref } from 'vue'
import { BIcon } from '../../icon'
import type { LayoutProps } from './types'

defineOptions({
  name: 'BLayout'
})

const props = withDefaults(defineProps<LayoutProps>(), {
  hasSider: true,
  siderWidth: 240,
  collapsedWidth: 32,
  showToggle: true
})

const collapsed = ref(false)

const siderStyle = computed(() => ({
  width: collapsed.value ? `${props.collapsedWidth}px` : `${props.siderWidth}px`
}))

const contentStyles = computed(() => ({
  ...props.contentStyle,
  width: collapsed.value
    ? `calc(100% - ${props.collapsedWidth}px)`
    : `calc(100% - ${props.siderWidth}px)`
}))
</script>
