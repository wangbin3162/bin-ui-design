<template>
  <label
    v-if="isBtnGroup"
    v-click-animation
    class="bin-radio"
    :class="{
      'is-disabled': isDisabled,
      'is-focus': focus,
      'is-checked': model === label
    }"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
  >
    <span
      class="bin-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="bin-radio__inner"></span>
      <input
        ref="radioRef"
        v-model="model"
        class="bin-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>
    <span v-if="$slots.default || label" class="bin-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
  <label
    v-else
    class="bin-radio"
    :class="{
      'is-disabled': isDisabled,
      'is-focus': focus,
      'is-checked': model === label
    }"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
  >
    <span
      class="bin-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="bin-radio__inner"></span>
      <input
        ref="radioRef"
        v-model="model"
        class="bin-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>
    <span v-if="$slots.default || label" class="bin-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../_utils/constants'
import { useRadio, useRadioAttrs } from './useRadio'
import type { RadioProps } from './types'

defineOptions({
  name: 'BRadio'
})

const emit = defineEmits([UPDATE_MODEL_EVENT, CHANGE_EVENT])
const props = withDefaults(defineProps<RadioProps>(), {
  modelValue: '',
  label: '',
  name: ''
})

const { isGroup, isBtnGroup, radioGroup, BForm, focus } = useRadio()
const radioRef = ref<HTMLInputElement | null>(null)

const model = computed({
  get() {
    return isGroup.value ? radioGroup.modelValue : props.modelValue
  },
  set(val) {
    if (isGroup.value) {
      radioGroup.changeEvent(val)
    } else {
      emit(UPDATE_MODEL_EVENT, val)
    }
    if (radioRef.value) {
      radioRef.value.checked = props.modelValue === props.label
    }
  }
})

const { tabIndex, isDisabled } = useRadioAttrs(props, {
  isGroup,
  radioGroup,
  BForm,
  model
})

function handleChange() {
  nextTick(() => {
    emit(CHANGE_EVENT, model.value)
  })
}
</script>
