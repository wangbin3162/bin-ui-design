import { computed } from 'vue'
import useTheme from './use-theme'
import { getLocale, normalizeLocale, t as translate, getLocaleValue } from '../locales'

export default function useLocale() {
  const { local } = useTheme()

  const localeRef = computed(() => normalizeLocale(local?.value || getLocale()))

  const t = (key: string, fallback = ''): string => {
    return translate(key, fallback, localeRef.value)
  }

  const getValue = <T = string>(key: string): T | undefined => {
    return getLocaleValue<T>(key, localeRef.value)
  }

  return {
    localeRef,
    t,
    getValue
  }
}
