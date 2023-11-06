export const rateProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  lowThreshold: {
    type: Number,
    default: 2
  },
  highThreshold: {
    type: Number,
    default: 4
  },
  max: {
    type: Number,
    default: 5
  },
  colors: {
    type: Array,
    default: () => {
      return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
    }
  },
  voidColor: {
    type: String,
    default: '#C6D1DE'
  },
  disabledVoidColor: {
    type: String,
    default: '#EFF2F7'
  },
  iconClasses: {
    type: Array,
    default: () => {
      return ['star-fill', 'star-fill', 'star-fill']
    }
  },
  voidIconClass: {
    type: String,
    default: 'star'
  },
  disabledVoidIconClass: {
    type: String,
    default: 'star-fill'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean,
    default: false
  },
  showScore: {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
    default: 'rgba(0,0,0,.65)'
  },
  texts: {
    type: Array,
    default: () => {
      return ['极差', '失望', '一般', '满意', '惊喜']
    }
  },
  scoreTemplate: {
    type: String,
    default: '{value}'
  }
}
