import { StyleValue } from 'vue'

export interface ModalProps {
  appendToBody?: boolean
  beforeClose?: () => void
  destroyOnClose?: boolean
  customClass?: string
  bodyStyles?: StyleValue
  maskClosable?: boolean
  escClosable?: boolean
  fullscreen?: boolean
  lockScroll?: boolean
  mask?: boolean
  showClose?: boolean
  title?: string
  openDelay?: number
  closeDelay?: number
  top?: string
  modelValue?: boolean
  maskClass?: string
  width?: string
  draggable?: boolean
  zIndex?: number
  transitionName?: string
}
