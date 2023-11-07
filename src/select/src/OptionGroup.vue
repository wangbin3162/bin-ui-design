<template>
  <ul v-show="visible" class="bin-select-group__wrap">
    <li class="bin-select-group__title">{{ label }}</li>
    <li>
      <ul class="bin-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { provide, inject, ref, reactive, toRefs, defineComponent } from 'vue'
import { selectGroupKey, selectKey, selectEvents } from './token'

export default defineComponent({
  name: 'BOptionGroup',
  componentName: 'BOptionGroup',
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const visible = ref(true)
    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props)
      })
    )
    const select = inject(selectKey)
    const queryChange = () => {
      // @ts-ignore
      visible.value = select?.optionsArray?.some(option => option.visible === true)
    }
    // @ts-ignore
    select.selectEmitter.on(selectEvents.groupQueryChange, queryChange)
    return {
      visible
    }
  }
})
</script>
