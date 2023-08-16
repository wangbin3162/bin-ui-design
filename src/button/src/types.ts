export type ButtonType = 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'

export type ButtonSize = 'mini' | 'small' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  nativeType?: NativeType
  icon?: string
  iconStyle?: object
  autofocus?: boolean
  loading?: boolean
  loadingIcon?: string
  disabled?: boolean
  plain?: boolean
  round?: boolean
  circle?: boolean
  dashed?: boolean
  transparent?: boolean
  background?: boolean
  textColor?: string
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
