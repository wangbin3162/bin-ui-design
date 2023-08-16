<template>
  <button
    ref="_ref"
    class="bin-button"
    :class="{
      [`bin-button--${btnType}`]: btnType,
      [`bin-button--${size}`]: size,
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-dashed': dashed,
      'is-circle': circle,
      'is-text': isNormalTextColor || type === 'text',
      'is-transparent': transparent,
      'is-background': background
    }"
    :type="nativeType"
    :autofocus="autofocus"
    :disabled="disabled || loading"
  >
    <span v-if="$slots.default" :style="textStyle"><slot /></span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types'
import { ref, computed } from 'vue'

defineOptions({
  name: 'BButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()

// 是否是常规文字类别
const isNormalTextColor = computed(
  () =>
    props.textColor && ['primary', 'success', 'warning', 'danger', 'info'].includes(props.textColor)
)

const btnType = computed(() => {
  if (props.type === 'text') {
    // 判定textColor是否是默认类别
    return isNormalTextColor.value ? props.textColor : null
  }
  return props.type
})

const textStyle = computed(() => (isNormalTextColor.value ? {} : { color: props.textColor }))

defineExpose({
  ref: _ref
})
</script>
