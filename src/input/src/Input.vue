<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <span v-if="$slots.prepend" class="bin-input-group-prepend">
        <slot name="prepend"></slot>
      </span>
      <input
        :id="elementId"
        ref="inputRef"
        :autocomplete="type === 'password' ? 'new-password' : autocomplete"
        :type="inputType"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="inputDisabled"
        :maxlength="maxlength"
        :readonly="readonly"
        :name="name"
        :value="currentValue"
        :number="number"
        :autofocus="autofocus"
        @keyup.enter="handleEnter"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @change="handleChange"
      />
      <span v-if="showPrefix" class="bin-input-prefix">
        <slot name="prefix">
          <i v-if="prefix" class="b-iconfont" :class="['b-icon-' + prefix]"></i>
        </slot>
      </span>
      <span v-if="showSuffix" class="bin-input-suffix">
        <i
          v-if="icon"
          class="b-iconfont"
          :class="['b-icon-' + icon, 'bin-input-icon', 'bin-input-icon-normal']"
          @click="handleIconClick"
        ></i>
        <i
          v-if="search"
          class="b-iconfont b-icon-search"
          :class="['bin-input-icon', 'bin-input-icon-normal', 'bin-input-search-icon']"
          @click.stop="handleSearch"
        ></i>
        <i
          v-if="showPasswordToggle"
          class="b-iconfont bin-input-icon bin-input-icon-normal bin-input-view-icon"
          :class="showPassword ? 'b-icon-eye' : 'b-icon-eye-close'"
          @click.stop="handleTogglePass"
        ></i>
        <slot name="suffix">
          <i v-if="suffix" class="b-iconfont" :class="['b-icon-' + suffix]"></i>
        </slot>
        <i
          v-if="BForm.statusIcon && validateState"
          :class="['b-iconfont', 'bin-input__validateIcon', validateIcon]"
        ></i>
      </span>
      <span v-if="showWordCount" class="bin-input-word-count">{{ wordCount }}</span>
      <!--清空按钮-->
      <span v-if="clearable && currentValue && !disabled" :class="closeClasses">
        <i class="b-iconfont b-icon-close-circle-fill" @click.stop.prevent="handleClear"></i>
      </span>

      <span v-if="$slots.append" class="bin-input-group-append">
        <slot name="append"></slot>
      </span>
    </template>
    <template v-else>
      <textarea
        :id="elementId"
        ref="textareaRef"
        :wrap="wrap"
        :autocomplete="autocomplete"
        :class="textareaClasses"
        :style="textareaStyle"
        :placeholder="placeholder"
        :disabled="inputDisabled"
        :rows="rows"
        :maxlength="maxlength"
        :readonly="readonly"
        :name="name"
        :value="currentValue"
        :autofocus="autofocus"
        @keyup.enter="handleEnter"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
      ></textarea>
      <span v-if="showWordCount" class="bin-input-word-count">{{ wordCount }}</span>
    </template>
  </div>
</template>

<script lang="ts">
import { inputProps } from './types'
import calcTextareaHeight from './calcTextareaHeight'
import { computed, ref, watch, onMounted, reactive, toRefs, nextTick, defineComponent } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../_utils/constants'
import { useForm } from '../../_hooks'

const prefixCls = 'bin-input'

