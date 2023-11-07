<template>
  <div class="bin-color-alpha-slider" :class="{ 'is-vertical': vertical }">
    <div
      ref="bar"
      class="bin-color-alpha-slider__bar"
      :style="{
        background
      }"
      @click="handleClick"
    ></div>
    <div
      ref="thumb"
      class="bin-color-alpha-slider__thumb"
      :style="{
        left: thumbLeft + 'px',
        top: thumbTop + 'px'
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { watch, ref, onMounted, getCurrentInstance, defineComponent } from 'vue'
import draggable from './draggable'

export default defineComponent({
  name: 'BColorAlphaSlider',
  props: {
    color: {
      type: Object,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const instance = getCurrentInstance()
    // ref
    const thumb = ref(null)
    const bar = ref(null)

    // data
    const thumbLeft = ref(0)
    const thumbTop = ref(0)
    const background = ref(null)

    watch(
      () => props.color.get('alpha'),
      () => {
        update()
      }
    )
    watch(
      () => props.color.value,
      () => {
        update()
      }
    )

    //methods
    function getThumbLeft() {
      if (props.vertical) return 0
      // @ts-ignore
      const el = instance.vnode.el
      const alpha = props.color.get('alpha')

      if (!el) return 0
      // @ts-ignore
      return Math.round((alpha * (el.offsetWidth - thumb.value.offsetWidth / 2)) / 100)
    }

    function getThumbTop() {
      // @ts-ignore
      const el = instance.vnode.el
      if (!props.vertical) return 0
      const alpha = props.color.get('alpha')

      if (!el) return 0
      // @ts-ignore
      return Math.round((alpha * (el.offsetHeight - thumb.value.offsetHeight / 2)) / 100)
    }

    function getBackground() {
      if (props.color && props.color.value) {
        const { r, g, b } = props.color.toRgb()
        return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`
      }
      return null
    }

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

      if (!props.vertical) {
        let left = event.clientX - rect.left
        // @ts-ignore
        left = Math.max(thumb.value.offsetWidth / 2, left)
        // @ts-ignore
        left = Math.min(left, rect.width - thumb.value.offsetWidth / 2)

        props.color.set(
          'alpha',
          Math.round(
            // @ts-ignore
            ((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth)) * 100
          )
        )
      } else {
        let top = event.clientY - rect.top
        // @ts-ignore
        top = Math.max(thumb.value.offsetHeight / 2, top)
        // @ts-ignore
        top = Math.min(top, rect.height - thumb.value.offsetHeight / 2)

        props.color.set(
          'alpha',
          Math.round(
            // @ts-ignore
            ((top - thumb.value.offsetHeight / 2) / (rect.height - thumb.value.offsetHeight)) * 100
          )
        )
      }
    }

    function update() {
      thumbLeft.value = getThumbLeft()
      thumbTop.value = getThumbTop()
      // @ts-ignore
      background.value = getBackground()
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
      thumb,
      bar,
      thumbLeft,
      thumbTop,
      background,
      handleClick,
      update
    }
  }
})
</script>
