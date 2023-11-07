<template>
  <div
    :class="[
      'bin-input-number',
      {
        [`bin-input-number-${inputSize}`]: !!inputSize,
        ['bin-input-number-disabled']: inputDisabled,
        ['bin-input-number-focused']: focused,
        ['bin-input-number-always']: always
      }
    ]"
  >
    <template v-if="always">
      <span v-repeat-click="down" :class="minusClasses">
        <i class="b-iconfont b-icon-minus"></i>
      </span>
      <span v-repeat-click="up" :class="plusClasses">
        <i class="b-iconfont b-icon-plus"></i>
      </span>
    </template>
    <template v-else>
      <span v-repeat-click="up" :class="upClasses">
        <span :class="innerUpClasses" @click.prevent></span>
      </span>
      <span v-repeat-click="down" :class="downClasses">
        <span :class="innerDownClasses" @click.prevent></span>
      </span>
    </template>
    <div :class="inputWrapClasses">
      <input
        :id="elementId"
        :class="inputClasses"
        :disabled="disabled"
        autocomplete="off"
        spellcheck="false"
        :autofocus="autofocus"
        :readonly="readonly || !editable"
        :name="name"
        :value="formatterValue"
        :placeholder="placeholder"
        @focus="focus"
        @blur="blur"
        @keydown.stop="keyDown"
        @input="change"
        @mouseup.prevent
        @change="change"
      />
    </div>
  </div>
</template>

<script lang="ts">
import '../styles/index.css'
import { inputNumberProps } from './types'
import { reactive, watch, toRefs, nextTick, computed, defineComponent } from 'vue'
import { useForm } from '../../_hooks'
import { typeOf } from '../../_utils/util'

