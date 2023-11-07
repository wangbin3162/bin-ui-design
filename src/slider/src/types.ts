export const sliderProps = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  showInput: {
    type: Boolean,
    default: false
  },
  showInputControls: {
    type: Boolean,
    default: true
  },
  inputSize: {
    type: String,
    default: 'small'
  },
  showStops: {
    type: Boolean,
    default: false
  },
  showTooltip: {
    type: Boolean,
    default: true
  },
  formatTooltip: {
    type: Function,
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  range: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: ''
  },
  debounce: {
    type: Number,
    default: 300
  },
  label: {
    type: String,
    default: undefined
  },
  tooltipClass: {
    type: String,
    default: undefined
  },
  marks: Object
}
