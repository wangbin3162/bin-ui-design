export const uploadProps = {
  action: {
    type: String,
    required: true
  },
  headers: {
    type: Object,
    default() {
      return {}
    }
  },
  multiple: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object
  },
  name: {
    type: String,
    default: 'file'
  },
  withCredentials: {
    type: Boolean,
    default: false
  },
  showUploadList: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    validator(value) {
      return ['select', 'drag'].includes(value)
    },
    default: 'select'
  },
  format: {
    type: Array,
    default() {
      return []
    }
  },
  accept: {
    type: String
  },
  maxSize: {
    type: Number
  },
  beforeUpload: Function,
  onProgress: {
    type: Function,
    default() {
      return {}
    }
  },
  onSuccess: {
    type: Function,
    default() {
      return {}
    }
  },
  onError: {
    type: Function,
    default() {
      return {}
    }
  },
  onRemove: {
    type: Function,
    default() {
      return {}
    }
  },
  onPreview: {
    type: Function,
    default() {
      return {}
    }
  },
  onExceededSize: {
    type: Function,
    default() {
      return {}
    }
  },
  onFormatError: {
    type: Function,
    default() {
      return {}
    }
  },
  defaultFileList: {
    type: Array,
    default() {
      return []
    }
  },
  paste: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
