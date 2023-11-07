export const colorProps = {
  modelValue: String,
  showAlpha: Boolean,
  colorFormat: {
    type: String,
    default: 'hex'
  },
  disabled: Boolean,
  size: {
    type: String,
    validator: val => ['', 'large', 'default', 'small', 'mini'].includes(val)
  },
  popperClass: String,
  colors: Array,
  showLabel: {
    type: Boolean,
    default: true
  }
}
