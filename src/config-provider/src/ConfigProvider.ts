/* eslint-disable @typescript-eslint/indent */
import { h, inject, computed, defineComponent, provide } from 'vue'

import { configProviderProps } from './types'

import { configProviderInjectionKey } from './context'

export default defineComponent({
  name: 'BConfigProvider',
  alias: ['App'],
  props: configProviderProps,
  setup(props) {
    const BConfigProvider = inject(configProviderInjectionKey, null)

    const mergedThemeRef = computed(() => {
      const { theme } = props
      if (theme === null) return undefined
      const inheritedTheme = BConfigProvider?.mergedThemeRef.value
      return theme === undefined
        ? inheritedTheme
        : inheritedTheme === undefined
        ? theme
        : Object.assign({}, inheritedTheme, theme)
    })

    provide(configProviderInjectionKey, {
      mergedLocaleRef: computed(() => {
        const { locale } = props
        if (locale === null) return undefined
        return locale === undefined ? BConfigProvider?.mergedLocaleRef.value : locale
      }),
      mergedThemeRef
    })
    return {
      mergedTheme: mergedThemeRef
    }
  },
  render() {
    return !this.abstract
      ? h(
          this.tag,
          {
            class: 'b-config-provider',
            'theme-name': this.mergedTheme
          },
          this.$slots.default?.()
        )
      : this.$slots.default?.()
  }
})
