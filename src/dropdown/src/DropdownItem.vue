<template>
  <li
    class="bin-dropdown-item"
    :class="{
      'bin-dropdown-item-disabled': disabled,
      'bin-dropdown-item-divided': divided,
      'bin-dropdown-item-selected': selected
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? undefined : -1"
    @click="handleClick"
  >
    <i v-if="icon" :class="`b-iconfont b-icon-${icon}`"></i>
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useDropdown } from './useDropdown'
import type { DropdownItemProps } from './types'

defineOptions({
  name: 'BDropdownItem'
})

const props = withDefaults(defineProps<DropdownItemProps>(), {
  name: ''
})

const { bDropdown } = useDropdown()
const _instance = getCurrentInstance()

function handleClick(e: MouseEvent) {
  if (props.disabled) return
  if (bDropdown.hideOnClick.value) {
    bDropdown.handleClick?.()
  }
  bDropdown.commandHandler?.(props.name, _instance, e)
}
</script>
