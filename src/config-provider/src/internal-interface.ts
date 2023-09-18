import type { Ref } from 'vue'
export interface ConfigProviderInjection {
  mergedLocaleRef: Ref<string | undefined>
  mergedThemeNameRef: Ref<string | undefined>
  mergedThemeRef: Ref<object | undefined>
}
