<template>
  <b-popper
    ref="popper"
    v-model:visible="showPicker"
    placement="bottom"
    theme="light"
    manual-mode
    trigger="click"
    :show-arrow="false"
    :offset="5"
    transition="zoom-in-top"
    :gpu-acceleration="false"
    :popper-class="`bin-color-picker__panel bin-color-dropdown ${popperClass}`"
    :stop-popper-mouse-event="false"
  >
    <template #default>
      <div v-click-outside="hide">
        <div class="bin-color-dropdown__main-wrapper">
          <hue-slider ref="hue" class="hue-slider" :color="color" vertical />
          <sv-panel ref="svPanel" :color="color" />
        </div>
        <alpha-slider v-if="showAlpha" ref="alpha" :color="color" />
        <predefine v-if="colors" ref="predefine" :color="color" :colors="colors" />
        <div class="bin-color-dropdown__btns">
          <span class="bin-color-dropdown__value">
            <b-input
              v-model="customInput"
              :validate-event="false"
              size="mini"
              @keyup.enter="handleConfirm"
              @blur="handleConfirm"
            />
          </span>
          <b-button size="mini" type="text" class="bin-color-dropdown__link-btn" @click="clear">
            清空
          </b-button>
          <b-button
            type="primary"
            size="mini"
            class="bin-color-dropdown__btn"
            @click="confirmValue"
          >
            确定
          </b-button>
        </div>
      </div>
    </template>
    <template #trigger>
      <div
        :class="[
          'bin-color-picker',
          colorDisabled ? 'is-disabled' : '',
          colorSize ? `bin-color-picker--${colorSize}` : '',
          showLabel ? 'with-label' : ''
        ]"
      >
        <div v-if="colorDisabled" class="bin-color-picker__disabled-mask"></div>
        <div v-if="showLabel" class="bin-color-picker__label" @click="handleTrigger">
          <input class="label-input" :value="modelValue" readonly />
        </div>
        <div class="bin-color-picker__trigger" @click="handleTrigger">
          <span class="bin-color-picker__color" :class="{ 'is-alpha': showAlpha }">
            <span
              class="bin-color-picker__color-inner"
              :style="{
                backgroundColor: displayedColor
              }"
            ></span>
          </span>
        </div>
      </div>
    </template>
  </b-popper>
</template>

<script lang="ts">
import { colorProps } from './types'
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch
} from 'vue'
import { ClickOutside } from '../../_directives'
import Color from './color'
import SvPanel from './sv-panel.vue'
import HueSlider from './hue-slider.vue'
import AlphaSlider from './alpha-slider.vue'
import Predefine from './predefine.vue'
import { BPopper } from '../../_internal/popper'
import { BButton } from '../../button'
import { BInput } from '../../input'
import { UPDATE_MODEL_EVENT } from '../../_utils/constants'
import { useForm } from '../../_hooks'
import { debounce } from '../../_utils/util'
import { toHex } from '../../_utils/color'

export const useOptions = () => {
  return inject('ColorPicker', {})
}

export default defineComponent({
  name: 'BColorPicker',
  components: {
    BPopper,
    BInput,
    BButton,
    SvPanel,
    HueSlider,
    AlphaSlider,
    Predefine
  },
  directives: { ClickOutside },
  props: colorProps,
  emits: ['change', 'active-change', UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const { BForm, BFormItem, formEmit } = useForm()

    const hue = ref(null)
    const svPanel = ref(null)
    const alpha = ref(null)
    const popper = ref(null)
    // data
    const color = reactive(
      new Color({
        enableAlpha: props.showAlpha,
        format: props.colorFormat
      })
    )
    const showPicker = ref(false)
    const showPanelColor = ref(false)
    const customInput = ref('')
    // computed
    const displayedColor = computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return 'transparent'
      }
      return displayedRgb(color, props.showAlpha)
    })
    // @ts-ignore
    const colorSize = computed(() => props.size || BFormItem.size)
    // @ts-ignore
    const colorDisabled = computed(() => props.disabled || BForm.disabled)
    const currentColor = computed(() =>
      // @ts-ignore
      !props.modelValue && !showPanelColor.value ? '' : color.value
    )
    // watch
    watch(
      () => props.modelValue,
      newVal => {
        if (!newVal) {
          showPanelColor.value = false
          // @ts-ignore
        } else if (newVal && newVal !== color.value) {
          color.fromString(newVal)
        }
      }
    )
    watch(
      () => currentColor.value,
      val => {
        customInput.value = val
        emit('active-change', val)
      }
    )

    watch(
      // @ts-ignore
      () => color.value,
      () => {
        if (!props.modelValue && !showPanelColor.value) {
          showPanelColor.value = true
        }
      }
    )

    // methods
    function displayedRgb(color, showAlpha) {
      if (!(color instanceof Color)) {
        throw Error('color should be instance of _color Class')
      }

      const { r, g, b } = color.toRgb()
      return showAlpha
        ? `rgba(${r}, ${g}, ${b}, ${color.get('alpha') / 100})`
        : `rgb(${r}, ${g}, ${b})`
    }

    function setShowPicker(value) {
      showPicker.value = value
    }

    const debounceSetShowPicker = debounce(setShowPicker, 100)

    function hide() {
      // @ts-ignore
      debounceSetShowPicker(false)
      resetColor()
    }

    function resetColor() {
      nextTick(() => {
        if (props.modelValue) {
          color.fromString(props.modelValue)
        } else {
          showPanelColor.value = false
        }
      })
    }

    function handleTrigger() {
      if (colorDisabled.value) return
      // @ts-ignore
      debounceSetShowPicker(!showPicker.value)
    }

    function handleConfirm() {
      color.fromString(customInput.value)
    }

    function confirmValue() {
      // @ts-ignore
      let value = color.value

      const tmpColor = new Color({
        enableAlpha: props.showAlpha,
        format: props.colorFormat
      })
      tmpColor.fromString(value)
      // @ts-ignore
      if (tmpColor._alpha === 100) {
        // 表示当前没有透明度，这时需要判断转换colorFormat，如果是hex，则进行转换
        if (props.colorFormat === 'hex') value = toHex(value, false)
      }

      emit(UPDATE_MODEL_EVENT, value)
      emit('change', value)
      formEmit('change', value)
      // @ts-ignore
      debounceSetShowPicker(false)
      // check if modelValue change, if not change, then reset color.
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat
        })
        newColor.fromString(props.modelValue)
        if (!color.compare(newColor)) {
          resetColor()
        }
      })
    }

    function clear() {
      // @ts-ignore
      debounceSetShowPicker(false)
      emit(UPDATE_MODEL_EVENT, null)
      emit('change', null)
      if (props.modelValue !== null) {
        formEmit('change', null)
      }
      resetColor()
    }

    onMounted(() => {
      if (props.modelValue) {
        color.fromString(props.modelValue)
        customInput.value = currentColor.value
      }
    })
    watch(
      () => showPicker.value,
      () => {
        nextTick(() => {
          // @ts-ignore
          hue.value?.update()
          // @ts-ignore
          svPanel.value?.update()
          // @ts-ignore
          alpha.value?.update()
        })
      }
    )

    provide('ColorPicker', {
      currentColor
    })

    return {
      color,
      colorDisabled,
      colorSize,
      displayedColor,
      showPanelColor,
      showPicker,
      customInput,
      BForm,
      BFormItem,
      formEmit,
      handleConfirm,
      hide,
      handleTrigger,
      clear,
      confirmValue,
      hue,
      svPanel,
      alpha,
      popper
    }
  }
})
</script>
