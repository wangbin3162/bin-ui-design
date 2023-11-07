export const optionsProps = {
  pageSizeOpts: Array,
  showSizer: Boolean,
  showElevator: Boolean,
  current: Number,
  currentTo: Number,
  pageSize: Number,
  allPages: Number,
  isSmall: Boolean,
  placement: String,
  appendToBody: Boolean
}

export const pageProps = {
  current: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pageSizeOpts: {
    type: Array,
    default: () => {
      return [10, 20, 30, 40]
    }
  },
  placement: {
    validator: value => ['top', 'bottom'].includes(value),
    default: 'bottom'
  },
  appendToBody: { type: Boolean, default: true },
  size: {
    validator: value => ['', 'small'].includes(value)
  },
  simple: Boolean,
  showTotal: Boolean,
  showElevator: Boolean,
  showSizer: Boolean,
  className: String,
  styles: Object,
  prevText: {
    type: String,
    default: ''
  },
  nextText: {
    type: String,
    default: ''
  }
}
