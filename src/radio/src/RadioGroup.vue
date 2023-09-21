<template>
  <div ref="radioGroup" :class="classes" role="radiogroup" @keydown="handleKeydown">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { nextTick, provide, onMounted, ref, reactive, toRefs, watch, computed } from 'vue'
import { EVENT_CODE } from '../../_utils/aria'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../_utils/constants'
import type { RadioGroupProps, ValueType } from './types'
import useForm from '../../_hooks/use-form'

defineOptions({
  name: 'BRadioGroup'
})

const emit = defineEmits([UPDATE_MODEL_EVENT, CHANGE_EVENT])
const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: ''
})

const radioGroup = ref<HTMLElement | null>(null)
const { BForm, BFormItem, formEmit } = useForm()
const radioSize = computed(() => props.size || BForm.size || BFormItem.size)

const prefixCls = 'bin-radio-group'
const classes = computed(() => [
  `${prefixCls}`,
  {
    [`${prefixCls}-${props.type}`]: !!props.type,
    [`${prefixCls}-${radioSize.value}`]: !!radioSize.value
  }
])

// methods
const changeEvent = (value: ValueType) => {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => {
    emit(CHANGE_EVENT, value)
  })
}

provide(
  'RadioGroup',
  reactive({
    name: 'BRadioGroup',
    ...toRefs(props),
    changeEvent: changeEvent
  })
)

watch(
  () => props.modelValue,
  val => {
    formEmit(CHANGE_EVENT, [val])
  }
)

const handleKeydown = (e: KeyboardEvent) => {
  // 左右上下按键 可以在radio组内切换不同选项
  const target = e.target as HTMLElement
  if (!target) return
  const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
  const radios = radioGroup.value?.querySelectorAll<HTMLElement>(className)
  if (!radios) return
  const length = radios.length
  const index = Array.from(radios).indexOf(target)
  const roleRadios = radioGroup.value?.querySelectorAll<HTMLElement>('[role=radio]')
  let nextIndex = null
  switch (e.code) {
    case EVENT_CODE.left:
    case EVENT_CODE.up:
      e.stopPropagation()
      e.preventDefault()
      nextIndex = index === 0 ? length - 1 : index - 1
      break
    case EVENT_CODE.right:
    case EVENT_CODE.down:
      e.stopPropagation()
      e.preventDefault()
      nextIndex = index === length - 1 ? 0 : index + 1
      break
    default:
      break
  }
  if (nextIndex === null || !roleRadios) return
  roleRadios[nextIndex].click()
  roleRadios[nextIndex].focus()
}

onMounted(() => {
  const radios = radioGroup.value?.querySelectorAll<HTMLInputElement>('[type=radio]')
  if (!radios) return
  const firstLabel = radios[0]
  if (!Array.from(radios).some(radio => radio.checked) && firstLabel) {
    firstLabel.tabIndex = 0
  }
})
</script>
