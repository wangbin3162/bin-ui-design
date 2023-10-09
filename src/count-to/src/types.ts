export const CountToProps = {
  startVal: {
    type: Number,
    default: 0
  },
  endVal: {
    type: Number,
    default: 2000
  },
  duration: {
    type: Number,
    default: 2000
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  decimals: {
    type: Number,
    required: false,
    default: 0,
    validator(value) {
      return value >= 0
    }
  },
  decimal: {
    type: String,
    default: '.'
  },
  separator: {
    type: String,
    default: ','
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  useEasing: {
    type: Boolean,
    default: true
  },
  easingFn: {
    type: Function,
    default(t, b, c, d) {
      return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b
    }
  }
}
