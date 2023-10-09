<template>
  <Transition name="fade-in">
    <div
      v-if="visible"
      :style="{
        position: target ? 'absolute' : 'fixed',
        right: styleRight,
        bottom: styleBottom
      }"
      class="bin-back-top"
      @click.stop="handleClick"
    >
      <slot>
        <div class="bin-back-top-inner">
          <i class="b-iconfont b-icon-caret-up"></i>
        </div>
      </slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { throttle } from '../../_utils/util'
import { scrollTop, on, off } from '../../_utils/dom'
import type { BackTopProps } from './types'

defineOptions({
  name: 'BBackTop'
})

const emit = defineEmits(['click'])
const props = withDefaults(defineProps<BackTopProps>(), {
  visibleHeight: 400,
  right: 40,
  bottom: 40,
  duration: 1000
})

const el = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | Document | null>(null)
const visible = ref(false)
const styleBottom = computed(() => `${props.bottom}px`)
const styleRight = computed(() => `${props.right}px`)

const onScroll = () => {
  if (!el.value) return
  visible.value = el.value?.scrollTop >= props.visibleHeight
}

const handleClick = (e: MouseEvent) => {
  if (!el.value) return
  scrollTop(el.value, el.value.scrollTop, 0, props.duration, null)
  emit('click', e)
}

const throttledScrollHandler = throttle(onScroll, 50)

onMounted(() => {
  container.value = document
  el.value = document.documentElement
  if (props.target) {
    el.value = document.querySelector(props.target)
    if (!el.value) {
      throw new Error(`target is not existed: ${props.target}`)
    }
    container.value = el.value
  }
  on(container.value, 'scroll', throttledScrollHandler)
})
onBeforeUnmount(() => {
  off(container.value, 'scroll', throttledScrollHandler)
})
</script>
