import { h, inject, computed, defineComponent, provide, onMounted, onBeforeUnmount, watch } from 'vue'
import { configProviderProps } from './types'
import { configProviderInjectionKey } from './context'
import { deepCopy, deepMerge } from '../../_utils/util'
import { normalizeLocale, setLocale } from '../../locales'
import {
  convertObjectPropsToCSSVariables,
  removeAttrVar,
  setAttrVar,
  setObjectPropsCSSVariables
} from '../../_utils/config-util'

export default defineComponent({
  name: 'BConfigProvider',
  alias: ['App'],
  props: configProviderProps,
  setup(props) {
    const BConfigProvider = inject(configProviderInjectionKey, null)
    const isTopLevelProvider = !BConfigProvider

    // 主题名称注入
    const mergedThemeNameRef = computed(() => {
      const { themeName } = props
      if (themeName === null) return undefined
      return themeName === undefined ? BConfigProvider?.mergedThemeNameRef.value : themeName
    })

    // 主题变量注入
    const mergedThemeRef = computed(() => {
      const { theme } = props
      if (theme === null) return undefined
      const inheritedTheme = deepCopy(BConfigProvider?.mergedThemeRef.value)
      return theme === undefined
        ? inheritedTheme
        : inheritedTheme === undefined
        ? theme
        : deepMerge(inheritedTheme, theme)
    })

    provide(configProviderInjectionKey, {
      // 语言环境包
      mergedLocaleRef: computed(() => {
        const { locale } = props
        if (locale === null) return undefined
        const inheritedLocale = BConfigProvider?.mergedLocaleRef.value
        return normalizeLocale(locale === undefined ? inheritedLocale : locale)
      }),
      mergedThemeRef,
      mergedThemeNameRef
    })
    onMounted(() => {
      setVariablesToDomNode()
    })

    function setVariablesToDomNode() {
      // 顶层 provider 负责同步根节点主题，确保 Teleport / 函数式组件可继承
      if (isTopLevelProvider) {
        if (mergedThemeNameRef.value) {
          setAttrVar('theme-name', mergedThemeNameRef.value)
        } else {
          removeAttrVar('theme-name')
        }
      }
      // 如果禁用样式注入，则需要注入到html
      if (props.inlineThemeDisabled || props.abstract) {
        setObjectPropsCSSVariables(mergedThemeRef.value ?? {})
      }
    }

    onBeforeUnmount(() => {
      if (isTopLevelProvider) {
        removeAttrVar('theme-name')
      }
    })

    watch(
      () => props.locale,
      val => {
        setLocale(val)
      },
      { immediate: true }
    )

    watch(
      () => [props.themeName, props.theme],
      () => {
        setVariablesToDomNode()
      },
      { deep: true }
    )
    return {
      mergedThemeName: mergedThemeNameRef,
      mergedTheme: mergedThemeRef
    }
  },
  render() {
    return !this.abstract
      ? h(
          this.tag,
          {
            class: 'b-config-provider',
            'theme-name': this.mergedThemeName,
            style: this.inlineThemeDisabled
              ? {}
              : convertObjectPropsToCSSVariables(this.mergedTheme ?? {})
          },
          this.$slots.default?.()
        )
      : this.$slots.default?.()
  }
})
