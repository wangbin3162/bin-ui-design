export const inputProps = {
  type: {
    validator: value => {
      return ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel'].includes(
        value
      )
    },
    default: 'text'
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  size: {
    type: String,
    validator: value => ['small', 'large', 'default', 'mini', ''].includes(value)
  },
  placeholder: {
    type: String,
    default: ''
  },
  maxlength: {
    type: Number
  },
  disabled: Boolean,
  showPasswordToggle: Boolean,
  icon: {
    type: String,
    default: ''
  },
  autosize: {
    type: Object,
    default: () => {
      return {}
    }
  },
  rows: {
    type: Number,
    default: 2
  },
  readonly: Boolean,
  name: String,
  number: Boolean,
  autofocus: Boolean,
  autocomplete: {
    validator: value => {
      return ['on', 'off'].includes(value)
    },
    default: 'off'
  },
  clearable: Boolean,
  elementId: String,
  wrap: {
    validator: value => {
      return ['hard', 'soft'].includes(value)
    },
    default: 'soft'
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  search: Boolean,
  noResize: Boolean,
  showWordCount: Boolean,
  validateEvent: {
    type: Boolean,
    default: true
  }
}
