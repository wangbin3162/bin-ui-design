export type DividerAlign = 'left' | 'right' | 'center'
export type DividerType = 'horizontal' | 'vertical'

export interface DividerProps {
  type?: DividerType
  align?: DividerAlign
  dashed?: boolean
}
