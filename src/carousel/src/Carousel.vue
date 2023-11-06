<template>
  <div
    ref="root"
    :class="carouselClasses"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div class="bin-carousel__container" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button
          v-show="(arrow === 'always' || data.hover) && (props.loop || data.activeIndex > 0)"
          type="button"
          class="bin-carousel__arrow bin-carousel__arrow--left"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(data.activeIndex - 1)"
        >
          <i class="b-iconfont b-icon-left"></i>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button
          v-show="
            (arrow === 'always' || data.hover) &&
            (props.loop || data.activeIndex < items.length - 1)
          "
          type="button"
          class="bin-carousel__arrow bin-carousel__arrow--right"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(data.activeIndex + 1)"
        >
          <i class="b-iconfont b-icon-right"></i>
        </button>
      </transition>
      <slot></slot>
    </div>
    <ul v-if="indicatorPosition !== 'none'" :class="indicatorsClasses">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'bin-carousel__indicator',
          'bin-carousel__indicator--' + direction,
          { 'is-active': index === data.activeIndex }
        ]"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button class="bin-carousel__button">
          <span v-if="hasLabel">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { reactive, computed, ref, provide, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { addResizeListener, removeResizeListener } from '../../_utils/resize-event'
import { throttle } from '../../_utils/util'
import type { CarouselProps, CarouselInject } from './types'

defineOptions({
  name: 'BCarousel'
})

const emit = defineEmits(['change'])
const props = withDefaults(defineProps<CarouselProps>(), {
  initialIndex: 0,
  height: '',
  trigger: 'hover',
  interval: 3000,
  indicatorPosition: '',
  indicator: true,
  arrow: 'hover',
  type: '',
  direction: 'horizontal'
})

// data
const data = reactive({
  activeIndex: -1,
  containerWidth: 0,
  timer: null,
  hover: false
})

// refs
const root = ref(null)
const items = ref([])
const offsetWidth = ref(0)
const offsetHeight = ref(0)

// computed
const arrowDisplay = computed(() => props.arrow !== 'never' && props.direction !== 'vertical')

const hasLabel = computed(() => {
  // @ts-ignore
  return items.value.some(item => item.label.toString().length > 0)
})

const carouselClasses = computed(() => {
  const classes = ['bin-carousel', 'bin-carousel--' + props.direction]
  if (props.type === 'card') {
    classes.push('bin-carousel--card')
  }
  return classes
})

const indicatorsClasses = computed(() => {
  const classes = ['bin-carousel__indicators', 'bin-carousel__indicators--' + props.direction]
  if (hasLabel.value) {
    classes.push('bin-carousel__indicators--labels')
  }
  if (props.indicatorPosition === 'outside' || props.type === 'card') {
    classes.push('bin-carousel__indicators--outside')
  }
  return classes
})

// methods
const throttledArrowClick = index => {
  throttle(setActiveItem(index), 300, true)
}

const throttledIndicatorHover = index => {
  throttle(handleIndicatorHover(index), 300)
}

function pauseTimer() {
  if (data.timer) {
    clearInterval(data.timer)
    data.timer = null
  }
}

function startTimer() {
  if (props.interval <= 0 || !props.autoplay || data.timer) return
  // @ts-ignore
  data.timer = setInterval(() => playSlides(), props.interval)
}

const playSlides = () => {
  if (data.activeIndex < items.value.length - 1) {
    data.activeIndex = data.activeIndex + 1
  } else if (props.loop) {
    data.activeIndex = 0
  }
}

function setActiveItem(index: number) {
  if (typeof index === 'string') {
    // @ts-ignore
    const filteredItems = items.value.filter(item => item.name === index)
    if (filteredItems.length > 0) {
      index = items.value.indexOf(filteredItems[0])
    }
  }
  index = Number(index)
  if (isNaN(index) || index !== Math.floor(index)) {
    console.warn('[Element Warn][Carousel]index must be an integer.')
    return
  }
  let length = items.value.length
  const oldIndex = data.activeIndex
  if (index < 0) {
    data.activeIndex = props.loop ? length - 1 : 0
  } else if (index >= length) {
    data.activeIndex = props.loop ? 0 : length - 1
  } else {
    data.activeIndex = index
  }
  if (oldIndex === data.activeIndex) {
    resetItemPosition(oldIndex)
  }
}

function resetItemPosition(oldIndex) {
  items.value.forEach((item, index) => {
    // @ts-ignore
    item.translateItem(index, data.activeIndex, oldIndex)
  })
}

function updateItems(item) {
  // @ts-ignore
  items.value.push(item)
}

function itemInStage(item, index) {
  const length = items.value.length
  if (
    // @ts-ignore
    (index === length - 1 && item.inStage && items.value[0].active) ||
    // @ts-ignore
    (item.inStage && items.value[index + 1] && items.value[index + 1].active)
  ) {
    return 'left'
  } else if (
    // @ts-ignore
    (index === 0 && item.inStage && items.value[length - 1].active) ||
    // @ts-ignore
    (item.inStage && items.value[index - 1] && items.value[index - 1].active)
  ) {
    return 'right'
  }
  return false
}

function handleMouseEnter() {
  data.hover = true
  pauseTimer()
}

function handleMouseLeave() {
  data.hover = false
  startTimer()
}

function handleButtonEnter(arrow) {
  if (props.direction === 'vertical') return
  items.value.forEach((item, index) => {
    if (arrow === itemInStage(item, index)) {
      // @ts-ignore
      item.hover = true
    }
  })
}

function handleButtonLeave() {
  if (props.direction === 'vertical') return
  items.value.forEach(item => {
    // @ts-ignore
    item.hover = false
  })
}

function handleIndicatorClick(index) {
  data.activeIndex = index
}

function handleIndicatorHover(index) {
  if (props.trigger === 'hover' && index !== data.activeIndex) {
    data.activeIndex = index
  }
}

function prev() {
  setActiveItem(data.activeIndex - 1)
}

function next() {
  setActiveItem(data.activeIndex + 1)
}

// watch
watch(
  () => data.activeIndex,
  (current, prev) => {
    resetItemPosition(prev)
    if (prev > -1) {
      emit('change', current, prev)
    }
  }
)
watch(
  () => props.autoplay,
  current => {
    current ? startTimer() : pauseTimer()
  }
)
watch(
  () => props.loop,
  () => {
    setActiveItem(data.activeIndex)
  }
)

// lifecycle
onMounted(() => {
  nextTick(() => {
    addResizeListener(root.value, resetItemPosition)
    if (root.value) {
      // @ts-ignore
      offsetWidth.value = root.value.offsetWidth
      // @ts-ignore
      offsetHeight.value = root.value.offsetHeight
    }
    if (props.initialIndex < items.value.length && props.initialIndex >= 0) {
      data.activeIndex = props.initialIndex
    }
    startTimer()
  })
})

onBeforeUnmount(() => {
  if (root.value) removeResizeListener(root.value, resetItemPosition)
  pauseTimer()
})

// provide
provide<CarouselInject>('injectCarouselScope', {
  direction: props.direction,
  offsetWidth,
  offsetHeight,
  type: props.type,
  // @ts-ignore
  items,
  loop: props.loop,
  updateItems,
  setActiveItem
})

defineExpose({
  prev,
  next
})
</script>
