<template>
  <div class="bin-scrollbar">
    <div
      ref="wrap"
      :class="[wrapClass, 'bin-scrollbar__wrap', 'bin-scrollbar__wrap--hidden-default']"
      :style="style"
      :tabindex="tabindex"
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
        :ratio="ratioX"
        :size="sizeWidth"
        :bar-style="barStyle"
        :bar-wrap-style="barWrapStyle"
      />
      <Bar
        :class="{ always }"
        vertical
        :move="moveY"
        :ratio="ratioY"
        :size="sizeHeight"
        :bar-style="barStyle"
        :bar-wrap-style="barWrapStyle"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { toObject } from './utils'
import { addResizeListener, removeResizeListener } from '../../../_utils/resize-event'
import { on, off } from '../../../_utils/dom'
import { scrollbarProps } from './types'
import { ref, onMounted, onBeforeUnmount, nextTick, provide, computed, watch } from 'vue'
import Bar from './bar'
import type { ScrollbarDirection, ScrollbarScrollData } from './types'

defineOptions({
  name: 'BScrollbar'
})

const props = defineProps(scrollbarProps)
const emit = defineEmits<{
  (e: 'scroll', payload: ScrollbarScrollData): void
  (e: 'end-reached', direction: ScrollbarDirection): void
}>()

const sizeWidth = ref('0')
const sizeHeight = ref('0')
const moveX = ref(0)
const moveY = ref(0)
const ratioX = ref(1)
const ratioY = ref(1)
const wrap = ref<HTMLElement | null>(null)
const resize = ref<HTMLElement | null>(null)
const GAP = 4
const DIRECTION_PAIRS: Record<ScrollbarDirection, ScrollbarDirection> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left'
}
const distanceScrollState: Record<ScrollbarDirection, boolean> = {
  top: false,
  bottom: false,
  left: false,
  right: false
}
let wrapScrollTop = 0
let wrapScrollLeft = 0
let direction = '' as ScrollbarDirection | ''

provide('scroll-bar-wrap', wrap)

const shouldSkipDirection = (currentDirection: ScrollbarDirection | '') => {
  if (!currentDirection) return false
  return distanceScrollState[currentDirection]
}

const updateTriggerStatus = (arrivedStates: Record<ScrollbarDirection, boolean>) => {
  if (!direction) return

  const oppositeDirection = DIRECTION_PAIRS[direction]
  const arrived = arrivedStates[direction]
  const oppositeArrived = arrivedStates[oppositeDirection]

  if (arrived && !distanceScrollState[direction]) {
    distanceScrollState[direction] = true
  }

  if (!oppositeArrived && distanceScrollState[oppositeDirection]) {
    distanceScrollState[oppositeDirection] = false
  }
}

const handleScroll = () => {
  if (!props.native && wrap.value) {
    const offsetHeight = wrap.value.offsetHeight - GAP
    const offsetWidth = wrap.value.offsetWidth - GAP

    moveY.value = offsetHeight > 0 ? ((wrap.value.scrollTop * 100) / offsetHeight) * ratioY.value : 0
    moveX.value = offsetWidth > 0 ? ((wrap.value.scrollLeft * 100) / offsetWidth) * ratioX.value : 0
  }

  if (wrap.value) {
    const prevTop = wrapScrollTop
    const prevLeft = wrapScrollLeft

    wrapScrollTop = wrap.value.scrollTop
    wrapScrollLeft = wrap.value.scrollLeft

    emit('scroll', {
      scrollTop: wrapScrollTop,
      scrollLeft: wrapScrollLeft
    })

    if (prevTop !== wrapScrollTop) {
      direction = wrapScrollTop > prevTop ? 'bottom' : 'top'
    }
    if (prevLeft !== wrapScrollLeft) {
      direction = wrapScrollLeft > prevLeft ? 'right' : 'left'
    }

    if (!direction) return

    const arrivedStates: Record<ScrollbarDirection, boolean> = {
      bottom: wrap.value.scrollHeight - props.distance <= wrap.value.clientHeight + wrapScrollTop,
      top: wrapScrollTop <= props.distance && prevTop !== 0,
      right:
        wrap.value.scrollWidth - props.distance <= wrap.value.clientWidth + wrapScrollLeft &&
        prevLeft !== wrapScrollLeft,
      left: wrapScrollLeft <= props.distance && prevLeft !== 0
    }

    if (props.distance > 0) {
      if (shouldSkipDirection(direction)) {
        return
      }
      updateTriggerStatus(arrivedStates)
    }

    if (arrivedStates[direction]) {
      emit('end-reached', direction)
    }
  }
}

const update = () => {
  if (!wrap.value) return

  const offsetHeight = wrap.value.offsetHeight - GAP
  const offsetWidth = wrap.value.offsetWidth - GAP
  const scrollHeight = wrap.value.scrollHeight
  const scrollWidth = wrap.value.scrollWidth
  const originalHeight = scrollHeight > 0 ? offsetHeight ** 2 / scrollHeight : 0
  const originalWidth = scrollWidth > 0 ? offsetWidth ** 2 / scrollWidth : 0
  const height = Math.max(originalHeight, props.minSize)
  const width = Math.max(originalWidth, props.minSize)

  ratioY.value =
    originalHeight && offsetHeight > height
      ? originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height))
      : 1
  ratioX.value =
    originalWidth && offsetWidth > width
      ? originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width))
      : 1

  sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
  sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''

  if (direction) {
    distanceScrollState[direction] = false
  }

  handleScroll()
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
  const height = normalizeUnit(props.height)
  const maxHeight = normalizeUnit(props.maxHeight)
  const sizeStyle: Record<string, string> = {}

  if (height) {
    sizeStyle.height = height
  }
  if (maxHeight) {
    sizeStyle.maxHeight = maxHeight
  }

  if (Array.isArray(props.wrapStyle)) {
    return [toObject(props.wrapStyle), sizeStyle]
  }
  if (props.wrapStyle && typeof props.wrapStyle === 'object') {
    return {
      ...props.wrapStyle,
      ...sizeStyle
    }
  }
  if (props.wrapStyle) {
    return [props.wrapStyle, sizeStyle]
  }
  return sizeStyle
})

watch(
  () => [props.height, props.maxHeight],
  () => {
    if (!props.native) {
      nextTick(update)
    }
  }
)

function normalizeUnit(value: string | number) {
  if (value === '' || value === undefined || value === null) return ''
  return typeof value === 'number' ? `${value}px` : value
}

function scrollTo(xCord: number, yCord?: number): void
function scrollTo(options: ScrollToOptions): void
function scrollTo(arg1: number | ScrollToOptions, arg2?: number) {
  if (!wrap.value) return

  if (typeof arg1 === 'object') {
    wrap.value.scrollTo(arg1)
  } else if (typeof arg1 === 'number') {
    wrap.value.scrollTo(arg1, typeof arg2 === 'number' ? arg2 : wrap.value.scrollTop)
  }
}

function setScrollTop(value: number) {
  if (!wrap.value) return
  wrap.value.scrollTop = value
}

function setScrollLeft(value: number) {
  if (!wrap.value) return
  wrap.value.scrollLeft = value
}

defineExpose({
  wrapRef: wrap,
  handleScroll,
  update,
  scrollTo,
  setScrollTop,
  setScrollLeft
})
</script>
