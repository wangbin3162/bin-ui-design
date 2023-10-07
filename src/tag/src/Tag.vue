<template>
  <span
    :class="[
      'bin-tag',
      type ? `is-${type}` : '',
      dark ? 'is-dark' : '',
      dot ? 'is-dot' : '',
      checkable ? 'is-checkable' : '',
      checkable && checked ? 'is-checked' : '',
      { 'no-border': noBorder }
    ]"
    :style="tagStyleBind"
    @click="handleClick"
  >
    <span v-if="dot" class="bin-dot"></span>
    <slot></slot>
    <i
      v-if="closable"
      class="b-iconfont b-icon-close"
      :style="dot ? { backgroundColor: '#fff', color } : {}"
      @click="handleClose"
    ></i>
  </span>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { computed, ref, watch } from 'vue'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../_utils/constants'
import type { TagProps } from './types'

defineOptions({
  name: 'BTag'
})

const emit = defineEmits([UPDATE_MODEL_EVENT, CHANGE_EVENT, 'click', 'close'])
const props = withDefaults(defineProps<TagProps>(), {
  modelValue: true
})

const checked = ref(props.modelValue)

const handleClose = (e: MouseEvent) => {
  e.stopPropagation()
  emit('close', e)
}
const handleClick = (e: MouseEvent) => {
  e.stopPropagation()
  if (props.checkable) {
    checked.value = !checked.value
    emit(UPDATE_MODEL_EVENT, checked.value)
    emit(CHANGE_EVENT, checked.value, props.name)
  }
  emit('click', e)
}

const tagStyleBind = computed(() => {
  return props.dot
    ? {
        backgroundColor: 'transparent',
        color: props.color || 'rgba(0,0,0,.65)',
        fontSize: props.fontSize,
        ...(props.tagStyle ?? {})
      }
    : {
        backgroundColor: props.color,
        color: props.color ? '#fff' : '',
        fontSize: props.fontSize,
        ...(props.tagStyle ?? {})
      }
})

watch(
  () => props.modelValue,
  val => {
    checked.value = val
  }
)
</script>
