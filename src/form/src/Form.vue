<template>
  <form
    class="bin-form"
    :class="[
      labelPosition ? 'bin-form--label-' + labelPosition : '',
      { 'bin-form--inline': inline }
    ]"
  >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { provide, watch, ref, computed, reactive, toRefs } from 'vue'
import mitt from 'mitt'
import { FormKey, FormEvents } from './token'
import { formProps } from './types'

function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([])
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length) return '0'
    const max = Math.max(...potentialLabelWidthArr.value)
    return max ? `${max}px` : ''
  })

  function getLabelWidthIndex(width) {
    //@ts-ignore
    const index = potentialLabelWidthArr.value.indexOf(width)
    if (index === -1) {
      console.warn('[Element Warn][ElementForm]unexpected width ' + width)
    }
    return index
  }

  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal)
      //@ts-ignore
      potentialLabelWidthArr.value.splice(index, 1, val)
    } else if (val) {
      //@ts-ignore
      potentialLabelWidthArr.value.push(val)
    }
  }

  function deregisterLabelWidth(val) {
    const index = getLabelWidthIndex(val)
    index > -1 && potentialLabelWidthArr.value.splice(index, 1)
  }

  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  }
}

export default {
  name: 'BForm',
  props: formProps,
  emits: ['validate'],
  setup(props, { emit }) {
    const formMitt = mitt()

    const fields = []

    watch(
      () => props.rules,
      () => {
        fields.forEach(field => {
          //@ts-ignore
          field.removeValidateEvents()
          //@ts-ignore
          field.addValidateEvents()
        })

        if (props.validateOnRuleChange) {
          validate(() => ({}))
        }
      }
    )

    formMitt.on(FormEvents.addField, field => {
      if (field) {
        //@ts-ignore
        fields.push(field)
      }
    })

    formMitt.on(FormEvents.removeField, field => {
      //@ts-ignore
      if (field.prop) {
        //@ts-ignore
        fields.splice(fields.indexOf(field), 1)
      }
    })

    const resetFields = () => {
      if (!props.model) {
        console.warn('[Element Warn][Form]model is required for resetFields to work.')
        return
      }
      fields.forEach(field => {
        //@ts-ignore
        field.resetField()
      })
    }

    const clearValidate = (props = []) => {
      const fds = props.length
        ? typeof props === 'string'
          ? //@ts-ignore
            fields.filter(field => props === field.prop)
          : //@ts-ignore
            fields.filter(field => props.indexOf(field.prop) > -1)
        : fields
      fds.forEach(field => {
        //@ts-ignore
        field.clearValidate()
      })
    }

    const validate = callback => {
      if (!props.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!')
        return
      }

      let promise
      // if no callback, return promise
      if (typeof callback !== 'function') {
        promise = new Promise(resolve => {
          callback = function (valid, invalidFields) {
            if (valid) {
              resolve(true)
            } else {
              //@ts-ignore
              resolve(false, invalidFields)
            }
          }
        })
      }

      if (fields.length === 0) {
        callback(true)
      }
      let valid = true
      let count = 0
      let invalidFields = {}
      for (const field of fields) {
        //@ts-ignore
        field.validate('', (message, field) => {
          if (message) {
            valid = false
          }
          invalidFields = { ...invalidFields, ...field }
          if (++count === fields.length) {
            callback(valid, invalidFields)
          }
        })
      }
      return promise
    }

    const validateField = (props, cb) => {
      props = [].concat(props)
      //@ts-ignore
      const fds = fields.filter(field => props.indexOf(field.prop) !== -1)
      if (!fields.length) {
        console.warn('[Element Warn]please pass correct props!')
        return
      }

      fds.forEach(field => {
        //@ts-ignore
        field.validate('', cb)
      })
    }

    const elForm = reactive({
      formMitt,
      ...toRefs(props),
      resetFields,
      clearValidate,
      validateField,
      emit,
      ...useFormLabelWidth()
    })

    provide(FormKey, elForm)

    return {
      validate, // export
      resetFields,
      clearValidate,
      validateField
    }
  }
}
</script>
