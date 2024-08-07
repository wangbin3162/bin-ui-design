<template>
  <div ref="root" class="bin-affix" :style="rootStyle">
    <div :class="{ 'bin-affix--fixed': state.fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch, nextTick } from 'vue'
import { off, on } from '../../_utils/dom'
import { addResizeListener, removeResizeListener } from '../../_utils/resize-event'
import type { AffixProps } from './types'

defineOptions({
  name: 'BAffix'
})

const emit = defineEmits(['scroll', 'change'])
const props = withDefaults(defineProps<AffixProps>(), {
  zIndex: 10,
  target: '',
  offset: 0,
  position: 'top'
})

const target = ref<HTMLElement | null>(null)
const root = ref<HTMLElement | null>(null)
const scrollContainer = ref<HTMLElement | Window | null>(null)

const state = reactive({
  fixed: false,
  height: 0, // height of root
  width: 0, // width of root
  scrollTop: 0, // scrollTop of documentElement
  clientHeight: 0, // clientHeight of documentElement
  transform: 0
})

const rootStyle = computed(() => ({
  height: state.fixed ? `${state.height}px` : '',
  width: state.fixed ? `${state.width}px` : ''
}))

const affixStyle = computed(() => {
  if (!state.fixed) {
    return
  }
  const offset = props.offset ? `${props.offset}px` : 0
  const transform = state.transform ? `translateY(${state.transform}px)` : ''

  return {
    height: `${state.height}px`,
    width: `${state.width}px`,
    top: props.position === 'top' ? offset : '',
    bottom: props.position === 'bottom' ? offset : '',
    transform: transform,
    zIndex: props.zIndex
  }
})

const updateState = () => {
  if (!root.value || !target.value) return
  const rootRect = root.value?.getBoundingClientRect()
  const targetRect = target.value?.getBoundingClientRect()
  state.height = rootRect.height
  state.width = rootRect.width
  state.scrollTop =
    scrollContainer.value === window
      ? document.documentElement.scrollTop
      : (scrollContainer.value as HTMLElement).scrollTop
  state.clientHeight = document.documentElement.clientHeight

  if (props.position === 'top') {
    if (target.value) {
      const difference = targetRect.bottom - props.offset - state.height
      state.fixed = props.offset > rootRect.top && targetRect.bottom > 0
      state.transform = difference < 0 ? difference : 0
    } else {
      state.fixed = props.offset > rootRect.top
    }
  } else {
    if (target.value) {
      const difference = state.clientHeight - targetRect.top - props.offset - state.height
      state.fixed =
        state.clientHeight - props.offset < rootRect.bottom && state.clientHeight > targetRect.top
      state.transform = difference < 0 ? -difference : 0
    } else {
      state.fixed = state.clientHeight - props.offset < rootRect.bottom
    }
  }
}

const onScroll = () => {
  updateState()
  emit('scroll', {
    scrollTop: state.scrollTop,
    fixed: state.fixed
  })
}

watch(
  () => state.fixed,
  () => {
    emit('change', state.fixed)
  }
)

onMounted(() => {
  if (props.target) {
    target.value = document.querySelector(props.target)
    if (!target.value) {
      throw new Error(`target is not existed: ${props.target}`)
    }
  } else {
    target.value = document.documentElement
  }
  scrollContainer.value = [window, document, document.documentElement].includes(target.value)
    ? window
    : target.value

  on(scrollContainer.value, 'scroll', onScroll)
  addResizeListener(root.value, updateState)
  nextTick(() => {
    onScroll()
  })
})

onBeforeUnmount(() => {
  off(scrollContainer.value, 'scroll', onScroll)
  removeResizeListener(root.value, updateState)
})
</script>
