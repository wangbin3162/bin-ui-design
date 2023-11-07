export const inputNumberProps = {
  max: {
    type: Number,
    default: Infinity
  },
  min: {
    type: Number,
    default: -Infinity
  },
  step: {
    type: Number,
    default: 1
  },
  activeChange: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [Number, String]
  },
  size: {
    type: String,
    validator: value => ['small', 'large', 'default', 'mini', ''].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: true
  },
  name: {
    type: String
  },
  precision: {
    type: Number
  },
  elementId: {
    type: String
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String,
    default: ''
  },
  arrowUpIcon: {
    type: String,
    default: 'up'
  },
  arrowDownIcon: {
    type: String,
    default: 'down'
  },
  always: {
    type: Boolean
  }
}
