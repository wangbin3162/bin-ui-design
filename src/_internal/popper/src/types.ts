import type { Placement, Options } from '@popperjs/core'
import type { PropType } from 'vue'

export const Theme = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const DEFAULT_TRIGGER = 'hover'

export type TriggerType = 'hover' | 'click' | 'contextmenu' | 'manual'
export type ThemeType = 'light' | 'dark'

export interface PopperProps {
  manualMode?: boolean
  content?: string
  trigger?: TriggerType
  placement?: Placement
  theme?: ThemeType
  zIndex?: number
  offset?: number
  arrowOffset?: number
  appendToBody?: boolean
  class?: string
  openDelay?: number
  closeDelay?: number
  disabled?: boolean
  popperClass?: string
  popperOptions?: Partial<Options>
  showArrow?: boolean
  showAfter?: number
  hideAfter?: number
  transition?: string
  boundariesPadding?: number
  cutoff?: boolean
  pure?: boolean
  strategy?: string
  visible?: boolean
  stopPopperMouseEvent?: boolean
  gpuAcceleration?: boolean
}

//箭头是三角形，边长10px，第三边长~ 14.1px 一个偏移量应该是5，这解决了箭头溢出的问题。
export const popperProps = {
  manualMode: {
    type: Boolean,
    default: false
  },
  content: {
    type: String
  },
  trigger: {
    type: String as PropType<TriggerType>,
    default: DEFAULT_TRIGGER
  },
  theme: {
    type: String as PropType<ThemeType>,
    default: Theme.DARK
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'top'
  },
  zIndex: {
    type: Number,
    default: 0
  },
  arrowOffset: {
    type: Number,
    default: 4
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  class: {
    type: String,
    default: ''
  },
  style: Object,
  closeDelay: {
    type: Number,
    default: 200
  },
  openDelay: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: String,
    default: ''
  },
  popperOptions: {
    type: Object,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  transition: {
    type: String,
    default: 'fade-in-linear'
  },
  boundariesPadding: {
    type: Number,
    default: 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 0
  },
  cutoff: {
    type: Boolean,
    default: false
  },
  pure: {
    type: Boolean,
    default: false
  },
  strategy: {
    type: String,
    default: 'fixed'
  },
  visible: {
    type: Boolean,
    default: undefined
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  }
}
