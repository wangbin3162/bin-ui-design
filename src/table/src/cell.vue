<template>
  <div ref="cell" :class="classes">
    <template v-if="renderType === 'index'">
      <span>{{ column.indexMethod ? column.indexMethod(row) : naturalIndex + 1 }}</span>
    </template>
    <template v-if="renderType === 'selection'">
      <b-checkbox
        :model-value="checked"
        :disabled="disabled"
        @click.stop
        @change="toggleSelect"
      ></b-checkbox>
    </template>
    <template v-if="renderType === 'html'">
      <span v-html="row[column.key]"></span>
    </template>
    <template v-if="renderType === 'normal'">
      <template v-if="column.tooltip && tooltipTheme">
        <b-tooltip class="bin-table-cell-tooltip-content" append-to-body :theme="tooltipTheme">
          <span>{{ row[column.key] }}</span>
          <template #content>
            <div>{{ row[column.key] }}</div>
          </template>
        </b-tooltip>
      </template>
      <span
        v-else-if="column.tooltip && !tooltipTheme"
        class="bin-table-cell-tooltip-content"
        :title="row[column.key]"
      >
        {{ row[column.key] }}
      </span>
      <span v-else>{{ row[column.key] }}</span>
    </template>
    <template v-if="renderType === 'expand' && !row._disableExpand">
      <div :class="expandCls" @click="toggleExpand">
        <i class="b-iconfont b-icon-right"></i>
      </div>
    </template>
    <table-expand
      v-if="renderType === 'render'"
      :row="row"
      :column="column"
      :index="index"
      :render="column.render"
    ></table-expand>
    <table-slot
      v-if="renderType === 'slot'"
      :row="row"
      :column="column"
      :index="index"
    ></table-slot>
  </div>
</template>

<script lang="ts">
import TableExpand from './main/expand'
import TableSlot from './main/slot'
import { BCheckbox } from '../../checkbox'
import { defineComponent, inject, ref } from 'vue'
import { BTooltip } from '../../tooltip'

export default defineComponent({
  name: 'TableCell',
  components: { BTooltip, BCheckbox, TableExpand, TableSlot },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    prefixCls: String,
    // eslint-disable-next-line vue/require-default-prop
    row: Object,
    // eslint-disable-next-line vue/require-default-prop
    column: Object,
    // eslint-disable-next-line vue/require-default-prop
    naturalIndex: Number, // 重建数据索引
    // eslint-disable-next-line vue/require-default-prop
    index: Number, // _index of data
    checked: Boolean,
    disabled: Boolean,
    expanded: Boolean,
    fixed: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const tooltipContentRef = ref(null)
    const TableRoot = inject('BTable', {})
    const renderType = ref(getRenderType())

    function getRenderType() {
      const column = props.column
      //@ts-ignore
      if (column.type === 'index') {
        return 'index'
        //@ts-ignore
      } else if (column.type === 'selection') {
        return 'selection'
        //@ts-ignore
      } else if (column.type === 'html') {
        return 'html'
        //@ts-ignore
      } else if (column.type === 'expand') {
        return 'expand'
        //@ts-ignore
      } else if (column.render) {
        return 'render'
        //@ts-ignore
      } else if (column.slot) {
        return 'slot'
      } else {
        return 'normal'
      }
    }

    function toggleSelect() {
      //@ts-ignore
      TableRoot.toggleSelect(props.index)
    }

    function toggleExpand() {
      //@ts-ignore
      TableRoot.toggleExpand(props.index)
    }

    return {
      //@ts-ignore
      tooltipTheme: TableRoot.props.tooltipTheme,
      renderType,
      tooltipContentRef,
      toggleSelect,
      toggleExpand
    }
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]:
            !this.fixed &&
            this.column.fixed &&
            (this.column.fixed === 'left' || this.column.fixed === 'right'),
          [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false,
          [`${this.prefixCls}-cell-tooltip`]: this.column.tooltip || false,
          [`${this.prefixCls}-cell-with-expand`]: this.renderType === 'expand',
          [`${this.prefixCls}-cell-with-selection`]: this.renderType === 'selection'
        }
      ]
    },
    expandCls() {
      return [
        `${this.prefixCls}-cell-expand`,
        { [`${this.prefixCls}-cell-expand-expanded`]: this.expanded }
      ]
    }
  }
})
</script>
