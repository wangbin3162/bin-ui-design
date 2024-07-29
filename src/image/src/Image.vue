<template>
  <div ref="imageRef" class="bin-image" :style="imageStyles">
    <div v-if="loading" class="bin-image-placeholder">
      <slot name="placeholder">
        <span>{{ loadingText }}</span>
      </slot>
    </div>
    <div v-else-if="imageError" class="bin-image-error">
      <slot name="error">
        <span>{{ failText }}</span>
      </slot>
    </div>
    <div v-if="loadingImage" :class="innerClasses" @click="handlePreview">
      <img
        :class="imgClasses"
        :style="[fitStyle]"
        :alt="alt"
        :src="src"
        :loading="loadingType"
        :referrerPolicy="referrerPolicy"
        @load="handleImageLoad"
        @error="handleImageError"
      />
      <slot v-if="preview && previewTip" name="preview">
        <div class="bin-image-mark">
          <span>{{ previewText }}</span>
        </div>
      </slot>
    </div>
    <template v-if="preview">
      <ImagePreview
        v-model="imagePreviewModal"
        :preview-list="previewList"
        :initial-index="initialIndex"
        :infinite="infinite"
        :mask-closable="maskClosable"
        :append-to-body="appendToBody"
        :toolbar="toolbar"
        @close="handleClose"
        @switch="handleSwitch"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { imageProps } from './types'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import ImagePreview from '../../image-preview/src/ImagePreview.vue'

const isClient = typeof window !== 'undefined'

// is Element
const isElement = el => {
  return typeof HTMLElement === 'object' && el instanceof HTMLElement
}

const emit = defineEmits(['load', 'error', 'switch', 'close', 'click'])
defineOptions({
  name: 'BImage'
})

const props = defineProps(imageProps)

const loadingImage = ref(false)
const loading = ref(false)
const imageError = ref(false)
const scrollElement = ref(null)
const observer = ref(null)
const imagePreviewModal = ref(false)
const imageRef = ref(null)

const innerClasses = computed(() => {
  return [
    'bin-image-inner',
    {
      ['bin-image-cursor']: props.preview
    }
  ]
})
const imgClasses = computed(() => {
  return [
    'bin-image-img',
    {
      ['bin-image-img-hidden']: loading.value || imageError.value
    }
  ]
})
const fitStyle = computed(() => {
  const fitContains = ['fill', 'contain', 'cover', 'none', 'scale-down']
  const { fit } = props
  return fitContains.includes(fit) ? `object-fit:${fit};` : ''
})
const imageStyles = computed(() => {
  return {
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    height: typeof props.height === 'number' ? `${props.height}px` : props.height
  }
})
const loadingType = computed(() => {
  return props.lazy ? 'lazy' : 'eager'
})

function loadImage() {
  loading.value = true
  imageError.value = false
  loadingImage.value = true
}

function offObserver() {
  observer.value && observer.value.disconnect()
}

function handlerObserveImage(entries) {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      // destory new IntersectionObserver
      offObserver()
      // run image onload
      loadImage()
    }
  }
}

function handleLazy() {
  const $el = imageRef.value
  observer.value = new IntersectionObserver(handlerObserveImage, {
    root: scrollElement.value,
    rootMargin: '0px',
    threshold: 0
  })
  observer.value.observe($el)
}

function addLazyImageListener() {
  const { scrollContainer } = props
  scrollElement.value = null
  if (isElement(scrollContainer)) {
    scrollElement.value = scrollContainer
  } else if (scrollContainer && typeof scrollContainer === 'string') {
    scrollElement.value = document.querySelector(scrollContainer)
  }
  // on scrollElement scroll
  handleLazy()
}

function handleImageEvent() {
  if (props.lazy) addLazyImageListener()
  else loadImage()
}

function handleImageLoad() {
  loading.value = false
  imageError.value = false
  emit('load')
}

function handlePreview() {
  const { preview, initialIndex } = props
  if (preview) {
    imagePreviewModal.value = true
    // reslove click image get the currentIndex to do other thing
    emit('click', { initialIndex })
  }
}

function handleImageError() {
  loading.value = false
  imageError.value = true
  loadingImage.value = false
  emit('error')
}

function handleClose() {
  emit('close')
}
function handleSwitch(params) {
  emit('switch', params)
}

onMounted(() => {
  if (isClient) {
    handleImageEvent()
  }
})

onBeforeUnmount(() => {
  offObserver()
})
defineExpose({})
</script>
