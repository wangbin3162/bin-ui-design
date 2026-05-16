export interface ScrollbarPropsInstance {
  distance?: number
  height?: string | number
  maxHeight?: string | number
  native?: boolean
  always?: boolean
  wrapStyle?: string | object | object[]
  wrapClass?: string | string[]
  viewClass?: string | string[]
  viewStyle?: string | object | object[]
  noresize?: boolean // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  tag: string
  minSize?: number
  tabindex?: string | number
  barStyle?: object // bar的样式
  barWrapStyle?: object // bar容器样式
}

export type ScrollbarDirection = 'top' | 'bottom' | 'left' | 'right'

export interface ScrollbarScrollData {
  scrollTop: number
  scrollLeft: number
}

export const scrollbarProps = {
  distance: {
    type: Number,
    default: 0
  },
  height: {
    type: [String, Number],
    default: ''
  },
  maxHeight: {
    type: [String, Number],
    default: ''
  },
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
    type: [String, Object, Array],
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
    type: [String, Object, Array],
    default: ''
  },
  noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  tag: {
    type: String,
    default: 'div'
  },
  minSize: {
    type: Number,
    default: 20
  },
  tabindex: {
    type: [String, Number],
    default: undefined
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
