import { t } from '../../locales'

export const imagePreviewProps = {
  modelValue: {
    type: Boolean,
    default: false
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
  previewList: {
    type: Array,
    default() {
      return []
    }
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
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
    default: () => t('image.fail')
  },
  loadingText: {
    type: String,
    default: () => t('image.loading')
  },
  previewText: {
    type: String,
    default: () => t('image.preview')
  }
}
