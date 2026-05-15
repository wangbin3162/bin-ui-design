<template>
  <div ref="containerRef" :class="wrapClasses" :style="wrapStyles">
    <div v-loading:[loadingText]="loading" :class="classes">
      <div
        v-if="showHeader"
        ref="headerRef"
        :class="['bin-table-header']"
        @mousewheel="handleMouseWheel"
      >
        <table-head
          prefix-cls="bin-table"
          :style-object="tableHeaderStyle"
          :columns="cloneColumns"
          :column-rows="columnRows"
          :obj-data="objData"
          :columns-width="columnsWidth"
          :data="rebuildData"
        ></table-head>
      </div>
      <div
        v-show="hasData"
        :class="['bin-table-body']"
        :style="bodyStyle"
      >
        <b-scrollbar
          ref="bodyScrollbarRef"
          wrap-class="bin-table-body__wrap"
          :height="height ? bodyHeight : ''"
          :max-height="maxHeight ? bodyHeight : ''"
          :view-style="bodyViewStyle"
          @scroll="handleBodyScroll"
        >
          <table-body
            ref="tbodyRef"
            prefix-cls="bin-table"
            :draggable="isDraggable"
            :style-object="tableStyle"
            :columns="cloneColumns"
            :data="rebuildData"
            :row-key="rowKey"
            :columns-width="columnsWidth"
            :obj-data="objData"
          ></table-body>
        </b-scrollbar>
      </div>
      <div
        v-show="!hasData"
        :class="['bin-table-tip']"
        :style="bodyStyle"
      >
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <tr>
              <td :style="{ height: bodyStyle.height, width: `${headerWidth}px` }">
                <b-empty v-if="!data || data.length === 0">{{ noDataText }}</b-empty>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="isLeftFixed" :class="['bin-table-fixed']" :style="fixedTableStyle">
        <div v-if="showHeader" :class="fixedHeaderClasses">
          <table-head
            fixed="left"
            prefix-cls="bin-table"
            :style-object="fixedTableStyle"
            :columns="leftFixedColumns"
            :column-rows="columnRows"
            :fixed-column-rows="leftFixedColumnRows"
            :obj-data="objData"
            :columns-width="columnsWidth"
            :data="rebuildData"
          ></table-head>
        </div>
        <div
          ref="fixedBodyRef"
          :class="['bin-table-fixed-body']"
          :style="fixedBodyStyle"
          @mousewheel="handleFixedMousewheel"
          @DOMMouseScroll="handleFixedMousewheel"
        >
          <table-body
            fixed="left"
            :draggable="isDraggable"
            prefix-cls="bin-table"
            :style-object="fixedTableStyle"
            :columns="leftFixedColumns"
            :data="rebuildData"
            :row-key="rowKey"
            :columns-width="columnsWidth"
            :obj-data="objData"
          ></table-body>
        </div>
      </div>
      <div v-if="isRightFixed" :class="['bin-table-fixed-right']" :style="fixedRightTableStyle">
        <div v-if="showHeader" :class="fixedHeaderClasses">
          <table-head
            fixed="right"
            prefix-cls="bin-table"
            :style-object="fixedRightTableStyle"
            :columns="rightFixedColumns"
            :column-rows="columnRows"
            :fixed-column-rows="rightFixedColumnRows"
            :obj-data="objData"
            :columns-width="columnsWidth"
            :data="rebuildData"
          ></table-head>
        </div>
        <div
          ref="fixedRightBodyRef"
          :class="['bin-table-fixed-body']"
          :style="fixedBodyStyle"
          @mousewheel="handleFixedMousewheel"
          @DOMMouseScroll="handleFixedMousewheel"
        >
          <table-body
            fixed="right"
            :draggable="isDraggable"
            prefix-cls="bin-table"
            :style-object="fixedRightTableStyle"
            :columns="rightFixedColumns"
            :data="rebuildData"
            :row-key="rowKey"
            :columns-width="columnsWidth"
            :obj-data="objData"
          ></table-body>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sortable from 'sortablejs'
import TableHead from './table-head.vue'
import TableBody from './table-body.vue'
import { tableProps } from './types'
import { deepCopy } from '../../_utils/util'
import { getStyle, on, off, getScrollBarWidth } from '../../_utils/dom'
import { addResizeListener, removeResizeListener } from '../../_utils/resize-event'
import { generateId } from '../../_utils/util-helper'
import { getAllColumns, convertToRows, getRandomStr } from './main/util'
import {
  collectExpandedTreeKeys,
  flattenVisibleTreeRows,
  sortTreeRows,
  walkTreeRows
} from './main/tree'
import { Loading } from '../../_directives'

import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch
} from 'vue'
import { BEmpty } from '../../_internal/empty'
import { BScrollbar } from '../../_internal/scrollbar'

const prefixCls = 'bin-table'

let rowKey = 1
let columnKey = 1

