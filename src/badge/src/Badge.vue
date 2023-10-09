<template>
  <div class="bin-badge">
    <slot></slot>
    <transition name="zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        class="bin-badge__content"
        :class="[
          { ['bin-badge-is-' + type]: type },
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]"
        v-text="content"
      ></sup>
    </transition>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { computed } from 'vue'
import type { BadgeProps } from './types'
defineOptions({
  name: 'BBadge'
})

const props = defineProps<BadgeProps>()
const content = computed(() => {
  if (props.isDot) return ''
  const { value, max } = props
  if (typeof value === 'number' && typeof max === 'number') {
    return max < value ? `${max}+` : value
  }
  return value
})
</script>
