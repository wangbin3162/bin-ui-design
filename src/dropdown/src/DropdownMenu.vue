<template>
  <ul
    v-click-outside:[triggerElm]="_hide"
    class="bin-dropdown-menu"
    @mouseenter.stop="show"
    @mouseleave.stop="hide"
  >
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, onMounted } from 'vue'
import ClickOutside from '../../_directives/click-outside'
import { useDropdown, initDropdownDomEvent } from './useDropdown'

defineOptions({
  name: 'BDropdownMenu',
  directives: { ClickOutside }
})

const { bDropdown } = useDropdown()
const triggerElm = computed(() => bDropdown.triggerElm.value)

function _hide() {
  bDropdown.hide?.()
}
function show() {
  bDropdown.show?.()
}

function hide() {
  if (bDropdown.trigger.value === 'click') return
  _hide()
}

onMounted(() => {
  const dropdownMenu = getCurrentInstance()
  initDropdownDomEvent(dropdownMenu, bDropdown.triggerElm.value, bDropdown.instance)
})
</script>
