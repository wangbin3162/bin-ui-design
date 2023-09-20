<template>
  <div
    class="bin-card"
    :class="[
      shadow ? 'is-' + shadow + '-shadow' : 'is-hover-shadow',
      bordered ? '' : 'is-no-border'
    ]"
    :style="cardStyle"
  >
    <div
      v-if="$slots.header || header"
      class="bin-card__header"
      :class="[divider ? divider + '-divider' : 'has-divider', headTip ? 'has-tip' : '']"
    >
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="bin-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { computed } from 'vue'
import type { CardProps } from './types'

defineOptions({
  name: 'BCard'
})

const props = withDefaults(defineProps<CardProps>(), {
  bordered: true
})

const cardStyle = computed(() => ({
  width: props.width,
  borderRadius: props.radius,
  backgroundColor: props.bgColor
}))
</script>
