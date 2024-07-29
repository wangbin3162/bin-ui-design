<template>
  <div
    v-if="mask"
    :class="['bin-mask', maskClass]"
    :style="{ zIndex }"
    @click="onMaskClick"
    @mousedown="onMousedown"
    @mouseup="onMouseup"
  >
    <slot></slot>
  </div>
  <div
    v-else
    :style="{ zIndex, position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BMask'
})

const emit = defineEmits(['click'])
const props = defineProps({
  mask: {
    type: Boolean,
    default: true
  },
  maskClass: {
    type: String,
    default: ''
  },
  zIndex: {
    type: Number,
    default: 0
  }
})

let mousedownTarget = false
let mouseupTarget = false

// refer to this https://javascript.info/mouse-events-basics
// events fired in the order: mousedown -> mouseup -> click
// we need to set the mousedown handle to false after click
// fired.
const onMaskClick = (e: MouseEvent) => {
  if (mousedownTarget && mouseupTarget) {
    emit('click', e)
  }
  mousedownTarget = mouseupTarget = false
}

const onMousedown = (e: MouseEvent) => {
  // marking current mousedown target.
  if (props.mask) {
    mousedownTarget = e.target === e.currentTarget
  }
}
const onMouseup = (e: MouseEvent) => {
  if (props.mask) {
    mouseupTarget = e.target === e.currentTarget
  }
}
</script>
