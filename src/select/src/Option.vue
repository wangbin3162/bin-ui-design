<template>
  <li
    v-show="visible"
    class="bin-select-dropdown__item"
    :class="{
      selected: itemSelected,
      'is-disabled': isDisabled,
      hover: hover
    }"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script lang="ts">
import { toRefs, getCurrentInstance, onBeforeUnmount, reactive } from 'vue'
import { useOption } from './useOption'
import { optionProps } from './types'

export default {
  name: 'BOption',
  componentName: 'BOption',
  props: optionProps,
  setup(props) {
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    })

    const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(props, states)

    const { visible, hover } = toRefs(states)
    // @ts-ignore
    const vm = getCurrentInstance().proxy
    // @ts-ignore
    select.onOptionCreate(vm)
    onBeforeUnmount(() => {
      // @ts-ignore
      const { selected } = select
      // @ts-ignore
      let selectedOptions = select.props.multiple ? selected : [selected]
      // @ts-ignore
      const doesExist = select.cachedOptions.has(props.value)
      const doesSelected = selectedOptions.some(item => {
        // @ts-ignore
        return item.value === vm.value
      })
      // if option is not selected, remove it from cache
      if (doesExist && !doesSelected) {
        // @ts-ignore
        select.cachedOptions.delete(props.value)
      }
      // @ts-ignore
      select.onOptionDestroy(props.value)
    })

    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        // @ts-ignore
        select.handleOptionSelect(vm, true)
      }
    }

    return {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick
    }
  }
}
</script>
