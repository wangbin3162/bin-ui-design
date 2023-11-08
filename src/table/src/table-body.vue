<template>
  <table cellspacing="0" cellpadding="0" border="0" :style="styleObject">
    <colgroup>
      <col
        v-for="(column, index) in columns"
        :key="'group-' + index"
        :width="setCellWidth(column)"
      />
    </colgroup>
    <tbody v-if="!isExpandModel" :class="[prefixCls + '-tbody']">
      <!--v-for的内容需要保持只有一个元素，这样拖拽的时候才会更新正确的dom-->
      <template v-for="(row, index) in data" :key="rowKey ? row._rowKey : row._index">
        <table-tr
          :draggable="draggable"
          :row="row"
          :prefix-cls="prefixCls"
          :row-key="row._rowKey"
          :class="rowExpanded(row._index) ? { [prefixCls + '-expanded-hidden']: fixed } : null"
          @mouseenter.stop="handleMouseIn(row._index)"
          @mouseleave.stop="handleMouseOut(row._index)"
          @click="clickCurrentRow(row._index)"
          @dblclick.stop="dblclickCurrentRow(row._index)"
        >
          <template v-for="(column, colIndex) in columns">
            <td
              v-if="showWithSpan(row, column, index, colIndex)"
              :key="column._columnKey"
              :class="alignCls(column, row)"
              v-bind="getSpan(row, column, index, colIndex)"
            >
              <table-cell
                :key="column._columnKey"
                :fixed="fixed"
                :prefix-cls="prefixCls"
                :row="row"
                :column="column"
                :natural-index="index"
                :index="row._index"
                :checked="rowChecked(row._index)"
                :disabled="rowDisabled(row._index)"
                :expanded="rowExpanded(row._index)"
              ></table-cell>
            </td>
          </template>
        </table-tr>
      </template>
    </tbody>
    <!--需要展开行的模式无法拖拽排序-->
    <tbody v-else :class="[prefixCls + '-tbody']">
      <template v-for="(row, index) in data" :key="rowKey ? row._rowKey : row._index">
        <table-tr
          :row="row"
          :prefix-cls="prefixCls"
          @mouseenter.stop="handleMouseIn(row._index)"
          @mouseleave.stop="handleMouseOut(row._index)"
          @click="clickCurrentRow(row._index)"
          @dblclick.stop="dblclickCurrentRow(row._index)"
        >
          <template v-for="(column, colIndex) in columns">
            <td
              v-if="showWithSpan(row, column, index, colIndex)"
              :key="column._columnKey"
              :class="alignCls(column, row)"
              v-bind="getSpan(row, column, index, colIndex)"
            >
              <table-cell
                :key="column._columnKey"
                :fixed="fixed"
                :prefix-cls="prefixCls"
                :row="row"
                :column="column"
                :natural-index="index"
                :index="row._index"
                :checked="rowChecked(row._index)"
                :disabled="rowDisabled(row._index)"
                :expanded="rowExpanded(row._index)"
              ></table-cell>
            </td>
          </template>
        </table-tr>
        <tr
          v-if="rowExpanded(row._index)"
          :key="row._index"
          :class="{ [prefixCls + '-expanded-hidden']: fixed }"
        >
          <td :colspan="columns.length" :class="prefixCls + '-expanded-cell'">
            <expand
              :key="rowKey ? row._rowKey : index"
              :row="row"
              :render="expandRender"
              :index="row._index"
            ></expand>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import TableTr from './table-tr.vue'
import TableCell from './cell.vue'
import Expand from './main/expand.js'
import { useMixin } from './main/mixin'
import { computed, defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'TableBody',
  components: { TableCell, Expand, TableTr },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    prefixCls: String,
    // eslint-disable-next-line vue/require-default-prop
    styleObject: Object,
    // eslint-disable-next-line vue/require-default-prop
    columns: Array,
    // eslint-disable-next-line vue/require-default-prop
    data: Array, // rebuildData
    // eslint-disable-next-line vue/require-default-prop
    objData: Object,
    // eslint-disable-next-line vue/require-default-prop
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const parentRef = inject('BTable', {})
    const { alignCls, setCellWidth } = useMixin(props)

    const expandRender = computed(() => {
      let render = function () {
        return ''
      }
      const _column = props.columns
      //@ts-ignore
      for (let i = 0; i < _column.length; i++) {
        //@ts-ignore
        const column = _column[i]
        //@ts-ignore
        if (column.type && column.type === 'expand') {
          //@ts-ignore
          if (column.render) render = column.render
        }
      }
      return render
    })
    //@ts-ignore
    const isExpandModel = computed(() => props.columns.some(v => v.type === 'expand'))

    function getSpan(row, column, rowIndex, columnIndex) {
      const fn = parentRef.props.mergeMethod
      if (typeof fn === 'function') {
        const result = fn({ row, column, rowIndex, columnIndex })
        let rowspan = 1
        let colspan = 1
        if (Array.isArray(result)) {
          rowspan = result[0]
          colspan = result[1]
        } else if (typeof result === 'object') {
          rowspan = result.rowspan
          colspan = result.colspan
        }
        return {
          rowspan,
          colspan
        }
      } else {
        return {}
      }
    }

    function showWithSpan(row, column, rowIndex, columnIndex) {
      const result = getSpan(row, column, rowIndex, columnIndex)
      return !(
        ('rowspan' in result && result.rowspan === 0) ||
        ('colspan' in result && result.colspan === 0)
      )
    }

    function rowChecked(_index) {
      //@ts-ignore
      const row = props.objData[_index]
      return row && row._isChecked
    }

    function rowDisabled(_index) {
      //@ts-ignore
      const row = props.objData[_index]
      return row && row._isDisabled
    }

    function rowExpanded(_index) {
      //@ts-ignore
      const row = props.objData[_index]
      return row && row._isExpanded
    }

    function handleMouseIn(_index) {
      //@ts-ignore
      parentRef.handleMouseIn(_index)
    }

    function handleMouseOut(_index) {
      //@ts-ignore
      parentRef.handleMouseOut(_index)
    }

    function clickCurrentRow(_index) {
      //@ts-ignore
      parentRef.clickCurrentRow(_index)
    }

    function dblclickCurrentRow(_index) {
      //@ts-ignore
      parentRef.dblclickCurrentRow(_index)
    }

    return {
      setCellWidth,
      alignCls,
      expandRender,
      isExpandModel,
      getSpan,
      showWithSpan,
      rowChecked,
      rowDisabled,
      rowExpanded,
      handleMouseIn,
      handleMouseOut,
      clickCurrentRow,
      dblclickCurrentRow
    }
  }
})
</script>
