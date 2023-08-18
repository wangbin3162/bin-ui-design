<template>
  <div class="bin-collapse" :class="{ 'bin-collapse-simple': simple }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../_utils/constants'
import { typeOf } from '../../_utils/util'

defineOptions({
  name: 'BCollapse'
})
const emit = defineEmits<CollapseEmits>()
const props = defineProps<CollapseProps>()

const activeNames = ref<NameType[]>([])

if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only one active item')
}

watch(
  () => props.modelValue,
  () => {
    if (typeOf(props.modelValue) === 'array') {
      activeNames.value = props.modelValue as NameType[]
    } else {
      activeNames.value = [props.modelValue] as NameType[]
    }
  },
  { immediate: true }
)

const setActiveNames = (actives: NameType[]) => {
  activeNames.value = [...actives]
  const value = props.accordion ? activeNames.value[0] : activeNames.value
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, actives)
}

const handleItemClick = (name: NameType) => {
  let _activeNames = [...activeNames.value]
  if (props.accordion) {
    _activeNames = [activeNames.value[0] === name ? '' : name]
  } else {
    const index = _activeNames.indexOf(name)
    if (index > -1) {
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(name)
    }
  }
  setActiveNames(_activeNames)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>
