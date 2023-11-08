export const treeProps = {
  data: {
    type: Array,
    default: () => {
      return []
    }
  },
  multiple: Boolean,
  showCheckbox: Boolean,
  checkStrictly: Boolean,
  // 当开启 showCheckbox 时，如果开启 checkDirectly，select 将强制转为 check 事件
  checkDirectly: Boolean,
  emptyText: {
    type: String,
    default: '暂无数据'
  },
  titleKey: {
    type: String,
    default: 'title'
  },
  childrenKey: {
    type: String,
    default: 'children'
  },
  loadData: Function,
  render: Function,
  lockSelect: Boolean,
  draggable: {
    type: Boolean,
    default: false
  },
  allowDrag: Function,
  allowDrop: Function,
  titleEllipsis: {
    type: Boolean,
    default: true
  },
  defaultExpand: Boolean,
  filterNodeMethod: Function,
  highlightFilter: {
    type: Boolean,
    default: true
  }
}

export const bigTreeProps = {
  data: {
    type: Array,
    default: () => {
      return []
    }
  },
  multiple: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  // 当开启 showCheckbox 时，如果开启 checkDirectly，select 将强制转为 check 事件
  checkDirectly: {
    type: Boolean,
    default: false
  },
  emptyText: {
    type: String,
    default: '暂无数据'
  },
  titleKey: {
    type: String,
    default: 'title'
  },
  childrenKey: {
    type: String,
    default: 'children'
  },
  lockSelect: {
    type: Boolean,
    default: false
  },
  timeout: {
    // 刷新频率
    type: Number,
    default: 17
  },
  defaultExpand: {
    type: Boolean
  },
  itemHeight: {
    type: Number,
    default: 28
  },
  visibleCount: {
    type: Number,
    default: 15
  },
  filterNodeMethod: {
    type: Function
  }
}

export const treeSelectProps = {
  modelValue: String, // value一般为选中的id
  valueKey: {
    type: String,
    default: 'id'
  }, // 实际保存值
  checked: {
    type: Array,
    default() {
      return []
    }
  },
  size: {
    type: String,
    validator: value => {
      return ['small', 'large', 'default', 'mini'].includes(value)
    },
    default: 'default'
  },
  disabled: Boolean,
  clearable: Boolean,
  placeholder: {
    type: String,
    default: '请选择'
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: String,
    default: 'close-circle-fill'
  },
  popperClass: String,
  // 树结构的props
  data: {
    type: Array,
    default: () => {
      return []
    }
  },
  showCheckbox: Boolean,
  checkStrictly: Boolean,
  checkDirectly: Boolean,
  emptyText: {
    type: String,
    default: '暂无数据'
  },
  titleKey: {
    type: String,
    default: 'title'
  },
  childrenKey: {
    type: String,
    default: 'children'
  },
  loadData: Function,
  render: Function,
  lockSelect: Boolean,
  defaultExpand: Boolean,
  filterNodeMethod: Function
}
