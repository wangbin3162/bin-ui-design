export interface ProgressProps {
  percent: number
  status?: 'text' | 'success' | 'exception'
  strokeWidth?: number
  textInside?: boolean
  showText?: boolean
  bgColor?: string
  color?: string
  radius?: number
  active?: boolean
}
