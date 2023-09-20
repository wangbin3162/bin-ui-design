export interface ScrollbarPropsInstance {
  native?: boolean
  always?: boolean
  wrapStyle?: string | object
  wrapClass?: string | string[]
  viewClass?: string | string[]
  viewStyle?: string | object
  noresize?: boolean // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  tag: string
  barStyle?: object // bar的样式
  barWrapStyle?: object // bar容器样式
}

export const scrollbarProps = {
  native: {
    type: Boolean,
    default: false
  },
  always: {
    // 是否是一直显示，不是悬停显示
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: [String, Object],
    default: ''
  },
  wrapClass: {
    type: [String, Array],
    default: ''
  },
  viewClass: {
    type: [String, Array],
    default: ''
  },
  viewStyle: {
    type: [String, Object],
    default: ''
  },
  noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  tag: {
    type: String,
    default: 'div'
  },
  barStyle: {
    type: Object,
    default: () => ({})
  },
  barWrapStyle: {
    type: Object,
    default: () => ({})
  }
}
