export const checkboxProps = {
  modelValue: {
    type: [Boolean, Number, String],
    default: () => undefined
  },
  label: {
    type: [Boolean, Number, String]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: undefined
  },
  trueLabel: {
    type: [String, Number],
    default: undefined
  },
  falseLabel: {
    type: [String, Number],
    default: undefined
  },
  id: {
    type: String,
    default: undefined
  },
  controls: {
    type: String,
    default: undefined
  }
}
