<template>
  <button
    ref="_ref"
    v-click-animation
    class="bin-button"
    :class="{
      [`bin-button--${btnType}`]: btnType,
      [`bin-button--${size}`]: size,
      [`bin-button--text`]: isNormalTextColor || type === 'text',
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-dashed': dashed,
      'is-circle': circle,
      'is-transparent': transparent,
      'is-background': background
    }"
    :type="nativeType"
    :autofocus="autofocus"
    :disabled="disabled || loading"
    :theme-name="themeName"
  >
    <span
      v-if="icon || loading"
      class="bin-button__icon"
      :class="{ 'only-icon': icon && !$slots.default }"
    >
      <i
        v-if="loading"
        class="bin-button-loading icon-is-rotating"
        :class="[
          'b-iconfont',
          `b-icon-${loadingIcon || 'loading'}`,
          { 'has-text': $slots.default }
        ]"
        :style="{ ...textStyle, ...iconStyle }"
      />
      <i
        v-if="icon && !loading"
        :class="['b-iconfont', 'b-icon-' + icon]"
        :style="{ ...textStyle, ...iconStyle }"
      />
    </span>
    <span v-if="$slots.default" class="bin-button__content" :style="textStyle">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types'
import { ref, computed } from 'vue'
import clickAnimation from '../../_directives/click-animation'
import useTheme from '../../_hooks/use-theme'

defineOptions({
  name: 'BButton',
  directives: { clickAnimation }
})

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const { themeName } = useTheme()

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
  return props.type || 'default'
})

const textStyle = computed(() => (isNormalTextColor.value ? {} : { color: props.textColor }))

defineExpose({
  ref: _ref
})
</script>
