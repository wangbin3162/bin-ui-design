<template>
  <div class="bin-scrollbar">
    <div
      ref="wrap"
      :class="[wrapClass, 'bin-scrollbar__wrap', 'bin-scrollbar__wrap--hidden-default']"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize"
        :class="['bin-scrollbar__view', viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <Bar
        :class="{ always }"
        :move="moveX"
        :size="sizeWidth"
        :bar-style="barStyle"
        :bar-wrap-style="barWrapStyle"
      />
      <Bar
        :class="{ always }"
        vertical
        :move="moveY"
        :size="sizeHeight"
        :bar-style="barStyle"
        :bar-wrap-style="barWrapStyle"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { toObject } from './utils'
import { addResizeListener, removeResizeListener } from '../../../_utils/resize-event'
import { on, off } from '../../../_utils/dom'
import { scrollbarProps } from './types'
import { ref, onMounted, onBeforeUnmount, nextTick, provide, computed } from 'vue'
import Bar from './bar'

defineOptions({
  name: 'BScrollbar'
})

const props = defineProps(scrollbarProps)

const sizeWidth = ref('0')
const sizeHeight = ref('0')
const moveX = ref(0)
const moveY = ref(0)
const wrap = ref<HTMLElement | null>(null)
const resize = ref<HTMLElement | null>(null)

provide('scroll-bar-wrap', wrap)

const handleScroll = () => {
  if (!props.native && wrap.value) {
    moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight
    moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth
  }
}

const update = () => {
  if (!wrap.value) return

  const heightPercentage = (wrap.value.clientHeight * 100) / wrap.value.scrollHeight
  const widthPercentage = (wrap.value.clientWidth * 100) / wrap.value.scrollWidth

  sizeHeight.value = heightPercentage < 100 ? heightPercentage + '%' : ''
  sizeWidth.value = widthPercentage < 100 ? widthPercentage + '%' : ''
}

onMounted(() => {
  if (props.native) return
  nextTick(update)
  if (!props.noresize) {
    on(window, 'resize', update)
    addResizeListener(resize.value, update)
  }
})

onBeforeUnmount(() => {
  if (props.native) return
  if (!props.noresize) {
    off(window, 'resize', update)
    removeResizeListener(resize.value, update)
  }
})
const style = computed(() => {
  let style = props.wrapStyle
  if (Array.isArray(props.wrapStyle)) {
    style = toObject(props.wrapStyle)
  }
  return style
})
</script>
