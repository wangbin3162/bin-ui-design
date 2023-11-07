<template>
  <div
    class="bin-rate"
    role="slider"
    :aria-valuenow="currentValue"
    :aria-valuetext="text"
    aria-valuemin="0"
    :aria-valuemax="max"
    tabindex="0"
    @keydown="handleKey"
  >
    <span
      v-for="(item, key) in max"
      :key="key"
      class="bin-rate__item"
      :style="{ cursor: rateDisabled ? 'auto' : 'pointer' }"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <i
        class="bin-rate__icon b-iconfont"
        :class="[`b-icon-${classes[item - 1]}`, { hover: hoverIndex === item }]"
        :style="getIconStyle(item)"
      >
        <i
          v-if="showDecimalIcon(item)"
          class="bin-rate__decimal b-iconfont"
          :class="`b-icon-${decimalIconClass}`"
          :style="decimalStyle"
        ></i>
      </i>
    </span>
    <span v-if="showText || showScore" class="bin-rate__text" :style="{ color: textColor }">
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
import '../styles/index.css'
import { ref, computed, watch, defineComponent } from 'vue'
import { hasClass } from '../../_utils/dom'
import { isObject, isArray } from '../../_utils/util-helper'
import { EVENT_CODE } from '../../_utils/aria'
import { useForm } from '../../_hooks'
import { rateProps } from './types'

export default defineComponent({
  name: 'BRate',
  props: rateProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue)
    const { BForm, formEmit } = useForm()

    // @ts-ignore
    const rateDisabled = computed(() => props.disabled || BForm.disabled)

    const text = computed(() => {
      let result = ''
      if (props.showScore) {
        result = props.scoreTemplate.replace(
          /\{\s*value\s*\}/,
          rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`
        )
      } else if (props.showText) {
        // @ts-ignore
        result = props.texts[Math.ceil(currentValue.value) - 1]
      }
      return result
    })

    // @ts-ignore
    function getValueFromMap(value, map) {
      const matchedKeys = Object.keys(map)
        .filter(key => {
          const val = map[key]
          const excluded = isObject(val) ? val.excluded : false
          return excluded ? value < key : value <= key
        })
        // @ts-ignore
        .sort((a, b) => a - b)
      const matchedValue = map[matchedKeys[0]]
      return isObject(matchedValue) ? matchedValue.value : matchedValue || ''
    }

    const valueDecimal = computed(() => props.modelValue * 100 - Math.floor(props.modelValue) * 100)
    const colorMap = computed(() =>
      isArray(props.colors)
        ? {
            [props.lowThreshold]: props.colors[0],
            [props.highThreshold]: { value: props.colors[1], excluded: true },
            [props.max]: props.colors[2]
          }
        : props.colors
    )
    const activeColor = computed(() => getValueFromMap(currentValue.value, colorMap.value))
    const decimalStyle = computed(() => {
      let width = ''
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`
      } else if (props.allowHalf) {
        width = '50%'
      }
      return {
        color: activeColor.value,
        width
      }
    })

    const classMap = computed(() =>
      isArray(props.iconClasses)
        ? {
            [props.lowThreshold]: props.iconClasses[0],
            [props.highThreshold]: {
              value: props.iconClasses[1],
              excluded: true
            },
            [props.max]: props.iconClasses[2]
          }
        : props.iconClasses
    )
    const decimalIconClass = computed(() => getValueFromMap(props.modelValue, classMap.value))
    const voidClass = computed(() =>
      rateDisabled.value ? props.disabledVoidIconClass : props.voidIconClass
    )
    const activeClass = computed(() => getValueFromMap(currentValue.value, classMap.value))
    const classes = computed(() => {
      let result = Array(props.max)
      let threshold = currentValue.value
      // if (props.allowHalf && currentValue.value !== Math.floor(currentValue.value)) {
      //   threshold--
      // }
      result.fill(activeClass.value, 0, threshold)
      result.fill(voidClass.value, threshold, props.max)
      return result
    })

    const pointerAtLeftHalf = ref(true)
    watch(
      () => props.modelValue,
      val => {
        currentValue.value = val
        pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue)
      }
    )

    // @ts-ignore
    function showDecimalIcon(item) {
      let showWhenDisabled =
        rateDisabled.value &&
        valueDecimal.value > 0 &&
        item - 1 < props.modelValue &&
        item > props.modelValue
      /* istanbul ignore next */
      let showWhenAllowHalf =
        props.allowHalf &&
        pointerAtLeftHalf.value &&
        item - 0.5 <= currentValue.value &&
        item > currentValue.value
      return showWhenDisabled || showWhenAllowHalf
    }

    // @ts-ignore
    function getIconStyle(item) {
      const voidColor = rateDisabled.value ? props.disabledVoidColor : props.voidColor
      return {
        color: item <= currentValue.value ? activeColor.value : voidColor
      }
    }

    // @ts-ignore
    function selectValue(value) {
      if (rateDisabled.value) {
        return
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        emit('update:modelValue', currentValue.value)
        emit('change', currentValue.value)
      } else {
        emit('update:modelValue', value)
        emit('change', value)
      }
      formEmit('change', value)
    }

    // @ts-ignore
    function handleKey(e) {
      if (rateDisabled.value) {
        return
      }
      let _currentValue = currentValue.value
      const code = e.code
      if (code === EVENT_CODE.up || code === EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5
        } else {
          _currentValue += 1
        }
        e.stopPropagation()
        e.preventDefault()
      } else if (code === EVENT_CODE.left || code === EVENT_CODE.down) {
        if (props.allowHalf) {
          _currentValue -= 0.5
        } else {
          _currentValue -= 1
        }
        e.stopPropagation()
        e.preventDefault()
      }
      _currentValue = _currentValue < 0 ? 0 : _currentValue
      _currentValue = _currentValue > props.max ? props.max : _currentValue
      emit('update:modelValue', _currentValue)
      emit('change', _currentValue)
      return _currentValue
    }

    const hoverIndex = ref(-1)

    // @ts-ignore
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return
      }
      /* istanbul ignore if */
      if (props.allowHalf) {
        let target = event.target
        if (hasClass(target, 'bin-rate__item')) {
          target = target.querySelector('.bin-rate__icon')
        }
        if (hasClass(target, 'bin-rate__decimal')) {
          target = target.parentNode
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value
      } else {
        currentValue.value = value
      }
      hoverIndex.value = value
    }

    function resetCurrentValue() {
      if (rateDisabled.value) {
        return
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue)
      }
      currentValue.value = props.modelValue
      hoverIndex.value = -1
    }

    if (!props.modelValue) {
      emit('update:modelValue', 0)
    }
    return {
      hoverIndex,
      currentValue,
      rateDisabled,
      text,
      decimalStyle,
      decimalIconClass,
      classes,
      showDecimalIcon,
      getIconStyle,
      selectValue,
      handleKey,
      setCurrentValue,
      resetCurrentValue
    }
  }
})
</script>
