<template>
  <div ref="cell" :class="classes" :style="cellStyle">
    <template v-if="renderType === 'index'">
      <span>{{ column.indexMethod ? column.indexMethod(row) : naturalIndex + 1 }}</span>
    </template>
    <template v-else-if="renderType === 'selection'">
      <b-checkbox
        :model-value="checked"
        :disabled="disabled"
        @click.stop
        @change="toggleSelect"
      ></b-checkbox>
    </template>
    <template v-else-if="renderType === 'expand' && !row._disableExpand">
      <div :class="expandCls" @click="toggleExpand">
        <i class="b-iconfont b-icon-right"></i>
      </div>
    </template>
    <div v-else-if="isTreeCell" :class="treeCellCls">
      <span :class="`${prefixCls}-tree-indent`" :style="treeIndentStyle"></span>
      <span :class="treeExpandCls" @click.stop="toggleExpand">
        <i v-if="isTreeExpandable" class="b-iconfont b-icon-caret-right"></i>
      </span>
      <template v-if="renderType === 'html'">
        <span v-html="row[column.key]"></span>
      </template>
      <template v-else-if="renderType === 'normal'">
        <template v-if="column.tooltip && tooltipTheme">
          <b-tooltip append-to-body :theme="tooltipTheme">
            <span class="bin-table-cell-tooltip-content" :style="tooltipContentStyle">
              {{ row[column.key] }}
            </span>
            <template #content>
              <div>{{ row[column.key] }}</div>
            </template>
          </b-tooltip>
        </template>
        <span
          v-else-if="column.tooltip && !tooltipTheme"
          class="bin-table-cell-tooltip-content"
          :style="tooltipContentStyle"
          :title="row[column.key]"
        >
          {{ row[column.key] }}
        </span>
        <span v-else>{{ row[column.key] }}</span>
      </template>
      <table-expand
        v-else-if="renderType === 'render'"
        :row="row"
        :column="column"
        :index="index"
        :render="column.render"
      ></table-expand>
      <table-slot
        v-else-if="renderType === 'slot'"
        :row="row"
        :column="column"
        :index="index"
      ></table-slot>
    </div>
    <template v-else-if="renderType === 'html'">
      <span v-html="row[column.key]"></span>
    </template>
    <template v-else-if="renderType === 'normal'">
      <template v-if="column.tooltip && tooltipTheme">
        <b-tooltip append-to-body :theme="tooltipTheme">
          <span class="bin-table-cell-tooltip-content" :style="tooltipContentStyle">
            {{ row[column.key] }}
          </span>
          <template #content>
            <div>{{ row[column.key] }}</div>
          </template>
        </b-tooltip>
      </template>
      <span
        v-else-if="column.tooltip && !tooltipTheme"
        class="bin-table-cell-tooltip-content"
        :style="tooltipContentStyle"
        :title="row[column.key]"
      >
        {{ row[column.key] }}
      </span>
      <span v-else>{{ row[column.key] }}</span>
    </template>
    <table-expand
      v-else-if="renderType === 'render'"
      :row="row"
      :column="column"
      :index="index"
      :render="column.render"
    ></table-expand>
    <table-slot
      v-else-if="renderType === 'slot'"
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
import { computed, defineComponent, inject, ref } from 'vue'
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
    //@ts-ignore
    const isTreeCell = computed(
      () => TableRoot.isTreeMode?.value && TableRoot.props.expandColumnKey === props.column.key
    )
    const isTreeExpandable = computed(() => !!props.row?._hasChildren)
    const treeIndentStyle = computed(() => ({
      width: `${(props.row?._depth || 0) * TableRoot.props.indentSize}px`
    }))
    const tooltipContentStyle = computed(() => {
      if (!props.column?.tooltip) return undefined

      return {
        width: '100%'
      }
    })
    const cellStyle = computed(() => {
      if (!props.column?.tooltip) return undefined

      const columnWidth = props.column?.width || TableRoot.columnsWidth?.value?.[props.column?._index]?.width
      if (!columnWidth) return undefined

      const horizontalPadding = 32
      const treeIndent = isTreeCell.value ? (props.row?._depth || 0) * TableRoot.props.indentSize : 0
      const treeToggle = isTreeCell.value ? 20 : 0
      const availableWidth = Number(columnWidth) - horizontalPadding - treeIndent - treeToggle

      return {
        width: `${Math.max(availableWidth, 0)}px`
      }
    })

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
      if (isTreeCell.value && !isTreeExpandable.value) return
      //@ts-ignore
      TableRoot.toggleExpand(props.index)
    }

    return {
      //@ts-ignore
      tooltipTheme: TableRoot.props.tooltipTheme,
      renderType,
      isTreeCell,
      isTreeExpandable,
      cellStyle,
      treeIndentStyle,
      tooltipContentStyle,
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
          [`${this.prefixCls}-cell-with-tree`]: this.isTreeCell,
          [`${this.prefixCls}-cell-with-selection`]: this.renderType === 'selection'
        }
      ]
    },
    expandCls() {
      return [
        `${this.prefixCls}-cell-expand`,
        { [`${this.prefixCls}-cell-expand-expanded`]: this.expanded }
      ]
    },
    treeCellCls() {
      return [`${this.prefixCls}-tree-cell`]
    },
    treeExpandCls() {
      return [
        `${this.prefixCls}-tree-toggle`,
        {
          [`${this.prefixCls}-tree-toggle-expanded`]: this.expanded,
          [`${this.prefixCls}-tree-toggle-disabled`]: !this.isTreeExpandable
        }
      ]
    }
  }
})
</script>
