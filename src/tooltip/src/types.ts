import { popperProps } from '../../_internal/popper/src/types'

export const tooltipProps = {
  ...popperProps,
  popperClass: {
    type: String,
    default: 'bin-tooltip'
  }
}
