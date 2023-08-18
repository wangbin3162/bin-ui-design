import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Collpase from '../src/Collapse.vue'
import CollpasePanel from '../src/CollapsePanel.vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'vue'

describe('Collpase.vue', () => {
  test('basic collapse', async () => {
    const onChange = vi.fn()

    const wrapper = mount(
      () => (
        <Collpase modelValue={['a']} onChange={onChange}>
          <CollpasePanel name="a" title="title a">
            content a
          </CollpasePanel>
          <CollpasePanel name="b" title="title b">
            content b
          </CollpasePanel>
          <CollpasePanel name="c" title="title c" disabled>
            content c
          </CollpasePanel>
        </Collpase>
      ),
      {
        global: {
          stubs: ['Icon', 'CollapseTransition']
        },
        attachTo: document.body
      }
    )
    // console.log(wrapper.html())
    const items = wrapper.findAll('.bin-collapse-item')
    const headers = wrapper.findAll('.bin-collapse-header')
    const contents = wrapper.findAll('.bin-collapse-content')
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    const firstHeader = headers[0]
    const secondHeader = headers[1]
    expect(firstHeader.text()).toBe('title a')
    // 内容
    const content0 = contents[0]
    const content1 = contents[1]
    const content3 = contents[2]
    expect(content0.text()).toBe('content a')
    expect(content0.isVisible()).toBeTruthy()
    expect(content1.isVisible()).toBeFalsy()

    await firstHeader.trigger('click')
    expect(onChange).toHaveBeenCalledWith([])
    await secondHeader.trigger('click')
    expect(onChange).toHaveBeenLastCalledWith(['b'])

    expect(content0.isVisible()).toBeFalsy()
    expect(content1.isVisible()).toBeTruthy()

    // disabled
    const disabledItem = items[2]
    const disabledHeader = headers[2]
    expect(disabledItem.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    expect(content3.isVisible()).toBeFalsy()
  })
})
