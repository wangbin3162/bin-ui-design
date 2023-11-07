<script lang="ts">
import { computed, h } from 'vue'

export default {
  name: 'BMarker',
  props: {
    mark: {
      type: [String, Object],
      default: () => undefined
    }
  },
  setup(props) {
    // @ts-ignore
    const label = computed(() => (typeof props.mark === 'string' ? props.mark : props.mark.label))

    return {
      label
    }
  },
  render() {
    return h(
      'div',
      {
        class: 'bin-slider__marks-text',
        // @ts-ignore
        style: this.mark?.style
      },
      this.label
    )
  }
}
</script>
