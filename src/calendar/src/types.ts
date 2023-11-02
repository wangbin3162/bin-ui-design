import { StyleValue } from 'vue'

export interface CalendarProps {
  gridHeight?: string
  textAlign?: string
  mini?: boolean
  bodyStyle?: StyleValue
  dayStyle?: StyleValue
}

export interface DateProps {
  date: Date
  year: number
  month: number
  day: number
  monthFlag: string | null
  isCurrentDay: boolean
  selected: boolean
}
