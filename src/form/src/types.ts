import { validSize } from '../../_utils/validator-size'

export const formProps = {
  model: Object,
  rules: Object,
  labelPosition: String,
  labelWidth: String,
  labelSuffix: {
    type: String,
    default: ''
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: {
    type: Boolean,
    default: false
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: String,
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  }
}

export const formItemProps = {
  label: String,
  labelWidth: String,
  prop: String,
  required: {
    type: Boolean,
    default: undefined
  },
  rules: [Object, Array],
  error: String,
  validateStatus: String,
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ''
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    types: String,
    validator: validSize
  }
}
