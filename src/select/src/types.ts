export const selectProps = {
  name: String,
  id: String,
  modelValue: [Array, String, Number, Boolean, Object],
  autocomplete: {
    type: String,
    default: 'off'
  },
  automaticDropdown: Boolean,
  size: {
    type: String,
    validator: value => ['small', 'large', 'default', 'mini', ''].includes(value)
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ''
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: Boolean,
  valueKey: {
    type: String,
    default: 'value'
  },
  collapseTags: Boolean,
  appendToBody: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: String,
    default: 'close-circle-fill'
  }
}

export const optionProps = {
  value: {
    required: true,
    type: [String, Number, Boolean, Object]
  },
  label: [String, Number],
  created: Boolean,
  disabled: {
    type: Boolean,
    default: false
  }
}
