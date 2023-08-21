<template>
  <i :class="['bin-icon', 'b-iconfont', 'b-icon-' + name]" :style="iconStyle" :theme-name="theme" />
</template>

<script setup lang="ts">
import '../styles/index.css'
import type { IconProps } from './types'
import { computed, CSSProperties } from 'vue'
import useTheme from '../../_hooks/use-theme'

const theme = useTheme()

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
