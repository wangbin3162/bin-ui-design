import { isRef, watch } from 'vue'

/**
 * This method provides dialogable components the ability to restore previously activated element before
 * the dialog gets opened
 */
export default (toggle, initialFocus = null) => {
  let previousActive
  watch(
    () => toggle.value,
    val => {
      if (val) {
        previousActive = document.activeElement
        if (initialFocus && isRef(initialFocus)) {
          initialFocus.value.focus?.()
        }
      } else {
        if (process.env.NODE_ENV === 'testing') {
          previousActive.focus.call(previousActive)
        } else {
          previousActive.focus()
        }
      }
    }
  )
}
