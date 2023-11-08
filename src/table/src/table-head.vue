<template>
  <table cellspacing="0" cellpadding="0" border="0" :style="styles">
    <colgroup>
      <col v-for="(column, index) in columns" :key="index" :width="setCellWidth(column)" />
      <col v-if="showVerticalScrollBar" :width="scrollBarWidth" />
    </colgroup>
    <thead>
      <tr v-for="(cols, rowIndex) in headRows" :key="rowIndex">
        <th
          v-for="(column, index) in cols"
          :key="index"
          :colspan="column.colSpan"
          :rowspan="column.rowSpan"
          :class="alignCls(column)"
        >
          <div :class="cellClasses(column)">
            <template v-if="column.type === 'expand'">
              <span v-if="!column.renderHeader">{{ column.title || '' }}</span>
              <render-header
                v-else
                :render="column.renderHeader"
                :column="column"
                :index="index"
              ></render-header>
            </template>
            <template v-else-if="column.type === 'selection'">
              <b-checkbox
                :indeterminate="indeterminate"
                :model-value="isSelectAll"
                :disabled="!data.length"
                @change="selectAll"
              ></b-checkbox>
            </template>
            <template v-else>
              <span
                v-if="!column.renderHeader"
                :class="{ [prefixCls + '-cell-sort']: column.sortable }"
                @click="handleSortByHead(getColumn(rowIndex, index)._index)"
              >
                {{ column.title || '#' }}
              </span>
              <render-header
                v-else
                :render="column.renderHeader"
                :column="column"
                :index="index"
              ></render-header>
              <span v-if="column.sortable" :class="[prefixCls + '-sort']">
                <i
                  class="b-iconfont b-icon-caret-up"
                  :class="{ on: getColumn(rowIndex, index)._sortType === 'asc' }"
                  @click="handleSort(getColumn(rowIndex, index)._index, 'asc')"
                ></i>
                <i
                  class="b-iconfont b-icon-caret-down"
                  :class="{ on: getColumn(rowIndex, index)._sortType === 'desc' }"
                  @click="handleSort(getColumn(rowIndex, index)._index, 'desc')"
                ></i>
              </span>
            </template>
          </div>
        </th>
        <th
          v-if="showVerticalScrollBar && rowIndex === 0"
          :class="scrollBarCellClass()"
          :rowspan="headRows.length"
        ></th>
      </tr>
    </thead>
  </table>
</template>

<script lang="ts">
import renderHeader from './main/header'
import { computed, defineComponent, inject } from 'vue'
import { useMixin } from './main/mixin'
import { BCheckbox } from '../../checkbox'

export default defineComponent({
  name: 'TableHead',
  components: { BCheckbox, renderHeader },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    prefixCls: String,
    // eslint-disable-next-line vue/require-default-prop
    styleObject: Object,
    // eslint-disable-next-line vue/require-default-prop
    columns: Array,
    // eslint-disable-next-line vue/require-default-prop
    objData: Object,
    // eslint-disable-next-line vue/require-default-prop
    data: Array, // rebuildData
    // eslint-disable-next-line vue/require-default-prop
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    // eslint-disable-next-line vue/require-default-prop
    columnRows: Array,
    // eslint-disable-next-line vue/require-default-prop
    fixedColumnRows: Array
  },
  setup(props) {
    const parentRef = inject('BTable', {})

    const { alignCls, setCellWidth } = useMixin(props)

    const isSelectAll = computed(() => {
      let flag = true
      const data = props.data
      const objData = props.objData
      //@ts-ignore
      if (!data.length) flag = false
      //@ts-ignore
      if (!data.find(item => !item._disabled)) flag = false // #1751
      //@ts-ignore
      for (let i = 0; i < data.length; i++) {
        //@ts-ignore
        if (!objData[data[i]._index]._isChecked && !objData[data[i]._index]._isDisabled) {
          flag = false
          break
        }
      }
      return flag
    })
    const indeterminate = computed(() => {
      let flag = false
      const data = props.data
      const objData = props.objData
      //@ts-ignore
      if (!data.length) flag = false
      //@ts-ignore
      if (!data.find(item => !item._disabled)) flag = false // #1751
      //@ts-ignore
      for (let i = 0; i < data.length; i++) {
        //@ts-ignore
        if (objData[data[i]._index]._isChecked && !objData[data[i]._index]._isDisabled) {
          flag = true
          break
        }
      }
      if (isSelectAll.value) flag = false
      return flag
    })
    const headRows = computed(() => {
      //@ts-ignore
      const isGroup = props.columnRows.length > 1
      if (isGroup) {
        return props.fixed ? props.fixedColumnRows : props.columnRows
      } else {
        return [props.columns]
      }
    })

    function cellClasses(column) {
      return [
        `${props.prefixCls}-cell`,
        {
          [`${props.prefixCls}-hidden`]:
            !props.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right'),
          [`${props.prefixCls}-cell-with-selection`]: column.type === 'selection'
        }
      ]
    }

    function selectAll() {
      const status = !isSelectAll.value
      //@ts-ignore
      parentRef.selectAll(status)
    }

    function scrollBarCellClass() {
      let hasRightFixed = false
      const head = headRows.value
      for (let i in head) {
        for (let j in head[i]) {
          if (head[i][j].fixed === 'right') {
            hasRightFixed = true
            break
          }
          if (hasRightFixed) break
        }
      }
      return [
        {
          [`${this.prefixCls}-hidden`]: hasRightFixed
        }
      ]
    }

    // 因为表头嵌套不是深拷贝，所以没有 _ 开头的方法，在 isGroup 下用此列
    function getColumn(rowIndex, index) {
      //@ts-ignore
      const isGroup = props.columnRows.length > 1
      if (isGroup) {
        //@ts-ignore
        const id = headRows.value[rowIndex][index].__id
        //@ts-ignore
        return props.columns.filter(item => item.__id === id)[0]
      } else {
        //@ts-ignore
        return headRows.value[rowIndex][index]
      }
    }

    function handleSortByHead(index) {
      // 在固定列时，寻找正确的 index
      //@ts-ignore
      const column = props.columns.find(item => item._index === index)
      //@ts-ignore
      if (column.sortable) {
        //@ts-ignore
        const type = column._sortType
        if (type === 'normal') {
          handleSort(index, 'asc')
        } else if (type === 'asc') {
          handleSort(index, 'desc')
        } else {
          handleSort(index, 'normal')
        }
      }
    }

    function handleSort(index, type) {
      // 在固定列时，寻找正确的 index
      //@ts-ignore
      const column = props.columns.find(item => item._index === index)
      //@ts-ignore
      const _index = column._index

      //@ts-ignore
      if (column._sortType === type) {
        type = 'normal'
      }
      //@ts-ignore
      parentRef.handleSort(_index, type)
    }

    return {
      //@ts-ignore
      showVerticalScrollBar: parentRef.showVerticalScrollBar,
      //@ts-ignore
      scrollBarWidth: parentRef.scrollBarWidth,
      isSelectAll,
      indeterminate,
      headRows,
      setCellWidth,
      alignCls,
      scrollBarCellClass,
      cellClasses,
      selectAll,
      getColumn,
      handleSortByHead,
      handleSort
    }
  },
  computed: {
    styles() {
      const style = Object.assign({}, this.styleObject)
      const width = parseInt(this.styleObject.width)
      style.width = `${width}px`
      return style
    }
  }
})
</script>
