import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Scrollbar from '../src/Scrollbar.vue'

function mockElementMetrics(el: HTMLElement, metrics: Record<string, number>) {
  for (const [key, value] of Object.entries(metrics)) {
    Object.defineProperty(el, key, {
      configurable: true,
      value
    })
  }
}

async function triggerScroll(
  wrapper: ReturnType<typeof mount>,
  wrapEl: HTMLElement,
  position: {
    top?: number
    left?: number
  }
) {
  if (typeof position.top === 'number') {
    wrapEl.scrollTop = position.top
  }
  if (typeof position.left === 'number') {
    wrapEl.scrollLeft = position.left
  }
  await wrapper.find('.bin-scrollbar__wrap').trigger('scroll')
}

describe('BScrollbar', () => {
  test('renders height, max-height and tabindex on wrap', async () => {
    const wrapper = mount(Scrollbar, {
      props: {
        height: 240,
        maxHeight: '320px',
        tabindex: 2
      }
    })

    await nextTick()

    const wrap = wrapper.find('.bin-scrollbar__wrap')
    const style = wrap.attributes('style') || ''

    expect(style).toContain('height: 240px;')
    expect(style).toContain('max-height: 320px;')
    expect(wrap.attributes('tabindex')).toBe('2')
  })

  test('updates vertical and horizontal thumb position when scrolling', async () => {
    const wrapper = mount(Scrollbar, {
      props: {
        height: '204px'
      },
      attrs: {
        style: 'width: 204px;'
      },
      slots: {
        default: '<div style="height: 500px; width: 500px;"></div>'
      }
    })

    const wrapEl = wrapper.find('.bin-scrollbar__wrap').element as HTMLElement
    mockElementMetrics(wrapEl, {
      offsetHeight: 204,
      scrollHeight: 500,
      offsetWidth: 204,
      scrollWidth: 500,
      clientHeight: 204,
      clientWidth: 204
    })

    wrapper.vm.update()
    await nextTick()

    await triggerScroll(wrapper, wrapEl, { top: 100, left: 100 })

    expect(wrapper.find('.is-vertical .bin-scrollbar__thumb').attributes('style')).toContain(
      'transform: translateY(50%)'
    )
    expect(wrapper.find('.is-vertical .bin-scrollbar__thumb').attributes('style')).toContain(
      'height: 80px'
    )
    expect(wrapper.find('.is-horizontal .bin-scrollbar__thumb').attributes('style')).toContain(
      'transform: translateX(50%)'
    )
    expect(wrapper.find('.is-horizontal .bin-scrollbar__thumb').attributes('style')).toContain(
      'width: 80px'
    )
  })

  test('emits scroll payload with scrollTop and scrollLeft', async () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: '<div style="height: 300px; width: 300px;"></div>'
      }
    })

    const wrapEl = wrapper.find('.bin-scrollbar__wrap').element as HTMLElement
    mockElementMetrics(wrapEl, {
      offsetHeight: 100,
      scrollHeight: 300,
      offsetWidth: 100,
      scrollWidth: 300,
      clientHeight: 100,
      clientWidth: 100
    })

    wrapper.vm.update()
    await nextTick()

    await triggerScroll(wrapper, wrapEl, { top: 32, left: 18 })

    const scrollEvents = wrapper.emitted('scroll') || []

    expect(scrollEvents.at(-1)?.[0]).toEqual({
      scrollTop: 32,
      scrollLeft: 18
    })
  })

  test('emits end-reached bottom and respects distance', async () => {
    const wrapper = mount(Scrollbar, {
      props: {
        distance: 20
      },
      slots: {
        default: '<div style="height: 300px;"></div>'
      }
    })

    const wrapEl = wrapper.find('.bin-scrollbar__wrap').element as HTMLElement
    mockElementMetrics(wrapEl, {
      offsetHeight: 100,
      scrollHeight: 300,
      clientHeight: 100,
      offsetWidth: 100,
      scrollWidth: 100,
      clientWidth: 100
    })

    wrapper.vm.update()
    await nextTick()

    await triggerScroll(wrapper, wrapEl, { top: 180 })

    expect(wrapper.emitted('end-reached')?.[0]?.[0]).toBe('bottom')
  })

  test('emits top, left and right end-reached directions', async () => {
    const wrapper = mount(Scrollbar, {
      props: {
        distance: 10
      },
      attrs: {
        style: 'width: 200px;'
      },
      slots: {
        default: '<div style="height: 300px; width: 300px;"></div>'
      }
    })

    const wrapEl = wrapper.find('.bin-scrollbar__wrap').element as HTMLElement
    mockElementMetrics(wrapEl, {
      offsetHeight: 100,
      scrollHeight: 300,
      clientHeight: 100,
      offsetWidth: 100,
      scrollWidth: 300,
      clientWidth: 100
    })

    wrapper.vm.update()
    await nextTick()

    await triggerScroll(wrapper, wrapEl, { top: 60 })
    await triggerScroll(wrapper, wrapEl, { top: 10 })
    await triggerScroll(wrapper, wrapEl, { left: 60 })
    await triggerScroll(wrapper, wrapEl, { left: 200 })
    await triggerScroll(wrapper, wrapEl, { left: 10 })

    expect(wrapper.emitted('end-reached')?.map(item => item[0])).toEqual(['top', 'right', 'left'])
  })

  test('deduplicates end-reached with distance and re-triggers after reverse scrolling', async () => {
    const wrapper = mount(Scrollbar, {
      props: {
        distance: 20
      },
      slots: {
        default: '<div style="height: 320px;"></div>'
      }
    })

    const wrapEl = wrapper.find('.bin-scrollbar__wrap').element as HTMLElement
    mockElementMetrics(wrapEl, {
      offsetHeight: 100,
      scrollHeight: 320,
      clientHeight: 100,
      offsetWidth: 100,
      scrollWidth: 100,
      clientWidth: 100
    })

    wrapper.vm.update()
    await nextTick()

    await triggerScroll(wrapper, wrapEl, { top: 200 })
    await triggerScroll(wrapper, wrapEl, { top: 200 })
    await triggerScroll(wrapper, wrapEl, { top: 120 })
    await triggerScroll(wrapper, wrapEl, { top: 200 })

    expect(wrapper.emitted('end-reached')?.map(item => item[0])).toEqual(['bottom', 'bottom'])
  })

  test('setScrollTop and setScrollLeft still drive scrollbar state after scroll event', async () => {
    const wrapper = mount(Scrollbar, {
      attrs: {
        style: 'width: 204px;'
      },
      slots: {
        default: '<div style="height: 500px; width: 500px;"></div>'
      }
    })

    const wrapEl = wrapper.find('.bin-scrollbar__wrap').element as HTMLElement
    mockElementMetrics(wrapEl, {
      offsetHeight: 204,
      scrollHeight: 500,
      offsetWidth: 204,
      scrollWidth: 500,
      clientHeight: 204,
      clientWidth: 204
    })

    wrapper.vm.update()
    await nextTick()

    wrapper.vm.setScrollTop(100)
    wrapper.vm.setScrollLeft(100)

    await triggerScroll(wrapper, wrapEl, {})

    expect(wrapper.find('.is-vertical .bin-scrollbar__thumb').attributes('style')).toContain(
      'transform: translateY(50%)'
    )
    expect(wrapper.find('.is-horizontal .bin-scrollbar__thumb').attributes('style')).toContain(
      'transform: translateX(50%)'
    )
  })
})