export default defineComponent({
  name: 'BInput',
  props: inputProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'enter',
    'search',
    'keydown',
    'keyup',
    'keypress',
    'click',
    'blur',
    'focus',
    'input',
    'clear'
  ],
  setup(props, ctx) {
    // data
    const data = reactive({
      currentValue: props.modelValue,
      textareaStyles: {},
      isOnComposition: false
    })
    const inputRef = ref(null)
    const textareaRef = ref(null)
    const showPassword = ref(false)

    const { BForm, BFormItem, validateState, validateIcon, formEmit } = useForm()
    // watch
    watch(
      () => props.modelValue,
      val => {
        setCurrentValue(val)
      }
    )
    // computed
    const wrapClasses = computed(() => {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${props.size}`]: !!props.size,
          [`${prefixCls}-type-${props.type}`]: props.type,
          [`${prefixCls}-group-with-prepend`]: ctx.slots.prepend,
          [`${prefixCls}-group-with-append`]: ctx.slots.append || props.search,
          [`${prefixCls}-hide-icon`]: ctx.slots.append, // #554
          [`${prefixCls}-with-search`]: props.search,
          [`${prefixCls}-with-word-count`]: props.showWordCount,
          [`is-disabled`]: inputDisabled.value
        }
      ]
    })
    const showPrefix = computed(() => props.prefix !== '' || ctx.slots.prefix !== undefined)
    const showSuffix = computed(() => {
      return (
        props.suffix !== '' ||
        props.icon !== '' ||
        props.search ||
        props.showPasswordToggle ||
        // @ts-ignore
        (BForm.statusIcon && validateState.value !== '') ||
        ctx.slots.suffix !== undefined
      )
    })
    // @ts-ignore
    const inputDisabled = computed(() => props.disabled || BForm.disabled)
    // @ts-ignore
    const inputSize = computed(() => props.size || BFormItem.size)
    const inputType = computed(() =>
      props.type !== 'password' ? props.type : `${showPassword.value ? 'text' : 'password'}`
    )
    const inputClasses = computed(() => {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${inputSize.value}`]: !!inputSize.value,
          [`${prefixCls}-disabled`]: inputDisabled.value,
          [`${prefixCls}-with-prefix`]: showPrefix.value,
          [`${prefixCls}-with-suffix`]: showSuffix.value || props.search
        }
      ]
    })
    const closeClasses = computed(() => [prefixCls + '-icon', prefixCls + '-icon-clear'])
    const textareaStyle = computed(() => {
      return {
        resize: props.noResize ? 'none' : null,
        ...data.textareaStyles
      }
    })
    const textareaClasses = computed(() => {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: props.disabled
        }
      ]
    })
    const wordCount = computed(() => {
      return data.currentValue.toString().length + (props.maxlength ? `/${props.maxlength}` : '')
    })

    // self methods
    const setCurrentValue = value => {
      if (value === data.currentValue) return
      nextTick(() => {
        resizeTextarea()
      })
      data.currentValue = value
      if (props.validateEvent) {
        formEmit('change', [value])
      }
    }
    const resizeTextarea = () => {
      const autosize = props.autosize
      if (!autosize || props.type !== 'textarea') {
        return false
      }

      const minRows = autosize.minRows || props.rows
      const maxRows = autosize.maxRows || props.rows

      data.textareaStyles = calcTextareaHeight(textareaRef.value, minRows, maxRows)
    }
    // handle methods
    const handleEnter = e => {
      ctx.emit('enter', e)
      if (props.search) ctx.emit('search', data.currentValue)
    }
    const handleKeydown = e => {
      ctx.emit('keydown', e)
    }
    const handleKeypress = e => {
      ctx.emit('keypress', e)
    }
    const handleKeyup = e => {
      ctx.emit('keyup', e)
    }
    const handleIconClick = e => {
      ctx.emit('click', e)
    }
    const handleFocus = e => {
      ctx.emit('focus', e)
    }
    const handleBlur = e => {
      ctx.emit('blur', e)
      if (props.validateEvent) {
        formEmit('blur', [props.modelValue])
      }
    }

    const handleComposition = e => {
      if (e.type === 'compositionstart') {
        data.isOnComposition = true
      }
      if (e.type === 'compositionend') {
        data.isOnComposition = false
        handleInput(e)
      }
    }
    const handleInput = e => {
      if (data.isOnComposition) return
      let value = e.target.value
      if (props.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value)
      setCurrentValue(value)
      ctx.emit(UPDATE_MODEL_EVENT, value)
      ctx.emit('input', value)
    }
    const handleChange = e => {
      ctx.emit(CHANGE_EVENT, e.target.value)
    }
    const handleTogglePass = () => {
      showPassword.value = !showPassword.value
    }

    const handleClear = () => {
      setCurrentValue('')
      ctx.emit(UPDATE_MODEL_EVENT, '')
      ctx.emit(CHANGE_EVENT, '')
      ctx.emit('clear')
    }
    const handleSearch = () => {
      if (props.disabled) return false
      // @ts-ignore
      inputRef.value?.focus()
      ctx.emit('search', data.currentValue)
    }

    const focus = () => {
      if (props.type === 'textarea') {
        // @ts-ignore
        textareaRef.value?.focus()
      } else {
        // @ts-ignore
        inputRef.value?.focus()
      }
    }

    const blur = () => {
      if (props.type === 'textarea') {
        // @ts-ignore
        textareaRef.value?.blur()
      } else {
        // @ts-ignore
        inputRef.value?.blur()
      }
    }

    // mounted
    onMounted(() => {
      if (props.type === 'textarea') {
        resizeTextarea()
      }
    })
    return {
      inputRef,
      textareaRef,
      showPassword,
      ...toRefs(data),
      handleEnter,
      handleKeydown,
      handleKeypress,
      handleKeyup,
      handleIconClick,
      handleFocus,
      handleBlur,
      handleComposition,
      handleInput,
      handleChange,
      handleClear,
      handleSearch,
      handleTogglePass,
      focus,
      blur,
      BForm,
      BFormItem,
      validateState,
      validateIcon,
      formEmit,
      inputDisabled,
      inputSize,
      wrapClasses,
      showPrefix,
      showSuffix,
      inputClasses,
      closeClasses,
      inputType,
      textareaStyle,
      textareaClasses,
      wordCount
    }
  }
})
</script>
