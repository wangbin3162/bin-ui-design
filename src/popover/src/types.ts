import { popperProps } from '../../_internal/popper/src/types'

export const popoverProps = {
  ...popperProps,
  content: {
    type: String
  },
  trigger: {
    type: String,
    default: 'click'
  },
  title: {
    type: String
  },
  transition: {
    type: String,
    default: 'fade-in-linear'
  },
  width: {
    type: [String, Number],
    default: 150
  },
  zIndex: {
    type: Number,
    default: 0
  }
}
