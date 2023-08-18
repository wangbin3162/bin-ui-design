import { popperProps } from '../../_internal/popper'

export const tooltipProps = {
  ...popperProps,
  popperClass: {
    type: String,
    default: 'bin-tooltip'
  }
}
