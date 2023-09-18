import { inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/src/context'

/**
 * 全局主题，这里需要实现不同主题，不同组件引入后使用
 * import useTheme from '../../_hooks/use-theme'
 * const theme = useTheme()
 * 并且在对应dom上增加  :theme-name="theme"
 */
export default function useTheme() {
  const { mergedThemeRef, mergedLocaleRef, mergedThemeNameRef } =
    inject(configProviderInjectionKey, null) || {}

  return {
    themeConfig: mergedThemeRef,
    local: mergedLocaleRef,
    themeName: mergedThemeNameRef
  }
}
