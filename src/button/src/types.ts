export type ButtonType = 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'

export type ButtonSize = 'mini' | 'small' | 'large'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  icon?: string
  iconStyle?: object
  loading?: boolean
  loadingIcon?: string
  disabled?: boolean
  plain?: boolean
  round?: boolean
  dashed?: boolean
  transparent?: boolean
  background?: boolean
  textColor?: string
}
