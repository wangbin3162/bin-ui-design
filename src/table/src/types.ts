import { t } from '../../locales'

export const tableProps = {
  data: {
    type: Array,
    default() {
      return []
    }
  },
  columns: {
    type: Array,
    default() {
      return []
    }
  },
  size: {
    validator(value) {
      return ['small', 'large', 'default'].includes(value)
    },
    default: 'default'
  },
  width: {
    type: [Number, String]
  },
  height: {
    type: [Number, String]
  },
  maxHeight: {
    type: [Number, String]
  },
  stripe: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  highlightRow: {
    type: Boolean,
    default: false
  },
  // 是否可以取消高亮单选
  highlightRowCancel: {
    type: Boolean,
    default: false
  },
  rowClassName: {
    type: Function,
    default() {
      return ''
    }
  },
  context: {
    type: Object
  },
  noDataText: {
    type: String,
    default: () => t('table.noData')
  },
  disabledHover: {
    type: Boolean
  },
  loading: {
    type: Boolean,
    default: false
  },
  draggable: {
    type: Boolean,
    default: false
  },
  dragHandle: String,
  tooltipTheme: {
    type: String,
    validator(value) {
      return ['dark', 'light'].includes(value)
    }
  },
  rowKey: {
    type: [Boolean, String],
    default: false
  },
  expandColumnKey: {
    type: String,
    default: ''
  },
  defaultExpandedRowKeys: {
    type: Array,
    default() {
      return []
    }
  },
  expandedRowKeys: {
    type: Array
  },
  indentSize: {
    type: Number,
    default: 16
  },
  mergeMethod: {
    type: Function
  },
  loadingText: {
    type: String,
    default: () => t('table.loading')
  },
  editTable: {
    type: Boolean,
    default: false
  },
  editTableDetail: {
    type: Boolean,
    default: false
  }
}