export default defineComponent({
  name: 'BTable',
  components: { BEmpty, BScrollbar, TableBody, TableHead },
  directives: { Loading },
  props: tableProps,
  emits: [
    'sort-change',
    'current-change',
    'row-click',
    'row-dblclick',
    'select',
    'select-cancel',
    'selection-change',
    'select-all',
    'select-all-cancel',
    'selection-change',
    'expand',
    'expand-change',
    'drag-drop',
    'update:data',
    'update:expandedRowKeys'
  ],
  setup(props, { emit, slots }) {
    const containerRef = ref(null)
    const titleRef = ref(null)
    const headerRef = ref(null)
    const bodyScrollbarRef = ref(null)
    const tbodyRef = ref(null)
    const footerRef = ref(null)
    const fixedBodyRef = ref(null)
    const fixedRightBodyRef = ref(null)
    // 基础数据
    const colsWithId = makeColumnsId(deepCopy(props.columns))
    // data
    const read = ref(false)
    const cloneColumns = ref(makeColumns(colsWithId))
    const columnRows = ref(makeColumnRows(false, colsWithId))
    const leftFixedColumnRows = ref(makeColumnRows('left', colsWithId))
    const rightFixedColumnRows = ref(makeColumnRows('right', colsWithId))
    const allColumns = ref(getAllColumns(colsWithId))
    const tableWidth = ref(0)
    const headerWidth = ref(0)
    const headerHeight = ref(0)
    const bodyHeight = ref(0)
    const bodyViewportHeight = ref(0)
    const columnsWidth = ref({})

    const cloneData = ref<any[]>(deepCopy(props.data))
    const preparedData = ref<any[]>([])
    const sourceDataMap = ref<Record<number, any>>({})
    const rebuildData = ref<any[]>([])
    const objData = ref<Record<number, any>>({})
    const internalExpandedRowKeys = ref<any[]>(makeDefaultExpandedRowKeys(props.data))

    const showVerticalScrollBar = ref(false)
    const showHorizontalScrollBar = ref(false)
    const horizontalScrollPosition = ref('none')
    const scrollBarWidth = ref(getScrollBarWidth())
    const hasExpandColumn = computed(() => cloneColumns.value.some(column => column.type === 'expand'))
    const isTreeMode = computed(
      () =>
        !!props.expandColumnKey &&
        typeof props.rowKey === 'string' &&
        !hasExpandColumn.value
    )
    const isDraggable = computed(() => props.draggable && !isTreeMode.value)
    const activeExpandedRowKeys = computed(() =>
      Array.isArray(props.expandedRowKeys) ? props.expandedRowKeys : internalExpandedRowKeys.value
    )
    const hasData = computed(() => rebuildData.value.length > 0)

    // computed
    const wrapClasses = computed(() => {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-hide`]: !read.value,
          [`${prefixCls}-wrapper-with-border`]: props.border,
          [`is-edit-table`]: props.editTable,
          [`is-edit-table-detail`]: props.editTable && props.editTableDetail
        }
      ]
    })
    const wrapStyles = computed(() => {
      const height = props.height
      const maxHeight = props.maxHeight
      const width = props.width

      let style = {}
      // @ts-ignore
      if (height) style.height = `${parseInt(height)}px`

      // @ts-ignore
      if (maxHeight) style.maxHeight = `${parseInt(maxHeight)}px`

      // @ts-ignore
      if (width) style.width = `${parseInt(width)}px`

      return style
    })
    const classes = computed(() => {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${props.size}`]: !!props.size,
          [`${prefixCls}-border`]: props.border,
          [`${prefixCls}-stripe`]: props.stripe,
          [`${prefixCls}-with-fixed-top`]: !!props.height,
          [`${prefixCls}-scrolling-left`]: horizontalScrollPosition.value === 'left',
          [`${prefixCls}-scrolling-middle`]: horizontalScrollPosition.value === 'middle',
          [`${prefixCls}-scrolling-right`]: horizontalScrollPosition.value === 'right',
          [`${prefixCls}-scrolling-none`]: horizontalScrollPosition.value === 'none'
        }
      ]
    })
    const bodyStyle = computed(() => {
      let style = {}
      const _bodyHeight = bodyHeight.value
      if (_bodyHeight !== 0) {
        const height = _bodyHeight
        if (props.height) {
          // @ts-ignore
          style.height = `${height}px`
        }
      }
      return style
    })
    const tableHeaderStyle = computed(() => {
      const _tableWidth = tableWidth.value
      let style = {}
      if (_tableWidth !== 0) {
        // @ts-ignore
        style.width = `${_tableWidth}px`
      }
      return style
    })
    const tableStyle = computed(() => {
      let style = {}
      const _tableWidth = tableWidth.value
      if (_tableWidth !== 0) {
        // @ts-ignore
        style.width = `${_tableWidth}px`
      }
      return style
    })
    const bodyViewStyle = computed(() => {
      let style = {}
      const _tableWidth = tableWidth.value
      if (_tableWidth !== 0) {
        // @ts-ignore
        style.width = `${_tableWidth}px`
        // @ts-ignore
        style.minWidth = '100%'
      }
      return style
    })

    let sortInstance = null

    // fixed table
    const isLeftFixed = computed(() => cloneColumns.value.some(col => col.fixed === 'left'))
    const isRightFixed = computed(() => cloneColumns.value.some(col => col.fixed === 'right'))
    const leftFixedColumns = computed(() =>
      cloneColumns.value.filter(column => column.fixed === 'left')
    )
    const rightFixedColumns = computed(() =>
      cloneColumns.value.filter(column => column.fixed === 'right')
    )

    const fixedTableStyle = computed(() => {
      let style = {}
      let width = 0
      leftFixedColumns.value.forEach(col => {
        // @ts-ignore
        if (col.fixed && col.fixed === 'left') width += col._width
      })
      // @ts-ignore
      style.width = `${width}px`
      // @ts-ignore
      style.left = '0'
      return style
    })
    const fixedRightTableStyle = computed(() => {
      let style = {}
      let width = 0
      rightFixedColumns.value.forEach(col => {
        // @ts-ignore
        if (col.fixed && col.fixed === 'right') width += col._width
      })
      // width += this.scrollBarWidth;
      // @ts-ignore
      style.width = `${width}px`
      // @ts-ignore
      style.right = '0'
      return style
    })
    const fixedBodyStyle = computed(() => {
      let style = {}
      const _bodyHeight = bodyViewportHeight.value || bodyHeight.value
      if (_bodyHeight !== 0) {
        // @ts-ignore
        style.height = `${_bodyHeight}px`
      }
      return style
    })
    const fixedHeaderClasses = computed(() => {
      return [
        `${prefixCls}-fixed-header`,
        { [`${prefixCls}-fixed-header-with-empty`]: !rebuildData.value.length }
      ]
    })

    // methods
    // 修改列，设置一个隐藏的 id，便于后面的多级表头寻找对应的列，否则找不到
    function makeColumnsId(columns, inheritedFixed = '') {
      return columns.map(item => {
        const currentFixed = item.fixed || inheritedFixed
        if (!item.fixed && currentFixed) {
          item.fixed = currentFixed
        }
        if ('children' in item) makeColumnsId(item.children, currentFixed)
        item.__id = getRandomStr(6)
        return item
      })
    }

    function makeColumns(cols) {
      const columns = []
      let left = []
      let right = []
      let center = []

      const collectLeafColumns = (list, inheritedFixed = '') => {
        list.forEach(column => {
          const currentFixed = column.fixed || inheritedFixed
          if (column.children) {
            collectLeafColumns(column.children, currentFixed)
          } else {
            const nextColumn = deepCopy(column)
            if (!nextColumn.fixed && currentFixed) {
              nextColumn.fixed = currentFixed
            }
            columns.push(nextColumn)
          }
        })
      }

      collectLeafColumns(cols)

      columns.forEach((column, index) => {
        column._index = index
        column._columnKey = columnKey++
        column.width = parseInt(column.width)
        column._width = column.width ? column.width : '' // update in handleResize()
        column._sortType = 'normal'
        if ('sortType' in column) {
          column._sortType = column.sortType
        }
        if (column.fixed && column.fixed === 'left') {
          // @ts-ignore
          left.push(column)
        } else if (column.fixed && column.fixed === 'right') {
          // @ts-ignore
          right.push(column)
        } else {
          // @ts-ignore
          center.push(column)
        }
      })
      const nextColumns = left.concat(center).concat(right)
      nextColumns.forEach((column, index) => {
        column._renderIndex = index
      })
      return nextColumns
    }

    // create a multiple table-head
    function makeColumnRows(fixedType, cols) {
      return convertToRows(cols, fixedType)
    }

    function makeDefaultExpandedRowKeys(data) {
      if (typeof props.rowKey !== 'string') return []

      const expandedKeys = [...props.defaultExpandedRowKeys]
      const innerExpandedKeys = collectExpandedTreeKeys(data, props.rowKey)

      return Array.from(new Set(expandedKeys.concat(innerExpandedKeys)))
    }

    function makeData() {
      const data = deepCopy(props.data)
      const nextSourceDataMap = {}
      let nextIndex = 0

      const annotateRow = (row, depth = 0, parentRow = null) => {
        const sourceRow = deepCopy(row)
        row._index = nextIndex++
        row._rowKey = generateId() + rowKey++

        if (isTreeMode.value && typeof props.rowKey === 'string') {
          row._depth = depth
          row._parentTreeKey = parentRow ? parentRow[props.rowKey] : null
          row._hasChildren = Array.isArray(row.children) && row.children.length > 0
        }

        nextSourceDataMap[row._index] = sourceRow
      }

      if (isTreeMode.value) {
        walkTreeRows(data, annotateRow)
      } else {
        data.forEach(row => annotateRow(row))
      }

      sourceDataMap.value = nextSourceDataMap

      return data
    }

    function makeObjData(dataRows, previousState = {}) {
      const data = {}
      const expandedKeySet = new Set(activeExpandedRowKeys.value)

      const createState = row => {
        const sourceRow = sourceDataMap.value[row._index] || row
        const newRow = deepCopy(sourceRow)
        const prevRow = previousState[row._index]

        newRow._isHover = prevRow?._isHover || false
        newRow._isDisabled =
          typeof prevRow?._isDisabled === 'boolean' ? prevRow._isDisabled : !!newRow._disabled
        newRow._isChecked =
          typeof prevRow?._isChecked === 'boolean' ? prevRow._isChecked : !!newRow._checked
        newRow._isHighlight =
          typeof prevRow?._isHighlight === 'boolean' ? prevRow._isHighlight : !!newRow._highlight
        newRow._isExpanded =
          isTreeMode.value && typeof props.rowKey === 'string'
            ? expandedKeySet.has(row[props.rowKey])
            : typeof prevRow?._isExpanded === 'boolean'
              ? prevRow._isExpanded
              : !!newRow._expanded

        data[row._index] = newRow
      }

      if (isTreeMode.value) {
        walkTreeRows(dataRows, createState)
      } else {
        dataRows.forEach(createState)
      }

      return data
    }

    function getSortColumnState() {
      let sortType = 'normal'
      let sortIndex = -1
      let isCustom = false

      for (let i = 0; i < cloneColumns.value.length; i++) {
        const columnType = cloneColumns.value[i]['_sortType']
        if (columnType !== 'normal') {
          sortType = columnType
          sortIndex = i
          isCustom = columnType === 'custom'
          break
        }
      }

      return {
        sortType,
        sortIndex,
        isCustom
      }
    }

    // 排序函数
    function compareRowData(a, b, type, index) {
      const key = cloneColumns.value[index].key
      const method = cloneColumns.value[index]['sortMethod']

      if (method) {
        // @ts-ignore
        return method(a[key], b[key], type)
      }

      if (type === 'asc') {
        return a[key] > b[key] ? 1 : -1
      }
      if (type === 'desc') {
        return a[key] < b[key] ? 1 : -1
      }

      return 0
    }

    function sortData(data, type, index) {
      if (isTreeMode.value) {
        return sortTreeRows(data, (a, b) => compareRowData(a, b, type, index))
      }

      data.sort((a, b) => compareRowData(a, b, type, index))
      return data
    }

    function makeDataWithSort(dataRows = makeData()) {
      let data = dataRows
      const { sortType, sortIndex, isCustom } = getSortColumnState()

      if (sortType !== 'normal' && !isCustom) {
        data = sortData(data, sortType, sortIndex)
      }

      if (isTreeMode.value && typeof props.rowKey === 'string') {
        return flattenVisibleTreeRows(data, {
          expandedKeySet: new Set(activeExpandedRowKeys.value),
          rowKey: props.rowKey
        })
      }

      return data
    }

    function syncTreeExpandedState(dataRows = rebuildData.value) {
      if (!isTreeMode.value || typeof props.rowKey !== 'string') return

      const expandedKeySet = new Set(activeExpandedRowKeys.value)
      const sourceRows = Array.isArray(dataRows) ? dataRows : []

      sourceRows.forEach(row => {
        if (objData.value[row._index]) {
          objData.value[row._index]._isExpanded = expandedKeySet.has(row[props.rowKey])
        }
      })
    }

    function rebuildTableData() {
      rebuildData.value = makeDataWithSort(preparedData.value)
      syncTreeExpandedState(rebuildData.value)
    }

    function prepareTableData(previousState = {}) {
      preparedData.value = makeData()
      objData.value = makeObjData(preparedData.value, previousState)
      rebuildTableData()
    }

    function getSourceRowByIndex(index) {
      const sourceRow = sourceDataMap.value[index]
      return sourceRow ? JSON.parse(JSON.stringify(sourceRow)) : null
    }

    function fixedHeader() {
      const height = props.height
      const maxHeight = props.maxHeight
      if (height || maxHeight) {
        nextTick(() => {
          const titleHeight = parseInt(getStyle(titleRef.value, 'height')) || 0
          const headerHeight = parseInt(getStyle(headerRef.value, 'height')) || 0
          const footerHeight = parseInt(getStyle(footerRef.value, 'height')) || 0
          if (height) {
            // @ts-ignore
            bodyHeight.value = height - titleHeight - headerHeight - footerHeight
          } else if (maxHeight) {
            // @ts-ignore
            bodyHeight.value = maxHeight - titleHeight - headerHeight - footerHeight
          }
          nextTick(() => fixedBody())
        })
      } else {
        bodyHeight.value = 0
        nextTick(() => fixedBody())
      }
    }

    function fixedBody() {
      const header = headerRef.value
      const tbody = tbodyRef.value
      const bodyWrapEl = getBodyWrapEl()
      if (header) {
        // @ts-ignore
        headerWidth.value = header.children[0].offsetWidth
        // @ts-ignore
        headerHeight.value = header.children[0].offsetHeight
      }
      if (!tbody || !props.data || props.data.length === 0) {
        showVerticalScrollBar.value = false
        showHorizontalScrollBar.value = false
        bodyViewportHeight.value = bodyHeight.value
      } else {
        const bodyEl = bodyWrapEl
        const clientHeight = bodyEl?.clientHeight || 0
        const clientWidth = bodyEl?.clientWidth || 0
        const scrollHeight = bodyEl?.scrollHeight || 0
        const scrollWidth = bodyEl?.scrollWidth || 0

        bodyViewportHeight.value = clientHeight || bodyHeight.value

        showHorizontalScrollBar.value = scrollWidth > clientWidth
        showVerticalScrollBar.value = bodyHeight.value ? scrollHeight > clientHeight : false

        if (showVerticalScrollBar.value && bodyEl) {
          bodyEl.classList.add('bin-table-overflowY')
        } else if (bodyEl) {
          bodyEl.classList.remove('bin-table-overflowY')
        }
        if (showHorizontalScrollBar.value && bodyEl) {
          bodyEl.classList.add('bin-table-overflowX')
        } else if (bodyEl) {
          bodyEl.classList.remove('bin-table-overflowX')
        }

        bodyScrollbarRef.value?.update?.()
      }

      syncHorizontalScrollPosition()
      nextTick(() => syncFixedRowHeights())
    }

    function getTableRows(section, fixedType = false) {
      const rowSelector = section === 'header' ? 'thead > tr' : 'tbody > tr'

      if (!fixedType) {
        if (section === 'header') {
          return headerRef.value
            ? (Array.from(headerRef.value.querySelectorAll(rowSelector)) as HTMLElement[])
            : []
        }

        // @ts-ignore
        const bodyEl = tbodyRef.value?.$el || tbodyRef.value
        return bodyEl ? (Array.from(bodyEl.querySelectorAll(rowSelector)) as HTMLElement[]) : []
      }

      const fixedSelector = fixedType === 'left' ? '.bin-table-fixed' : '.bin-table-fixed-right'
      const fixedRoot = containerRef.value?.querySelector(fixedSelector)

      return fixedRoot ? (Array.from(fixedRoot.querySelectorAll(rowSelector)) as HTMLElement[]) : []
    }

    function syncSectionRowHeights(section) {
      const rowGroups = [
        getTableRows(section),
        getTableRows(section, 'left'),
        getTableRows(section, 'right')
      ]
      const allRows = rowGroups.flat()

      allRows.forEach(row => {
        row.style.height = ''
        row.style.minHeight = ''
      })

      const maxLength = Math.max(...rowGroups.map(rows => rows.length), 0)

      for (let index = 0; index < maxLength; index++) {
        const rows = rowGroups.map(group => group[index]).filter(Boolean)
        if (rows.length < 2) continue

        const height = Math.max(...rows.map(row => row.offsetHeight))
        if (!height) continue

        rows.forEach(row => {
          row.style.height = `${height}px`
          row.style.minHeight = `${height}px`
        })
      }
    }

    function syncFixedRowHeights() {
      syncSectionRowHeights('header')
      syncSectionRowHeights('body')
    }

    function handleResize() {
      const cloneColumnsBuf = cloneColumns.value
      // @ts-ignore
      let offsetWidth = containerRef.value.offsetWidth
      let columnsWidthObj = {}
      let sumMinWidth = 0
      let hasWidthColumns = []
      let noWidthColumns = []
      let maxWidthColumns = []
      let noMaxWidthColumns = []
      cloneColumnsBuf.forEach(col => {
        // @ts-ignore
        if (col.width) {
          hasWidthColumns.push(col)
        } else {
          noWidthColumns.push(col)
          // @ts-ignore
          if (col.minWidth) {
            // @ts-ignore
            sumMinWidth += col.minWidth
          }
          // @ts-ignore
          if (col.maxWidth) {
            maxWidthColumns.push(col)
          } else {
            noMaxWidthColumns.push(col)
          }
        }
        // @ts-ignore
        col._width = null
      })

      // @ts-ignore
      let unUsableWidth = hasWidthColumns.map(cell => cell.width).reduce((a, b) => a + b, 0)
      let usableWidth =
        offsetWidth -
        unUsableWidth -
        sumMinWidth -
        1
      let usableLength = noWidthColumns.length
      let columnWidth = 0
      if (usableWidth > 0 && usableLength > 0) {
        // @ts-ignore
        columnWidth = parseInt(usableWidth / usableLength)
      }

      for (let i = 0; i < cloneColumnsBuf.length; i++) {
        const column = cloneColumnsBuf[i]
        // @ts-ignore
        let width = columnWidth + (column.minWidth ? column.minWidth : 0)
        // @ts-ignore
        if (column.width) {
          // @ts-ignore
          width = column.width
        } else {
          // @ts-ignore
          if (column._width) {
            // @ts-ignore
            width = column._width
          } else {
            // @ts-ignore
            if (column.minWidth > width) {
              // @ts-ignore
              width = column.minWidth
              // @ts-ignore
            } else if (column.maxWidth < width) {
              // @ts-ignore
              width = column.maxWidth
            }
            if (usableWidth > 0) {
              // @ts-ignore
              usableWidth -= width - (column.minWidth ? column.minWidth : 0)
              usableLength--
              if (usableLength > 0) {
                // @ts-ignore
                columnWidth = parseInt(usableWidth / usableLength)
              } else {
                columnWidth = 0
              }
            } else {
              columnWidth = 0
            }
          }
        }

        // @ts-ignore
        column._width = width

        // @ts-ignore
        columnsWidthObj[column._index] = {
          width: width
        }
      }

      if (usableWidth > 0) {
        usableLength = noMaxWidthColumns.length
        // @ts-ignore
        columnWidth = parseInt(usableWidth / usableLength)
        for (let i = 0; i < noMaxWidthColumns.length; i++) {
          const column = noMaxWidthColumns[i]
          // @ts-ignore
          let width = column._width + columnWidth
          if (usableLength > 1) {
            usableLength--
            usableWidth -= columnWidth
            // @ts-ignore
            columnWidth = parseInt(usableWidth / usableLength)
          } else {
            columnWidth = 0
          }

          // @ts-ignore
          column._width = width

          // @ts-ignore
          columnsWidthObj[column._index] = {
            width: width
          }
        }
      }
      tableWidth.value =
        // @ts-ignore
        cloneColumnsBuf.map(cell => cell._width).reduce((a, b) => a + b, 0) + 1
      columnsWidth.value = columnsWidthObj
      fixedHeader()
    }

    function GetOriginalIndex(_index) {
      // @ts-ignore
      return cloneColumns.value.findIndex(item => item._index === _index)
    }

    function handleSort(_index, type) {
      const index = GetOriginalIndex(_index)
      const columns = cloneColumns.value
      columns.forEach(col => {
        // @ts-ignore
        col._sortType = 'normal'
      })

      // @ts-ignore
      const key = columns[index].key
      // @ts-ignore
      columns[index]._sortType = type
      // @ts-ignore
      if (columns[index].sortable !== 'custom') {
        if (type === 'normal') {
          prepareTableData(objData.value)
        } else {
          rebuildTableData()
        }
      }

      emit('sort-change', {
        // @ts-ignore
        column: JSON.parse(JSON.stringify(allColumns.value[columns[index]._index])),
        key: key,
        order: type
      })
    }

    function handleMouseIn(_index) {
      if (props.disabledHover) return
      if (objData.value[_index]._isHover) return
      objData.value[_index]._isHover = true
    }

    function handleMouseOut(_index) {
      if (props.disabledHover) return
      objData.value[_index]._isHover = false
    }

    function getBodyWrapEl() {
      return bodyScrollbarRef.value?.wrapRef?.value || bodyScrollbarRef.value?.wrapRef || null
    }

    function syncHorizontalScrollPosition(scrollLeft?: number) {
      const bodyEl = getBodyWrapEl()
      if (!bodyEl) {
        horizontalScrollPosition.value = 'none'
        return
      }

      const clientWidth = bodyEl.clientWidth || 0
      const scrollWidth = bodyEl.scrollWidth || 0
      if (scrollWidth <= clientWidth + 1) {
        horizontalScrollPosition.value = 'none'
        return
      }

      const currentLeft = typeof scrollLeft === 'number' ? scrollLeft : bodyEl.scrollLeft || 0
      const maxScrollLeft = scrollWidth - clientWidth - 1

      if (currentLeft <= 0) {
        horizontalScrollPosition.value = 'left'
      } else if (currentLeft >= maxScrollLeft) {
        horizontalScrollPosition.value = 'right'
      } else {
        horizontalScrollPosition.value = 'middle'
      }
    }

    function handleBodyScroll({ scrollTop, scrollLeft }) {
      // @ts-ignore
      if (props.showHeader) headerRef.value.scrollLeft = scrollLeft
      // @ts-ignore
      if (isLeftFixed.value) fixedBodyRef.value.scrollTop = scrollTop
      // @ts-ignore
      if (isRightFixed.value) fixedRightBodyRef.value.scrollTop = scrollTop
      syncHorizontalScrollPosition(scrollLeft)
    }

    function handleFixedMousewheel(e) {
      let deltaY = e.deltaY
      if (!deltaY && e.detail) {
        deltaY = e.detail * 40
      }
      if (!deltaY && e.wheelDeltaY) {
        deltaY = -e.wheelDeltaY
      }
      if (!deltaY && e.wheelDelta) {
        deltaY = -e.wheelDelta
      }
      if (!deltaY) return
      const body = getBodyWrapEl()
      if (!body) return
      // @ts-ignore
      const currentScrollTop = body.scrollTop
      if (deltaY < 0 && currentScrollTop !== 0) {
        e.preventDefault()
      }
      // @ts-ignore
      if (deltaY > 0 && body.scrollHeight - body.clientHeight > currentScrollTop) {
        e.preventDefault()
      }
      // body.scrollTop += deltaY;
      let step = 0
      let timeId = setInterval(() => {
        step += 5
        if (deltaY > 0) {
          // @ts-ignore
          body.scrollTop += 2
        } else {
          // @ts-ignore
          body.scrollTop -= 2
        }
        if (step >= Math.abs(deltaY)) {
          clearInterval(timeId)
        }
      }, 5)
    }

    function handleMouseWheel(e) {
      const deltaX = e.deltaX
      const $body = getBodyWrapEl()
      if (!$body) return
      if (deltaX > 0) {
        // @ts-ignore
        $body.scrollLeft = $body.scrollLeft + 10
      } else {
        // @ts-ignore
        $body.scrollLeft = $body.scrollLeft - 10
      }
    }

    // 通用处理 highlightCurrentRow 和 clearCurrentRow
    function handleCurrentRow(type, _index) {
      let oldIndex = -1
      const _objData = objData.value
      for (let i in _objData) {
        if (_objData[i]._isHighlight) {
          oldIndex = parseInt(i)
          _objData[i]._isHighlight = false
        }
      }
      if (props.highlightRowCancel && _index === -1) {
        emit('current-change', null, null, _index)
        return
      }
      if (type === 'highlight') _objData[_index]._isHighlight = true
      const oldData = oldIndex < 0 ? null : getSourceRowByIndex(oldIndex)
      const newData = type === 'highlight' ? getSourceRowByIndex(_index) : null
      emit('current-change', newData, oldData, _index)
    }

    function highlightCurrentRow(_index) {
      if (!props.highlightRow || objData.value[_index]._isHighlight) {
        if (props.highlightRowCancel) handleCurrentRow('highlight', -1)
        return
      }
      handleCurrentRow('highlight', _index)
    }

    function clearCurrentRow() {
      if (!props.highlightRow) return
      // @ts-ignore
      handleCurrentRow('clear')
    }

    function clickCurrentRow(_index) {
      const row = getSourceRowByIndex(_index)
      if (!row) return
      highlightCurrentRow(_index)
      emit('row-click', row, _index)
    }

    function dblclickCurrentRow(_index) {
      const row = getSourceRowByIndex(_index)
      if (!row) return
      highlightCurrentRow(_index)
      emit('row-dblclick', row, _index)
    }

    function getSelection() {
      let selectionIndexes = []
      const _objData = objData.value
      for (let i in _objData) {
        // @ts-ignore
        if (_objData[i]._isChecked) selectionIndexes.push(parseInt(i))
      }
      return selectionIndexes
        .sort((a, b) => a - b)
        .map(index => getSourceRowByIndex(index))
        .filter(Boolean)
    }

    function toggleSelect(_index) {
      let data = {}
      const _objData = objData.value
      for (let i in _objData) {
        if (parseInt(i) === _index) {
          data = _objData[i]
          break
        }
      }
      // @ts-ignore
      const status = !data._isChecked

      _objData[_index]._isChecked = status

      const selection = getSelection()
      emit(
        status ? 'select' : 'select-cancel',
        selection,
        getSourceRowByIndex(_index)
      )
      emit('selection-change', selection)
    }

    function toggleExpand(_index) {
      let data = {}
      const _objData = objData.value
      for (let i in _objData) {
        if (parseInt(i) === _index) {
          data = _objData[i]
          break
        }
      }
      // @ts-ignore
      const status = !data._isExpanded
      const row = getSourceRowByIndex(_index)

      if (isTreeMode.value && typeof props.rowKey === 'string') {
        const currentRow = rebuildData.value.find(item => item._index === _index)
        if (!currentRow || !currentRow._hasChildren) return

        const nextExpandedRowKeys = [...activeExpandedRowKeys.value]
        const treeKey = currentRow[props.rowKey]
        const currentKeyIndex = nextExpandedRowKeys.indexOf(treeKey)

        if (status && currentKeyIndex === -1) {
          nextExpandedRowKeys.push(treeKey)
        } else if (!status && currentKeyIndex > -1) {
          nextExpandedRowKeys.splice(currentKeyIndex, 1)
        }

        if (!Array.isArray(props.expandedRowKeys)) {
          internalExpandedRowKeys.value = nextExpandedRowKeys
        }
        // @ts-ignore
        data._isExpanded = status
        emit('update:expandedRowKeys', nextExpandedRowKeys)
        emit('expand-change', row, status, nextExpandedRowKeys)
        rebuildTableData()
      } else {
        // @ts-ignore
        data._isExpanded = status
        emit('expand', row, status)
      }

      if (props.height || props.maxHeight) {
        nextTick(() => fixedBody())
      }
    }

    function selectAll(status) {
      for (const data of rebuildData.value) {
        const _objData = objData.value
        if (_objData[data._index]._isDisabled) {
          continue
        }
        _objData[data._index]._isChecked = status
      }
      const selection = getSelection()
      if (status) {
        emit('select-all', selection)
      } else {
        emit('select-all-cancel', selection)
      }
      emit('selection-change', selection)
    }

    function dragAndDrop(list, newIndex, oldIndex) {
      emit('update:data', list)
      emit('drag-drop', list, newIndex, oldIndex)
    }

    provide('BTable', {
      props,
      isTreeMode,
      showVerticalScrollBar,
      scrollBarWidth,
      objData,
      handleSort,
      handleMouseIn,
      handleMouseOut,
      handleCurrentRow,
      highlightCurrentRow,
      clickCurrentRow,
      dblclickCurrentRow,
      slots,
      toggleSelect,
      selectAll,
      toggleExpand
    })

    prepareTableData()

    // 钩子函数
    onMounted(() => {
      handleResize()
      on(window, 'resize', handleResize)
      if (containerRef.value) {
        // @ts-ignore
        addResizeListener(containerRef.value.parentElement, handleResize)
      }
      nextTick(() => {
        read.value = true
      })
      if (isDraggable.value) {
        setSort()
      }
    })

    // 初始化拖拽
    function setSort() {
      if (!isDraggable.value) return
      // @ts-ignore
      if (sortInstance) sortInstance.destroy()
      // @ts-ignore
      const el = tbodyRef.value.$el.querySelector('.bin-table-tbody')
      if (!el) {
        console.error('dom width class bin-table-tbody is not find')
        return
      }
      // @ts-ignore
      sortInstance = Sortable.create(el, {
        animation: 150,
        ghostClass: 'bin-table-ghost-class',
        handle: props.dragHandle,
        onUpdate: ({ newIndex, oldIndex }) => {
          const $li = el.children[newIndex]
          const $oldLi = el.children[oldIndex]
          // 先删除移动的节点
          el.removeChild($li)
          // 再插入移动的节点到原有节点，还原了移动的操作
          if (newIndex > oldIndex) {
            el.insertBefore($li, $oldLi)
          } else {
            el.insertBefore($li, $oldLi.nextSibling)
          }
          // 更新items数组
          const targetRow = cloneData.value.splice(oldIndex, 1)[0]
          cloneData.value.splice(newIndex, 0, targetRow)
        },
        onEnd: ({ newIndex, oldIndex }) => {
          // 下一个tick就会走patch更新
          dragAndDrop(cloneData.value, newIndex, oldIndex)
        }
      })
    }

    onBeforeUnmount(() => {
      // @ts-ignore
      if (sortInstance) sortInstance.destroy()
      off(window, 'resize', handleResize)
      if (containerRef.value) {
        // @ts-ignore
        removeResizeListener(containerRef.value.parentElement, handleResize)
      }
    })

    watch(
      () => props.data,
      newData => {
        // 缓存原始list-data，用于拖拽时更新数据
        const oldDataLen = rebuildData.value.length
        if (!Array.isArray(props.expandedRowKeys)) {
          internalExpandedRowKeys.value = makeDefaultExpandedRowKeys(newData)
        }
        if (!oldDataLen) fixedHeader()
        cloneData.value = deepCopy(newData)
        prepareTableData()
        nextTick(() => {
          handleResize()
        })
      },
      { deep: true }
    )

    watch(
      () => props.columns,
      newColumns => {
        const colsWithId = makeColumnsId(deepCopy(newColumns))
        allColumns.value = getAllColumns(colsWithId)
        cloneColumns.value = makeColumns(colsWithId)
        columnRows.value = makeColumnRows(false, colsWithId)
        leftFixedColumnRows.value = makeColumnRows('left', colsWithId)
        rightFixedColumnRows.value = makeColumnRows('right', colsWithId)
        rebuildTableData()
        nextTick(() => {
          handleResize()
        })
      },
      { deep: true }
    )

    watch(
      () => props.expandedRowKeys,
      newKeys => {
        if (!Array.isArray(newKeys)) return
        rebuildTableData()
        nextTick(() => {
          fixedBody()
        })
      },
      { deep: true }
    )

    watch(
      () => [props.rowKey, props.expandColumnKey],
      () => {
        if (!Array.isArray(props.expandedRowKeys)) {
          internalExpandedRowKeys.value = makeDefaultExpandedRowKeys(props.data)
        }
        prepareTableData()
        nextTick(() => {
          handleResize()
        })
      }
    )

    watch(
      () => [
        props.height,
        props.maxHeight,
        showHorizontalScrollBar.value,
        showVerticalScrollBar.value
      ],
      () => {
        nextTick(() => {
          handleResize()
        })
      }
    )

    watch(
      () => isDraggable.value,
      enabled => {
        nextTick(() => {
          if (enabled) {
            setSort()
          } else if (sortInstance) {
            sortInstance.destroy()
            sortInstance = null
          }
        })
      }
    )

    return {
      containerRef,
      handleResize,
      titleRef,
      headerRef,
      bodyScrollbarRef,
      tbodyRef,
      footerRef,
      fixedBodyRef,
      fixedRightBodyRef,
      // data
      read,
      cloneColumns,
      columnRows,
      headerWidth,
      headerHeight,
      objData,
      bodyHeight,
      columnsWidth,
      tableWidth,
      rebuildData,
      cloneData,
      showVerticalScrollBar,
      scrollBarWidth,
      hasData,
      isDraggable,
      // computed
      wrapClasses,
      wrapStyles,
      classes,
      tableHeaderStyle,
      tableStyle,
      bodyViewStyle,
      bodyStyle,
      isLeftFixed,
      isRightFixed,
      leftFixedColumns,
      rightFixedColumns,
      leftFixedColumnRows,
      rightFixedColumnRows,
      fixedTableStyle,
      fixedRightTableStyle,
      fixedHeaderClasses,
      fixedBodyStyle,
      handleSort,
      handleMouseIn,
      handleMouseOut,
      handleCurrentRow,
      highlightCurrentRow,
      handleMouseWheel,
      handleBodyScroll,
      handleFixedMousewheel,
      clickCurrentRow,
      clearCurrentRow,
      selectAll,
      getSelection,
      toggleSelect,
      toggleExpand
    }
  }
})
</script>
