import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Table from '../src/Table.vue'

const treeColumns = [
  {
    title: 'Name',
    key: 'name',
    sortable: true,
    minWidth: 180
  },
  {
    title: 'Value',
    key: 'value',
    width: 120
  }
]

const treeData = [
  {
    id: 1,
    name: 'Beta',
    value: 2,
    children: [
      {
        id: 11,
        name: 'Beta-2',
        value: 22
      },
      {
        id: 12,
        name: 'Beta-1',
        value: 21
      }
    ]
  },
  {
    id: 2,
    name: 'Alpha',
    value: 1,
    children: [
      {
        id: 21,
        name: 'Alpha-2',
        value: 12
      },
      {
        id: 22,
        name: 'Alpha-1',
        value: 11
      }
    ]
  }
]

function getVisibleRowTexts(wrapper) {
  return wrapper.findAll('.bin-table-tbody .bin-table-row').map(row => {
    const firstCell = row.find('td')
    return firstCell.text()
  })
}

describe('BTable', () => {
  test('renders tree data and expands rows in uncontrolled mode', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: treeColumns,
        data: treeData,
        rowKey: 'id',
        expandColumnKey: 'name',
        defaultExpandedRowKeys: [1]
      },
      attachTo: document.body
    })

    await nextTick()

    expect(getVisibleRowTexts(wrapper)).toEqual(['Beta', 'Beta-2', 'Beta-1', 'Alpha'])

    const expandToggles = wrapper.findAll('.bin-table-tree-toggle')
    const toggle = expandToggles.find(item => item.find('i').exists())
    expect(toggle).toBeTruthy()

    await toggle!.trigger('click')
    await nextTick()

    expect(getVisibleRowTexts(wrapper)).toEqual(['Beta', 'Alpha'])
    expect(wrapper.emitted('update:expandedRowKeys')?.[0]?.[0]).toEqual([])
    expect(wrapper.emitted('expand-change')?.[0]?.[1]).toBe(false)
  })

  test('sorts tree rows by sibling groups and keeps hierarchy', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: treeColumns,
        data: treeData,
        rowKey: 'id',
        expandColumnKey: 'name',
        defaultExpandedRowKeys: [1, 2]
      },
      attachTo: document.body
    })

    await nextTick()

    wrapper.vm.handleSort(0, 'asc')
    await nextTick()

    expect(getVisibleRowTexts(wrapper)).toEqual([
      'Alpha',
      'Alpha-1',
      'Alpha-2',
      'Beta',
      'Beta-1',
      'Beta-2'
    ])

    wrapper.vm.handleSort(0, 'normal')
    await nextTick()

    expect(getVisibleRowTexts(wrapper)).toEqual([
      'Beta',
      'Beta-2',
      'Beta-1',
      'Alpha',
      'Alpha-2',
      'Alpha-1'
    ])
  })

  test('keeps boolean row-key compatibility for flat tables', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: treeColumns,
        data: [
          { name: 'One', value: 1 },
          { name: 'Two', value: 2 }
        ],
        rowKey: true
      },
      attachTo: document.body
    })

    await nextTick()

    expect(getVisibleRowTexts(wrapper)).toEqual(['One', 'Two'])
    expect(wrapper.find('.bin-table-tree-toggle').exists()).toBe(false)
  })

  test('uses b-scrollbar for body scrolling and syncs header/fixed bodies', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { title: 'Name', key: 'name', fixed: 'left', width: 160 },
          { title: 'Value', key: 'value', width: 160 },
          { title: 'Desc', key: 'desc', width: 220 }
        ],
        data: Array.from({ length: 8 }).map((_, index) => ({
          name: `Row ${index + 1}`,
          value: index + 1,
          desc: `Description ${index + 1}`
        })),
        height: 180
      },
      attachTo: document.body
    })

    await nextTick()

    const bodyWrap = wrapper.find('.bin-table-body__wrap')
    expect(bodyWrap.exists()).toBe(true)
    expect(wrapper.find('.bin-table-body .bin-scrollbar').exists()).toBe(true)

    const wrapEl = bodyWrap.element as HTMLElement
    wrapEl.scrollTop = 48
    wrapEl.scrollLeft = 32
    await bodyWrap.trigger('scroll')

    const headerEl = wrapper.find('.bin-table-header').element as HTMLElement
    const fixedBodyEl = wrapper.find('.bin-table-fixed-body').element as HTMLElement

    expect(headerEl.scrollLeft).toBe(32)
    expect(fixedBodyEl.scrollTop).toBe(48)
  })
})
