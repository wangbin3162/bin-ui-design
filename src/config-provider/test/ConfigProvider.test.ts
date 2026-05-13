import { describe, test, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import ConfigProvider from '../src/ConfigProvider'

afterEach(() => {
  document.documentElement.removeAttribute('theme-name')
})

describe('ConfigProvider theme sync', () => {
  test('syncs top-level themeName to html root', async () => {
    const wrapper = mount(ConfigProvider, {
      props: {
        themeName: 'dark'
      },
      slots: {
        default: () => h('div', 'content')
      }
    })

    expect(wrapper.attributes('theme-name')).toBe('dark')
    expect(document.documentElement.getAttribute('theme-name')).toBe('dark')

    await wrapper.setProps({ themeName: 'light' })
    expect(wrapper.attributes('theme-name')).toBe('light')
    expect(document.documentElement.getAttribute('theme-name')).toBe('light')

    await wrapper.setProps({ themeName: undefined })
    expect(document.documentElement.getAttribute('theme-name')).toBeNull()

    wrapper.unmount()
    expect(document.documentElement.getAttribute('theme-name')).toBeNull()
  })

  test('nested provider does not override html root themeName', () => {
    const Demo = defineComponent({
      setup() {
        return () =>
          h(ConfigProvider, { themeName: 'light' }, () => [
            h(ConfigProvider, { themeName: 'dark' }, () => h('div', 'nested'))
          ])
      }
    })

    const wrapper = mount(Demo)
    const providers = wrapper.findAll('.b-config-provider')

    expect(providers.length).toBe(2)
    expect(providers[0].attributes('theme-name')).toBe('light')
    expect(providers[1].attributes('theme-name')).toBe('dark')
    expect(document.documentElement.getAttribute('theme-name')).toBe('light')
  })
})
