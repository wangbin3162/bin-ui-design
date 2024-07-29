<template>
  <Transition name="fade-in-linear">
    <div :class="classes">
      <div class="bin-loading-inner">
        <slot>
          <div v-if="!showIcon">
            <svg class="circular" viewBox="25 25 50 50">
              <circle
                class="path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke-width="5"
                stroke-miterlimit="10"
              ></circle>
            </svg>
          </div>
          <i
            v-else
            class="b-iconfont loading-icon icon-is-rotating"
            :class="`b-icon-${showIcon}`"
          ></i>
        </slot>
        <slot name="text">
          <div v-if="text" class="loading-text" :style="textStyle">{{ text }}</div>
        </slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { LoadingProps } from './types'
import { ref, computed } from 'vue'

const prefixCls = 'bin-loading'
defineOptions({
  name: 'BLoading'
})

const props = withDefaults(defineProps<LoadingProps>(), {
  fix: true
})

const text = ref(props.showText)

const classes = computed(() => [
  `${prefixCls}`,
  {
    [`${prefixCls}-fix`]: props.fix,
    [`${prefixCls}-show-text`]: props.showText
  }
])
const textStyle = computed(() => ({
  fontSize: `${props.size}px`
}))

function setTitle(title: string) {
  text.value = title
}

defineExpose({ setTitle })
</script>
