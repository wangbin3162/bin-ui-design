<template>
  <div class="bin-color-predefine">
    <div class="bin-color-predefine__colors">
      <div
        v-for="(item, index) in rgbaColors"
        :key="colors[index]"
        class="bin-color-predefine__color-selector"
        :class="{ selected: item.selected, 'is-alpha': item._alpha < 100 }"
        @click="handleSelect(index)"
      >
        <div :style="{ 'background-color': item.value }"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch, watchEffect } from 'vue'
import Color from './color'

export default defineComponent({
  props: {
    colors: { type: Array, required: true },
    color: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // @ts-ignore
    const { currentColor } = inject('ColorPicker', {})
    //data
    const rgbaColors = ref(parseColors(props.colors, props.color))

    //watch
    watch(
      () => currentColor.value,
      val => {
        // @ts-ignore
        const color = new Color()
        color.fromString(val)

        rgbaColors.value.forEach(item => {
          item.selected = color.compare(item)
        })
      }
    )
    watchEffect(() => {
      rgbaColors.value = parseColors(props.colors, props.color)
    })

    function handleSelect(index) {
      props.color.fromString(props.colors[index])
    }

    function parseColors(colors, color) {
      return colors.map(value => {
        // @ts-ignore
        const c = new Color()
        // @ts-ignore
        c.enableAlpha = true
        // @ts-ignore
        c.format = 'rgba'
        // @ts-ignore
        c.fromString(value)
        // @ts-ignore
        c.selected = c.value === color.value
        return c
      })
    }

    return {
      rgbaColors,
      handleSelect
    }
  }
})
</script>
