export interface DrawerProps {
  modelValue?: boolean
  title?: string
  width?: number | string
  minWidth?: number | string
  showClose?: boolean
  maskClosable?: boolean
  mask?: boolean
  styles?: HTMLAttributes
  placement?: 'left' | 'right'
  zIndex?: number
  appendToBody?: boolean
  className?: string
  lockScroll?: boolean
  inner?: boolean
  draggable?: boolean
  beforeClose?: () => Promise<string>
}
