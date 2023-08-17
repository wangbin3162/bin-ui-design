<template>
  <i :class="['bin-icon', 'b-iconfont', 'b-icon-' + name]" :style="iconStyle" />
</template>

<script setup lang="ts">
import type { IconProps } from './types'
import { computed, CSSProperties } from 'vue'

defineOptions({
  name: 'BIcon'
})

const props = defineProps<IconProps>()

const iconStyle = computed(
  () =>
    ({
      fontSize: props.size ? `${props.size}px` : null,
      color: props.color || undefined,
      cursor: props.type === 'button' ? 'pointer' : null
    }) as CSSProperties
)

defineExpose({})
</script>
