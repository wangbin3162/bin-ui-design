<template>
  <tr :class="rowClasses(row._index)">
    <slot></slot>
  </tr>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    row: Object,
    // eslint-disable-next-line vue/require-default-prop
    prefixCls: String,
    draggable: Boolean
  },
  setup(props) {
    const parentRef = inject('BTable', {})

    function rowClsName(_index) {
      //@ts-ignore
      return parentRef.props.rowClassName(parentRef.objData.value[_index], _index)
    }

    function rowClasses(_index) {
      //@ts-ignore
      const obj = parentRef.objData.value
      if (props.draggable) {
        return [
          `${props.prefixCls}-row`,
          rowClsName(_index),
          {
            [`${props.prefixCls}-row-highlight`]: obj[_index] && obj[_index]._isHighlight
          }
        ]
      }
      return [
        `${props.prefixCls}-row`,
        rowClsName(_index),
        {
          [`${props.prefixCls}-row-highlight`]: obj[_index] && obj[_index]._isHighlight,
          [`${props.prefixCls}-row-hover`]: obj[_index] && obj[_index]._isHover
        }
      ]
    }

    return {
      rowClasses
    }
  }
})
</script>
