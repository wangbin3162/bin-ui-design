<template>
  <div
    class="bin-select-dropdown"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onBeforeUnmount, inject, ref, defineComponent } from 'vue'
import { addResizeListener, removeResizeListener } from '../../_utils/resize-event'
import { selectKey } from './token'

export default defineComponent({
  name: 'BSelectDropdown',
  componentName: 'BSelectDropdown',
  setup() {
    const select = inject(selectKey)
    // @ts-ignore
    const popperClass = computed(() => select.props.popperClass)
    // @ts-ignore
    const isMultiple = computed(() => select.props.multiple)
    const minWidth = ref('')

    function updateMinWidth() {
      // @ts-ignore
      minWidth.value = select.selectWrapper?.getBoundingClientRect().width + 'px'
    }

    onMounted(() => {
      // @ts-ignore
      addResizeListener(select.selectWrapper, updateMinWidth)
    })

    onBeforeUnmount(() => {
      // @ts-ignore
      removeResizeListener(select.selectWrapper, updateMinWidth)
    })

    return {
      minWidth,
      popperClass,
      isMultiple
    }
  }
})
</script>
