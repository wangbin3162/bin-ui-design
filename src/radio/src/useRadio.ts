import { ref, computed, inject } from 'vue'
import useForm from '../../_hooks/use-form'
import type { RadioGroupInject } from './types'

export const useRadio = () => {
  const { BForm, BFormItem, formEmit } = useForm()
  const radioGroup = inject<RadioGroupInject>('RadioGroup', {})
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'BRadioGroup')
  const isBtnGroup = computed(() => isGroup.value && radioGroup?.type === 'button')

  return {
    isGroup,
    focus,
    radioGroup,
    isBtnGroup,
    BForm,
    BFormItem,
    formEmit
  }
}

export const useRadioAttrs = (props, { isGroup, radioGroup, BForm, model }) => {
  const isDisabled = computed(() => {
    return isGroup.value
      ? radioGroup.disabled || props.disabled || BForm.disabled
      : props.disabled || BForm.disabled
  })

  const tabIndex = computed(() => {
    return isDisabled.value || (isGroup.value && model.value !== props.label) ? -1 : 0
  })

  return {
    isDisabled,
    tabIndex
  }
}
