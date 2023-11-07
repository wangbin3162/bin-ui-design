<template>
  <div class="bin-color-hue-slider" :class="{ 'is-vertical': vertical }">
    <div ref="bar" class="bin-color-hue-slider__bar" @click="handleClick"></div>
    <div
      ref="thumb"
      class="bin-color-hue-slider__thumb"
      :style="{
        left: thumbLeft + 'px',
        top: thumbTop + 'px'
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted, getCurrentInstance, defineComponent } from 'vue'
import draggable from './draggable'

export default defineComponent({
  name: 'BColorHueSlider',
  props: {
    color: {
      type: Object,
      required: true
    },
    vertical: Boolean
  },
  setup(props) {
    const instance = getCurrentInstance()
    // ref
    const thumb = ref(null)
    const bar = ref(null)
    // data
    const thumbLeft = ref(0)
    const thumbTop = ref(0)
    // computed
    const hueValue = computed(() => {
      return props.color.get('hue')
    })
    // watch
    watch(
      () => hueValue.value,
      () => {
        update()
      }
    )
    // methods
    function handleClick(event) {
      const target = event.target

      if (target !== thumb.value) {
        handleDrag(event)
      }
    }
    function handleDrag(event) {
      // @ts-ignore
      const el = instance.vnode.el
      // @ts-ignore
      const rect = el.getBoundingClientRect()
      let hue

      if (!props.vertical) {
        let left = event.clientX - rect.left
        // @ts-ignore
        left = Math.min(left, rect.width - thumb.value.offsetWidth / 2)
        // @ts-ignore
        left = Math.max(thumb.value.offsetWidth / 2, left)

        hue = Math.round(
          // @ts-ignore
          ((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth)) * 360
        )
      } else {
        let top = event.clientY - rect.top

        // @ts-ignore
        top = Math.min(top, rect.height - thumb.value.offsetHeight / 2)
        // @ts-ignore
        top = Math.max(thumb.value.offsetHeight / 2, top)
        hue = Math.round(
          // @ts-ignore
          ((top - thumb.value.offsetHeight / 2) / (rect.height - thumb.value.offsetHeight)) * 360
        )
      }
      props.color.set('hue', hue)
    }
    function getThumbLeft() {
      // @ts-ignore
      const el = instance.vnode.el

      if (props.vertical) return 0
      const hue = props.color.get('hue')

      if (!el) return 0
      // @ts-ignore
      return Math.round((hue * (el.offsetWidth - thumb.value.offsetWidth / 2)) / 360)
    }

    function getThumbTop() {
      // @ts-ignore
      const el = instance.vnode.el
      if (!props.vertical) return 0
      const hue = props.color.get('hue')

      if (!el) return 0
      // @ts-ignore
      return Math.round((hue * (el.offsetHeight - thumb.value.offsetHeight / 2)) / 360)
    }
    function update() {
      thumbLeft.value = getThumbLeft()
      thumbTop.value = getThumbTop()
    }
    // mounded
    onMounted(() => {
      const dragConfig = {
        drag: event => {
          handleDrag(event)
        },
        end: event => {
          handleDrag(event)
        }
      }

      draggable(bar.value, dragConfig)
      draggable(thumb.value, dragConfig)
      update()
    })

    return {
      bar,
      thumb,
      thumbLeft,
      thumbTop,
      hueValue,
      handleClick,
      update
    }
  }
})
</script>
