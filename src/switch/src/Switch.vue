<template>
  <b-popover v-model:visible="visible" :width="200" :disabled="!confirm">
    <span
      tabindex="0"
      :class="wrapClasses"
      :style="wrapStyle"
      @click="toggle"
      @keydown.space="toggle"
    >
      <input type="hidden" :name="name" :value="currentValue" />
      <span class="bin-switch-inner">
        <slot v-if="currentValue === trueValue" name="open"></slot>
        <slot v-if="currentValue === falseValue" name="close"></slot>
      </span>
      <i
        v-if="loading"
        class="b-iconfont b-icon-loading"
        :style="{ color: currentValue ? activeColor : inactiveColor }"
      ></i>
    </span>
    <template #content>
      <p>
        <i class="b-iconfont b-icon-question-circle" style="color: var(--bin-color-danger)"></i>
        {{ confirmTxt || '确定切换吗？' }}
      </p>
      <div style="text-align: right; margin: 0">
        <b-button size="mini" type="text" @click="visible = false">取消</b-button>
        <b-button type="primary" size="mini" @click="confirmFun($event)">确定</b-button>
      </div>
    </template>
  </b-popover>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { switchProps } from './types'
import { BPopover } from '../../popover'
import { BButton } from '../../button'
import { computed, ref, watch } from 'vue'
import { useForm } from '../../_hooks'
import { isBool, isPromise } from '../../_utils/util-helper'

const prefixCls = 'bin-switch'

defineOptions({
  name: 'BSwitch'
})
const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps(switchProps)

const currentValue = ref(props.modelValue)
const visible = ref(false)
const { BForm, formEmit } = useForm()

// @ts-ignore
const switchDisabled = computed(() => props.disabled || props.loading || (BForm || {}).disabled)
const wrapClasses = computed(() => {
  return [
    `${prefixCls}`,
    {
      [`${prefixCls}-checked`]: currentValue.value === props.trueValue,
      [`${prefixCls}-disabled`]: switchDisabled.value,
      [`${prefixCls}-${props.size}`]: !!props.size,
      'is-confirm': props.confirm
    }
  ]
})
const wrapStyle = computed(() => {
  let isChecked = currentValue.value === props.trueValue
  return {
    backgroundColor: isChecked ? props.activeColor : props.inactiveColor,
    borderColor: isChecked ? props.activeColor : props.inactiveColor
  }
})
// 更新
const handleChange = () => {
  const checked = currentValue.value === props.trueValue ? props.falseValue : props.trueValue
  currentValue.value = checked
  emit('update:modelValue', checked)
  emit('change', checked)

  formEmit('change', checked)
}
const handleToggle = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  if (switchDisabled.value) return
  const { beforeChange } = props
  // 如果没有拦截函数，则直接更新
  if (!beforeChange) {
    handleChange()
    return
  }

  const shouldChange = beforeChange()
  const isExpectType = [isPromise(shouldChange), isBool(shouldChange)].some(i => i)
  if (!isExpectType) {
    console.error('beforeChange must return type `Promise<boolean>` or `boolean`')
  }
  if (isPromise(shouldChange)) {
    shouldChange
      .then((result: any) => {
        if (result) {
          handleChange()
        }
      })
      .catch((e: any) => {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`switch beforeChange error: ${e}`)
        }
      })
  } else if (shouldChange) {
    handleChange()
  }
}
const toggle = (e: any) => {
  if (!props.confirm) handleToggle(e)
}

const confirmFun = (e: any) => {
  visible.value = false
  handleToggle(e)
}
watch(
  () => props.modelValue,
  val => {
    if (val !== props.trueValue && val !== props.falseValue) {
      console.warn('Value should be true or false.')
    }
    currentValue.value = val
  }
)
</script>
