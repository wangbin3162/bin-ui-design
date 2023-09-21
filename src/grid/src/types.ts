export interface RowProps {
  type?: 'flex'
  align?: 'top' | 'middle' | 'bottom'
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  gutter?: string | number
  className?: string
}
export interface ColProps {
  span?: string | number
  order?: string | number
  offset?: string | number
  push?: string | number
  pull?: string | number
  className?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}
