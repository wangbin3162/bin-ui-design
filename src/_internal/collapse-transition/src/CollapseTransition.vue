<template>
  <Transition v-on="transitionEvents">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import { addClass, removeClass } from '../../../_utils/dom'

defineOptions({
  name: 'BCollapseTransition'
})

// eslint-disable-next-line no-unused-vars
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    addClass(el, 'collapse-transition')

    el.style.height = '0px'
    el.style.paddingTop = '0px'
    el.style.paddingBottom = '0px'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  afterEnter(el) {
    removeClass(el, 'collapse-transition')
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(el, 'collapse-transition')
      el.style.height = '0'
      el.style.paddingTop = '0'
      el.style.paddingBottom = '0'
    }
  },

  afterLeave(el) {
    removeClass(el, 'collapse-transition')
    el.style.height = ''
  }
}
</script>
