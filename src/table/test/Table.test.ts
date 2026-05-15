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

    Object.defineProperty(wrapEl, 'clientWidth', {
      configurable: true,
      value: 200
    })
    Object.defineProperty(wrapEl, 'scrollWidth', {
      configurable: true,
      value: 500
    })

    wrapper.vm.handleResize()
    await nextTick()

    wrapEl.scrollLeft = 0
    await bodyWrap.trigger('scroll')
    expect(wrapper.find('.bin-table').classes()).toContain('bin-table-scrolling-left')

    wrapEl.scrollTop = 48
    wrapEl.scrollLeft = 32
    await bodyWrap.trigger('scroll')

    const headerEl = wrapper.find('.bin-table-header').element as HTMLElement
    const fixedBodyEl = wrapper.find('.bin-table-fixed-body').element as HTMLElement

    expect(headerEl.scrollLeft).toBe(32)
    expect(fixedBodyEl.scrollTop).toBe(48)
    expect(wrapper.find('.bin-table').classes()).toContain('bin-table-scrolling-middle')

    wrapEl.scrollLeft = 320
    await bodyWrap.trigger('scroll')
    expect(wrapper.find('.bin-table').classes()).toContain('bin-table-scrolling-right')
  })

  test('does not render extra header gutter cells when vertical scrolling is present', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { title: 'Name', key: 'name', width: 160 },
          { title: 'Value', key: 'value', width: 160 }
        ],
        data: Array.from({ length: 4 }).map((_, index) => ({
          name: `Row ${index + 1}`,
          value: index + 1
        })),
        height: 180
      },
      attachTo: document.body
    })

    await nextTick()

    wrapper.vm.showVerticalScrollBar = true
    await nextTick()

    expect(wrapper.findAll('.bin-table-header th')).toHaveLength(2)
  })

  test('passes max-height to scrollbar wrap instead of outer body shell', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { title: 'Name', key: 'name', width: 160 },
          { title: 'Value', key: 'value', width: 160 }
        ],
        data: Array.from({ length: 6 }).map((_, index) => ({
          name: `Row ${index + 1}`,
          value: index + 1
        })),
        maxHeight: 200
      },
      attachTo: document.body
    })

    await nextTick()
    await nextTick()

    expect(wrapper.find('.bin-table-body').attributes('style') || '').not.toContain('max-height')
    expect(wrapper.find('.bin-table-body__wrap').attributes('style') || '').toContain('max-height')
  })

  test('renders only fixed columns inside fixed panes for grouped headers', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          {
            title: '用户信息',
            fixed: 'left',
            children: [
              { title: '姓名', key: 'name', width: 160 },
              { title: '年龄', key: 'age', width: 120 }
            ]
          },
          { title: '地址', key: 'address', width: 220 },
          { title: '状态', key: 'status', fixed: 'right', width: 120 }
        ],
        data: [
          { name: '王小明', age: 18, address: '上海', status: '正常' },
          { name: '李小红', age: 20, address: '北京', status: '活跃' }
        ],
        height: 180,
        border: true
      },
      attachTo: document.body
    })

    await nextTick()
    await nextTick()

    expect(wrapper.findAll('.bin-table-fixed .bin-table-fixed-header col')).toHaveLength(2)
    expect(wrapper.findAll('.bin-table-fixed .bin-table-fixed-body col')).toHaveLength(2)
    expect(wrapper.findAll('.bin-table-fixed-right .bin-table-fixed-header col')).toHaveLength(1)
    expect(wrapper.findAll('.bin-table-fixed-right .bin-table-fixed-body col')).toHaveLength(1)
    expect(wrapper.findAll('.bin-table-fixed .bin-table-hidden')).toHaveLength(0)
    expect(wrapper.findAll('.bin-table-fixed-right .bin-table-hidden')).toHaveLength(0)
  })

  test('keeps mergeMethod column indexes stable inside fixed panes', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { title: '姓名', key: 'name', fixed: 'left', width: 160 },
          { title: '城市', key: 'city', width: 160 },
          { title: '状态', key: 'status', fixed: 'right', width: 120 }
        ],
        data: [
          { name: '王小明', city: '上海', status: '正常' },
          { name: '李小红', city: '北京', status: '正常' }
        ],
        mergeMethod: ({ rowIndex, columnIndex }) => {
          if (columnIndex === 2) {
            if (rowIndex === 0) return { rowspan: 2, colspan: 1 }
            if (rowIndex === 1) return { rowspan: 0, colspan: 0 }
          }

          return { rowspan: 1, colspan: 1 }
        }
      },
      attachTo: document.body
    })

    await nextTick()

    const rightRows = wrapper.findAll('.bin-table-fixed-right tbody tr')
    expect(rightRows[0].find('td').attributes('rowspan')).toBe('2')
    expect(rightRows[1].findAll('td')).toHaveLength(0)
  })

  test('clips fixed-pane colspan when merge spans across panes', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { title: '姓名', key: 'name', fixed: 'left', width: 160 },
          { title: '城市', key: 'city', width: 160 },
          { title: '状态', key: 'status', fixed: 'right', width: 120 }
        ],
        data: [{ name: '王小明', city: '上海', status: '正常' }],
        mergeMethod: ({ rowIndex, columnIndex }) => {
          if (rowIndex === 0 && columnIndex === 0) {
            return { rowspan: 1, colspan: 2 }
          }
          if (rowIndex === 0 && columnIndex === 1) {
            return { rowspan: 0, colspan: 0 }
          }

          return { rowspan: 1, colspan: 1 }
        }
      },
      attachTo: document.body
    })

    await nextTick()

    const fixedCell = wrapper.find('.bin-table-fixed tbody td')
    expect(fixedCell.attributes('colspan')).toBe('1')
  })
})
