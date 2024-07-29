<!-- eslint-disable vue/no-v-html -->
<template>
  <Transition name="bin-message-fade" @after-leave="destroyComponent">
    <div
      v-show="visible"
      :id="id"
      :class="[
        'bin-message',
        type && !iconClass ? `bin-message--${type}` : '',
        showClose ? 'is-closable' : '',
        customClass
      ]"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i v-if="type || iconClass" :class="[iconTypeClass, iconClass]"></i>
      <slot>
        <div v-if="!useHTML" class="bin-message__content">
          {{ message }}
        </div>
        <div v-else class="bin-message__content" v-html="message"></div>
      </slot>
      <div v-if="showClose" class="b-iconfont b-icon-close" @click.stop="close"></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import type { MessageProps } from './types'
import { EVENT_CODE } from '../../_utils/aria'
import { on, off } from '../../_utils/dom'

defineOptions({
  name: 'BMessage'
})

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3,
  offset: 20
})

const IconMap = {
  info: 'info-circle-fill',
  success: 'check-circle-fill',
  warning: 'warning-circle-fill',
  error: 'close-circle-fill'
}

const visible = ref(false)
const closed = ref(false)

const iconTypeClass = computed(() =>
  IconMap[props.type]
    ? `bin-message__icon b-iconfont b-icon-${IconMap[props.type]} is-${props.type}`
    : ''
)

const customStyle = computed(() => ({
  top: `${props.offset}px`,
  zIndex: props.zIndex
}))

let timer: any
function close() {
  timer = null
  closed.value = true
  visible.value = false
}
function startTimer() {
  if (props.duration === 0) return

  timer = setTimeout(() => {
    if (!closed.value) close()
  }, props.duration * 1000)
}

function clearTimer() {
  clearTimeout(timer)
  timer = null
}

function keydown(e: KeyboardEvent) {
  if (e.code === EVENT_CODE.esc) {
    // press esc to close the message
    if (!closed.value) {
      close()
    }
  } else {
    startTimer() // resume timer
  }
}

function destroyComponent() {
  props.onClose()
}
onMounted(() => {
  visible.value = true
  startTimer()
  on(document, 'keydown', keydown)
})

onBeforeUnmount(() => {
  off(document, 'keydown', keydown)
})

defineExpose({
  close
})
</script>
