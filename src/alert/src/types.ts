export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  closable?: boolean
  showIcon?: boolean
  banner?: boolean
}
