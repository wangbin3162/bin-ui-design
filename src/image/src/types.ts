export const imageProps = {
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  preview: {
    type: Boolean,
    default: false
  },
  referrerPolicy: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: ''
  },
  height: {
    type: [String, Number],
    default: ''
  },
  fit: {
    type: String, // 'fill' | 'contain' | 'cover' | 'none' | 'scale'-down'
    default: ''
  },
  lazy: {
    type: Boolean,
    default: false
  },
  scrollContainer: {
    type: [String],
    default: ''
  },
  appendToBody: {
    type: Boolean,
    default() {
      return false
    }
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  // preview list
  previewList: {
    type: Array
  },
  infinite: {
    type: Boolean,
    default: true
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  previewTip: {
    type: Boolean,
    default: true
  },
  toolbar: {
    type: Array,
    default() {
      return ['zoomIn', 'zoomOut', 'original', 'rotateLeft', 'rotateRight', 'download']
    }
  },
  failText: {
    type: String,
    default: '失败'
  },
  loadingText: {
    type: String,
    default: '加载中'
  },
  previewText: {
    type: String,
    default: '预览'
  }
}
