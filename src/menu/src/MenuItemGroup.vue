<template>
  <li class="bin-menu-item-group">
    <div class="bin-menu-item-group__title" :style="{ paddingLeft: levelPadding + 'px' }">
      <template v-if="!slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import { computed, getCurrentInstance, inject, reactive, defineComponent } from 'vue'

export default defineComponent({
  name: 'BMenuItemGroup',
  componentName: 'BMenuItemGroup',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    // data
    const data = reactive({
      paddingLeft: 20
    })
    const instance = getCurrentInstance()
    // inject
    // @ts-ignore
    const { props: rootProps } = inject('rootMenu')

    // computed
    const levelPadding = computed(() => {
      let padding = 20
      let parent = instance?.parent
      if (rootProps.collapse) return 20
      while (parent && parent.type.name !== 'BMenu') {
        if (parent.type.name === 'BSubmenu') {
          padding += 20
        }
        parent = parent.parent
      }
      return padding
    })

    return {
      data,
      levelPadding,
      slots
    }
  }
})
</script>
