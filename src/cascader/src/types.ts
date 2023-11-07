import { validSize } from '../../_utils/validator-size'

export const panelProps = {
  modelValue: [Number, String, Array],
  options: {
    type: Array,
    default() {
      return []
    }
  },
  props: {
    type: Object,
    default: () => ({})
  },
  border: {
    type: Boolean,
    default: true
  },
  renderLabel: Function
}

export const cascaderProps = {
  modelValue: [Number, String, Array],
  options: {
    type: Array,
    default() {
      return []
    }
  },
  props: {
    type: Object,
    default: () => ({})
  },
  size: {
    type: String,
    validator: validSize
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filterMethod: {
    type: Function,
    default: (node, keyword) => node.text.includes(keyword)
  },
  separator: {
    type: String,
    default: ' / '
  },
  showAllLevels: {
    type: Boolean,
    default: true
  },
  collapseTags: Boolean,
  debounce: {
    type: Number,
    default: 300
  },
  beforeFilter: {
    type: Function,
    default: () => true
  },
  popperClass: {
    type: String,
    default: ''
  }
}