function addNum(num1: number, num2: number) {
  let sq1, sq2, m
  try {
    sq1 = num1.toString().split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = num2.toString().split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

const prefixCls = 'bin-input-number'

export default defineComponent({
  name: 'BInputNumber',
  props: inputNumberProps,
  emits: ['update:modelValue', 'change', 'input', 'blur', 'focus'],
  setup(props, ctx) {
    const { BForm, BFormItem, formEmit } = useForm()
    // @ts-ignore
    const inputDisabled = computed(() => props.disabled || BForm.disabled)

    // @ts-ignore
    const inputSize = computed(() => props.size || BForm.size || BFormItem.size)

    const data = reactive({
      currentValue: null,
      focused: false,
      upDisabled: false,
      downDisabled: false
    })

    const up = () => {
      const targetVal = Number(props.modelValue)
      if (data.upDisabled && isNaN(targetVal)) {
        return false
      }
      changeStep('up', targetVal)
    }
    const down = () => {
      const targetVal = Number(props.modelValue)
      if (data.downDisabled && isNaN(targetVal)) {
        return false
      }
      changeStep('down', targetVal)
    }
    const focus = e => {
      data.focused = true
      ctx.emit('focus', e)
    }
    const blur = () => {
      data.focused = false
      ctx.emit('blur')
      nextTick(() => {
        formEmit('blur', data.currentValue)
      })
    }

    const keyDown = e => {
      if (e.keyCode === 38) {
        e.preventDefault()
        // @ts-ignore
        up(e)
      } else if (e.keyCode === 40) {
        e.preventDefault()
        // @ts-ignore
        down(e)
      }
    }
    const change = e => {
      let val = e.target.value.trim()
      // 需要格式化数据时
      let needFormat =
        (e.type === 'input' && props.activeChange) || (e.type === 'change' && !props.activeChange)
      if (needFormat) {
        if (e.type === 'input' && !props.activeChange) return
        if (props.parser) {
          val = props.parser(val)
        }

        const isEmptyString = val.length === 0
        if (isEmptyString) {
          setValue(null)
          return
        }
        // eslint-disable-next-line no-useless-escape
        if (e.type === 'input' && val.match(/^\-?\.?$|\.$/)) return // prevent fire early if decimal. If no more input the change e will fire later

        val = Number(val)

        if (!isNaN(val)) {
          data.currentValue = val
          setValue(val)
        } else {
          e.target.value = data.currentValue
        }
      }
    }

    function changeStep(type, value) {
      if (props.disabled || props.readonly) {
        return false
      }

      const targetVal = Number(value)
      let val = Number(data.currentValue)
      const step = Number(props.step)
      if (isNaN(val)) {
        return false
      }

      // input a number, and key up or down
      if (!isNaN(targetVal)) {
        if (type === 'up') {
          if (addNum(targetVal, step) <= props.max) {
            val = targetVal
          } else {
            return false
          }
        } else if (type === 'down') {
          if (addNum(targetVal, -step) >= props.min) {
            val = targetVal
          } else {
            return false
          }
        }
      }

      if (type === 'up') {
        val = addNum(val, step)
      } else if (type === 'down') {
        val = addNum(val, -step)
      }
      setValue(val)
    }

    function setValue(val) {
      // 如果 step 是小数，且没有设置 precision，是有问题的
      // @ts-ignore
      if (val && !isNaN(props.precision)) val = Number(Number(val).toFixed(props.precision))
      if (val !== null) {
        if (val > props.max) {
          val = props.max
        } else if (val < props.min) {
          val = props.min
        }
      }

      data.currentValue = val
      ctx.emit('update:modelValue', val)
      ctx.emit('change', val)
      nextTick(() => {
        formEmit('change', val)
      })
    }

    function changeVal(val) {
      // 根据类型进行特殊处理
      const inputType = typeOf(val)

      if (inputType === 'undefined') {
        data.currentValue = null
        setValue(null)
        return
      }

      if (inputType === 'string') {
        val = Number(val)

        if (!isNaN(val)) {
          data.currentValue = val
          setValue(val)
        } else {
          data.currentValue = null
          setValue(null)
        }
        return
      }

      val = Number(val)
      if (!isNaN(val)) {
        const step = props.step

        data.upDisabled = val + step > props.max
        data.downDisabled = val - step < props.min
      } else {
        data.upDisabled = true
        data.downDisabled = true
      }
    }

    watch(
      () => props.modelValue,
      val => {
        // @ts-ignore
        data.currentValue = val
        changeVal(val)
      },
      { immediate: true }
    )
    watch(
      () => props.min,
      () => {
        changeVal(data.currentValue)
      }
    )
    watch(
      () => props.max,
      () => {
        changeVal(data.currentValue)
      }
    )
    return {
      BForm,
      BFormItem,
      formEmit,
      inputDisabled,
      ...toRefs(data),
      inputSize,
      up,
      down,
      focus,
      blur,
      keyDown,
      change
    }
  },
  computed: {
    upClasses() {
      return [
        `${prefixCls}-handler`,
        `${prefixCls}-handler-up`,
        {
          [`${prefixCls}-handler-up-disabled`]: this.upDisabled
        }
      ]
    },
    plusClasses() {
      return [
        `${prefixCls}-handler-plus`,
        {
          [`${prefixCls}-handler-plus-disabled`]: this.upDisabled
        }
      ]
    },
    innerUpClasses() {
      return `${prefixCls}-handler-up-inner b-iconfont b-icon-${this.arrowUpIcon}`
    },
    downClasses() {
      return [
        `${prefixCls}-handler`,
        `${prefixCls}-handler-down`,
        {
          [`${prefixCls}-handler-down-disabled`]: this.downDisabled
        }
      ]
    },
    minusClasses() {
      return [
        `${prefixCls}-handler-minus`,
        {
          [`${prefixCls}-handler-plus-minus`]: this.downDisabled
        }
      ]
    },
    innerDownClasses() {
      return `${prefixCls}-handler-down-inner b-iconfont b-icon-${this.arrowDownIcon}`
    },
    inputWrapClasses() {
      return `${prefixCls}-input-wrap`
    },
    inputClasses() {
      return `${prefixCls}-input`
    },
    precisionValue() {
      // can not display 1.0
      if (!this.currentValue) return this.currentValue
      return this.precision ? this.currentValue.toFixed(this.precision) : this.currentValue
    },
    formatterValue() {
      if (this.formatter && this.precisionValue !== null) {
        return this.formatter(this.precisionValue)
      } else {
        return this.precisionValue
      }
    }
  }
})
</script>
