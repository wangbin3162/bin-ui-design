import { StyleValue } from 'vue'

export interface CardProps {
  header?: string
  bodyStyle?: StyleValue
  shadow?: string
  bordered?: boolean
  width?: string
  radius?: string
  bgColor?: string
  divider?: string
  headTip?: boolean
}
