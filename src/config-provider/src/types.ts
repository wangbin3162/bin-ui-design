import { type PropType } from 'vue'

export interface ConfigProviderProps {
  locale?: string
  theme?: 'dark'
  tag: string
}

export const configProviderProps = {
  abstract: Boolean,
  locale: String,
  theme: String as PropType<'dark'>,
  tag: {
    type: String,
    default: 'div'
  }
}
