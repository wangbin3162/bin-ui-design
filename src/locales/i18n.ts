import { createI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

export type BinLocale = 'zh-CN' | 'en-US'

const FALLBACK_LOCALE: BinLocale = 'zh-CN'

const i18n = createI18n({
  legacy: false,
  globalInjection: false,
  locale: FALLBACK_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export const localeList = [
  { value: 'zh-CN', label: '简体中文' },
  { value: 'en-US', label: 'English' }
] as const

export function normalizeLocale(locale?: string): BinLocale {
  return locale === 'en-US' ? 'en-US' : 'zh-CN'
}

function syncDayjsLocale(locale: BinLocale): void {
  dayjs.locale(locale === 'en-US' ? 'en' : 'zh-cn')
}

export function setLocale(locale?: string): BinLocale {
  const nextLocale = normalizeLocale(locale)
  i18n.global.locale.value = nextLocale
  syncDayjsLocale(nextLocale)
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', nextLocale)
  }
  return nextLocale
}

export function getLocale(): BinLocale {
  return normalizeLocale(i18n.global.locale.value as string)
}

function getValueByPath(target: Record<string, unknown>, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, current) => {
    if (acc && typeof acc === 'object' && current in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[current]
    }
    return undefined
  }, target)
}

export function getLocaleValue<T = string>(key: string, locale?: string): T | undefined {
  const currentLocale = normalizeLocale(locale)
  const localeMessage = i18n.global.getLocaleMessage(currentLocale) as Record<string, unknown>
  const fallbackMessage = i18n.global.getLocaleMessage(FALLBACK_LOCALE) as Record<string, unknown>

  const currentValue = getValueByPath(localeMessage, key)
  if (currentValue !== undefined) return currentValue as T

  const fallbackValue = getValueByPath(fallbackMessage, key)
  if (fallbackValue !== undefined) return fallbackValue as T

  return undefined
}

export function t(key: string, fallback = '', locale?: string): string {
  const val = getLocaleValue<string>(key, locale)
  if (val === undefined) return fallback || key
  return val
}

setLocale(FALLBACK_LOCALE)

export { i18n, FALLBACK_LOCALE }
