import type { Ref } from 'vue'
export interface ConfigProviderInjection {
  mergedLocaleRef: Ref<string | undefined>
  mergedThemeRef: Ref<string | undefined>
}
