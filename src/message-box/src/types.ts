/* eslint-disable no-unused-vars */
import type { VNode } from 'vue'
// message props
export interface MessageBoxProps {
  beforeClose?: (action, state, doClose) => void
  callback?: () => void
  cancelText?: string
  cancelButtonClass?: string
  maskClosable?: boolean
  escClosable?: boolean
  closeOnHashChange?: boolean
  confirmText?: string
  confirmButtonClass?: string
  container?: string
  customClass?: string
  useHTML?: boolean
  iconClass?: string
  lockScroll?: boolean
  message?: string | VNode
  modalFade?: boolean
  modalClass?: string
  mask?: boolean
  showCancelButton?: boolean
  showConfirmButton?: boolean
  type?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  zIndex?: number
}
