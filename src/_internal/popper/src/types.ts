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
  arrowOffset: {
    type: Number,
    default: 4
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  boundariesPadding: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    default: ''
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
  cutoff: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: Theme.DARK
  },
  enterable: {
    type: Boolean,
    default: true
  },
  hideAfter: {
    type: Number,
    default: 0
  },
  manualMode: {
    type: Boolean,
    default: false
  },
  showAfter: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    default: 'top'
  },
  popperClass: {
    type: String,
    default: ''
  },
  pure: {
    type: Boolean,
    default: false
  },
  // Once this option were given, the entire popper is under the users' control, top priority
  popperOptions: {
    type: Object,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  strategy: {
    type: String,
    default: 'fixed'
  },
  transition: {
    type: String,
    default: 'fade-in-linear'
  },
  trigger: {
    type: [String, Array],
    default: DEFAULT_TRIGGER
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
  },
  zIndex: {
    type: Number,
    default: 0
  }
}
