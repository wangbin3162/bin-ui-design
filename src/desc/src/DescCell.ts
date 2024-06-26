import { computed, h, inject, defineComponent } from 'vue'
import type { DescProps } from './types'

export default defineComponent({
  name: 'BDescCell',
  props: {
    cell: {
      type: Object,
      default: () => ({})
    },
    tag: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const descriptions = inject<DescProps>('BDesc', {})

    const label = computed(() => props.cell?.children?.label?.() || props.cell?.props?.label)
    const content = computed(() => props.cell?.children?.default?.())
    const span = computed(() => props.cell?.props?.span || 1)
    const labelWidth = computed(() => descriptions.labelWidth || 50 / descriptions.column)
    const contentWidth = computed(() => {
      const labelWidth = descriptions.labelWidth
      const column = descriptions.column
      return labelWidth ? (100 - column * labelWidth) / column : 50 / column
    })

    return {
      descriptions,
      label,
      content,
      span,
      labelWidth,
      contentWidth
    }
  },
  render() {
    switch (this.type) {
      case 'label':
        return h(
          this.tag,
          {
            class: ['bin-desc__label', { 'is-bordered-label': this.descriptions.border }],
            style: { width: `${this.labelWidth}%` },
            colSpan: 1
          },
          this.label
        )
      case 'content':
        return h(
          this.tag,
          {
            class: 'bin-desc__content',
            style: { width: `${this.span * this.contentWidth}%` },
            colSpan: this.span * 2 - 1
          },
          this.content
        )
      default:
        return h(
          'td',
          {
            colSpan: this.span,
            style: { width: `${this.span * (100 / this.descriptions.column)}%` }
          },
          [
            h('span', { class: 'bin-desc__label' }, this.label),
            h('span', { class: 'bin-desc__content' }, this.content)
          ]
        )
    }
  }
})
