export const switchProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: false
  },
  trueValue: {
    type: [String, Number, Boolean],
    default: true
  },
  falseValue: {
    type: [String, Number, Boolean],
    default: false
  },
  disabled: Boolean,
  size: {
    validator: value => {
      return ['large', 'small', 'default'].includes(value)
    },
    default: 'default'
  },
  name: String,
  activeColor: String,
  inactiveColor: String,
  confirm: Boolean,
  confirmTxt: String,
  loading: {
    type: Boolean,
    default: false
  },
  beforeChange: Function
}
