<template>
  <div class="nav-wrap" :class="{ 'is-scrollable': data.isScrollable }">
    <template v-if="!hideArrow && data.isScrollable">
      <span class="nav-prev" :class="{ disabled: hidePrev }" @click="handlePrev">
        <i class="b-iconfont b-icon-left" />
      </span>
      <span class="nav-next" :class="{ disabled: hideNext }" @click="handleNext">
        <i class="b-iconfont b-icon-right" />
      </span>
    </template>
    <div ref="scrollContainerRef" class="scroll-container" @wheel.prevent="handleScroll">
      <div
        ref="scrollWrapperRef"
        class="scroll-wrapper"
        :style="{ transform: `translateX(${data.left}px)` }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'

const padding = 16 // tag's padding

defineOptions({
  name: 'ScrollPane'
})
defineProps({
  hideArrow: Boolean
})

const scrollContainerRef = ref<HTMLElement | null>(null)
const scrollWrapperRef = ref<HTMLElement | null>(null)
const data = reactive({
  left: 0,
  isScrollable: false
})

const calcWidth = () => {
  if (!scrollContainerRef.value || !scrollWrapperRef.value) return
  const $containerWidth = scrollContainerRef.value?.offsetWidth
  const $wrapperWidth = scrollWrapperRef.value?.offsetWidth
  data.isScrollable = $wrapperWidth > $containerWidth - padding
  if (!data.isScrollable) {
    data.left = 0
  }
}

const moveStep = (step, containerWidth, wrapperWidth) => {
  if (step > 0) {
    data.left = Math.min(0, data.left + step)
  } else {
    if (containerWidth - padding < wrapperWidth) {
      if (data.left < -(wrapperWidth - containerWidth + padding)) {
        // this.left = this.left
      } else {
        data.left = Math.max(data.left + step, containerWidth - wrapperWidth - padding)
      }
    } else {
      data.left = 0
    }
  }
}
const handleScroll = e => {
  const eventDelta = e.wheelDelta * 0.5 || -e.deltaY * 3
  const $containerWidth = scrollContainerRef.value?.offsetWidth
  const $wrapperWidth = scrollWrapperRef.value?.offsetWidth
  moveStep(eventDelta, $containerWidth, $wrapperWidth)
}
const handlePrev = () => {
  if (!scrollContainerRef.value || !scrollWrapperRef.value) return
  const $containerWidth = scrollContainerRef.value?.offsetWidth
  const $wrapperWidth = scrollWrapperRef.value?.offsetWidth
  // 缓存容器宽度
  let moveWidth = $containerWidth - padding * 0.5
  moveStep(moveWidth, $containerWidth, $wrapperWidth)
}

const handleNext = () => {
  if (!scrollContainerRef.value || !scrollWrapperRef.value) return
  const $containerWidth = scrollContainerRef.value?.offsetWidth
  const $wrapperWidth = scrollWrapperRef.value?.offsetWidth
  // 缓存容器宽度
  let moveWidth = $containerWidth - padding * 0.5
  moveStep(-moveWidth, $containerWidth, $wrapperWidth)
}

const moveToTarget = ($target: HTMLElement) => {
  if (!scrollContainerRef.value || !scrollWrapperRef.value) return
  const $containerWidth = scrollContainerRef.value?.offsetWidth
  const $wrapperWidth = scrollWrapperRef.value?.offsetWidth

  const $targetLeft = $target.offsetLeft
  const $targetWidth = $target.offsetWidth
  data.isScrollable = $wrapperWidth > $containerWidth - padding

  if ($targetLeft < -data.left) {
    // tag in the left
    data.left = -$targetLeft + padding
  } else if (
    $targetLeft + padding > -data.left &&
    $targetLeft + $targetWidth < -data.left + $containerWidth - padding
  ) {
    // tag in the current view
    // eslint-disable-line
  } else {
    // tag in the right
    data.left = $containerWidth - $wrapperWidth - padding
  }
  if (!data.isScrollable) {
    data.left = 0
  }
}
const hidePrev = computed(() => data.left === 0)
const hideNext = computed(() =>
  scrollContainerRef.value && scrollWrapperRef.value
    ? data.left ===
      scrollContainerRef.value?.offsetWidth - scrollWrapperRef.value?.offsetWidth - padding
    : false
)
onMounted(() => {
  calcWidth()
})

defineExpose({
  calcWidth,
  moveToTarget
})
</script>
