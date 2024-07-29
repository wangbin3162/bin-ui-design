<template>
  <transition name="fade-in">
    <div v-show="show" class="bin-loading-bar" :style="outerStyles">
      <div :class="innerClasses" :style="styles"></div>
      <div v-if="icon" class="icon" :class="iconClasses">
        <i :class="`b-iconfont b-icon-${icon} icon-is-rotating`" :style="iconStyle"></i>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { LoadingBarProps } from './types'
import { ref, computed } from 'vue'

defineOptions({
  name: 'BLoadingBar'
})

const props = withDefaults(defineProps<LoadingBarProps>(), {
  color: 'primary',
  failedColor: 'error',
  height: 2
})
const percent = ref(0)
const status = ref('success')
const show = ref(false)

const prefixCls = 'bin-loading-bar'
const innerClasses = computed(() => [
  `${prefixCls}-inner`,
  {
    [`${prefixCls}-inner-color-primary`]: props.color === 'primary' && status.value === 'success',
    [`${prefixCls}-inner-failed-color-error`]:
      props.failedColor === 'error' && status.value === 'error'
  }
])

const outerStyles = computed(() => ({
  height: `${props.height}px`
}))

const iconClasses = computed(() => [
  {
    ['icon-color-primary']: props.color === 'primary' && status.value === 'success',
    ['icon-failed-color-error']: props.failedColor === 'error' && status.value === 'error'
  }
])

const styles = computed(() => {
  let style = {
    width: `${percent.value}%`,
    height: `${props.height}px`
  } as Record<string, any>

  if (props.color !== 'primary' && status.value === 'success') {
    style.backgroundColor = props.color
  }

  if (props.failedColor !== 'error' && status.value === 'error') {
    style.backgroundColor = props.failedColor
  }

  return style
})

const iconStyle = computed(() => {
  let style = {} as Record<string, any>

  if (props.color !== 'primary' && status.value === 'success') {
    style.color = props.color
  }

  if (props.failedColor !== 'error' && status.value === 'error') {
    style.color = props.failedColor
  }

  return style
})

defineExpose({
  percent,
  show,
  status
})
</script>
