<template>
  <div
    v-show="data.ready"
    class="bin-carousel__item"
    :class="{
      'is-active': data.active,
      'bin-carousel__item--card': type === 'card',
      'is-in-stage': data.inStage,
      'is-hover': data.hover,
      'is-animating': data.animating
    }"
    :style="itemStyle"
    @click="handleItemClick"
  >
    <div v-if="type === 'card'" v-show="!data.active" class="bin-carousel__mask"></div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, inject, computed, toRefs, getCurrentInstance } from 'vue'
import { autoprefixer } from '../../_utils/util-helper'
import type { CarouselItemProps, CarouselInject } from './types'

const CARD_SCALE = 0.83
defineOptions({
  name: 'BCarouselItem'
})
const props = withDefaults(defineProps<CarouselItemProps>(), {
  label: '',
  name: ''
})

// instance
const instance = getCurrentInstance()

// data
const data = reactive({
  hover: false,
  translate: 0,
  scale: 1,
  active: false,
  ready: false,
  inStage: false,
  animating: false
})

// inject
const injectCarouselScope = inject<CarouselInject>('injectCarouselScope')

// @ts-ignore
const type = computed(() => injectCarouselScope?.type)

// @ts-ignore
const parentDirection = computed(() => injectCarouselScope?.direction)

const itemStyle = computed(() => {
  const translateType = parentDirection.value === 'vertical' ? 'translateY' : 'translateX'
  const value = `${translateType}(${data.translate}px) scale(${data.scale})`
  const style = {
    transform: value
  }
  return autoprefixer(style)
})

// methods

function processIndex(index, activeIndex, length) {
  if (activeIndex === 0 && index === length - 1) {
    return -1
  } else if (activeIndex === length - 1 && index === 0) {
    return length
  } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
    return length + 1
  } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
    return -2
  }
  return index
}

function calcCardTranslate(index, activeIndex) {
  // @ts-ignore
  const parentWidth = injectCarouselScope.offsetWidth.value
  if (data.inStage) {
    return (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
  } else if (index < activeIndex) {
    return (-(1 + CARD_SCALE) * parentWidth) / 4
  } else {
    return ((3 + CARD_SCALE) * parentWidth) / 4
  }
}

function calcTranslate(index, activeIndex, isVertical) {
  // @ts-ignore
  const distance = injectCarouselScope[isVertical ? 'offsetHeight' : 'offsetWidth'].value
  return distance * (index - activeIndex)
}

const translateItem = (index, activeIndex, oldIndex) => {
  // @ts-ignore
  const parentType = injectCarouselScope.type // @ts-ignore
  const length = injectCarouselScope.items.value.length
  if (parentType !== 'card' && oldIndex !== undefined) {
    data.animating = index === activeIndex || index === oldIndex
  } // @ts-ignore
  if (index !== activeIndex && length > 2 && injectCarouselScope.loop) {
    index = processIndex(index, activeIndex, length)
  }
  if (parentType === 'card') {
    if (parentDirection.value === 'vertical') {
      console.warn('[Element Warn][Carousel]vertical direction is not supported in card mode')
    }
    data.inStage = Math.round(Math.abs(index - activeIndex)) <= 1
    data.active = index === activeIndex
    data.translate = calcCardTranslate(index, activeIndex)
    data.scale = data.active ? 1 : CARD_SCALE
  } else {
    data.active = index === activeIndex
    const isVertical = parentDirection.value === 'vertical'
    data.translate = calcTranslate(index, activeIndex, isVertical)
  }
  data.ready = true
}

function handleItemClick() {
  if (injectCarouselScope && injectCarouselScope.type === 'card') {
    // @ts-ignore
    const index = injectCarouselScope.items.value.map(d => d.uid).indexOf(instance.uid)
    injectCarouselScope.setActiveItem(index)
  }
}

// lifecycle
onMounted(() => {
  // @ts-ignore
  if (injectCarouselScope.updateItems) {
    // @ts-ignore
    injectCarouselScope.updateItems({
      // @ts-ignore
      uid: instance.uid,
      ...props,
      ...toRefs(data),
      translateItem
    })
  }
})
</script>
