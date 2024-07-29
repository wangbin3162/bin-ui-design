<template>
  <div ref="container" class="bin-anchor-wrapper">
    <div class="bin-anchor">
      <div class="bin-anchor-ink">
        <b-icon v-if="icon" :name="icon" :style="iconStyle" :color="activeColorStr"></b-icon>
        <span
          v-show="!icon && showInk"
          class="bin-anchor-ink-ball"
          :style="{ borderColor: activeColorStr, top: `${data.inkTop}px` }"
        ></span>

        <span
          v-show="!icon && !showInk"
          class="bin-anchor-ink-line"
          :style="{ backgroundColor: activeColorStr, top: `${data.inkTop}px` }"
        ></span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, computed, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { off, on, scrollTop } from '../../_utils/dom'
import { BIcon } from '../../icon'
import type { AnchorProps } from './types'

defineOptions({
  name: 'BAnchor'
})

const emit = defineEmits(['select'])

const props = withDefaults(defineProps<AnchorProps>(), {
  offsetTop: 0,
  bounds: 5,
  scrollOffset: 0
})

const linksRef = ref([]) // 用于获取所有子组件示例
const data = reactive({
  inkTop: 8,
  currentLink: '', // current show link =>  #href -> currentLink = #href
  currentId: '', // current show title id =>  #href -> currentId = href
  titlesOffsetArr: []
})

const el = ref<Element | Window | null>(null)
const container = ref<HTMLElement | null>(null)

let animating = false

const iconStyle = computed(() => {
  let size = props.iconSize ? props.iconSize : 14
  return {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${size}px`,
    top: `${data.inkTop}px`,
    transform: `translate(-${(size - 2) * 0.5}px, -${(size - 14) / 2}px)`
  }
})
const activeColorStr = computed(() => {
  const colorMap = {
    primary: '#1089ff',
    success: '#52c41a',
    info: '#35495E',
    warning: '#fa8c16',
    danger: '#f5222d'
  }
  return props.activeColor // @ts-ignore
    ? colorMap[props.activeColor] // @ts-ignore
      ? colorMap[props.activeColor]
      : props.activeColor
    : null
})

const chooseLink = (current: string) => {
  data.currentLink = current
  data.currentId = current.slice(1)
  emit('select', data.currentLink)
  const anchor = document.getElementById(data.currentId)
  if (!anchor) return
  handleScrollTo(anchor.offsetTop)
  handleSetInkTop()
}

provide('BAnchor', { props, data, linksRef })
provide('chooseLink', chooseLink)

const handleScroll = () => {
  if (animating || !el.value) return
  updateTitleOffset()
  // @ts-ignore
  const scrollTop = el.value.pageYOffset || el.value.scrollTop
  getCurrentScrollAtTitleId(scrollTop)
}

const updateTitleOffset = () => {
  // @ts-ignore
  const links = linksRef.value.map(link => link.href)
  const idArr = links.map(link => link.split('#')[1])
  let offsetArr: { link: string; offset: number }[] = []
  idArr.forEach(id => {
    const titleEle = document.getElementById(id)
    if (titleEle) {
      // @ts-ignore
      offsetArr.push({
        link: `#${id}`,
        offset: titleEle.offsetTop - props.scrollOffset
      })
    }
  })
  // @ts-ignore
  data.titlesOffsetArr = offsetArr
}

const getCurrentScrollAtTitleId = (scrollTop: number) => {
  let i = -1
  let len = data.titlesOffsetArr.length
  let titleItem = { link: '#', offset: 0 }
  scrollTop += props.bounds
  while (++i < len) {
    let currentEle = data.titlesOffsetArr[i]
    let nextEle = data.titlesOffsetArr[i + 1]
    // @ts-ignore
    if (scrollTop >= currentEle.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
      titleItem = data.titlesOffsetArr[i]
      break
    }
  }
  data.currentLink = titleItem.link
  handleSetInkTop()
}

const handleSetInkTop = () => {
  // @ts-ignore
  const currentLinkElementA = container.value.querySelector(`[data-href="${data.currentLink}"]`)
  if (!currentLinkElementA) return
  // @ts-ignore
  const elementATop = currentLinkElementA.offsetTop
  data.inkTop = elementATop < 0 ? props.offsetTop : elementATop
}

const handleScrollTo = (to: number) => {
  const offsetTop = to - props.scrollOffset
  animating = true
  // @ts-ignore
  const currentPos = el.value.pageYOffset || el.value.scrollTop
  scrollTop(el.value, currentPos, offsetTop, 1000, () => {
    animating = false
  })
}

onMounted(() => {
  el.value = window
  if (props.target) {
    el.value = document.querySelector(props.target)
    if (!el.value) {
      throw new Error(`target is not existed: ${props.target}`)
    }
  }
  on(el.value, 'scroll', handleScroll)
  on(window, 'resize', handleScroll)
  nextTick(() => {
    handleScroll()
    handleSetInkTop()
    updateTitleOffset()
  })
})

onBeforeUnmount(() => {
  off(el.value, 'scroll', handleScroll)
  off(window, 'resize', handleScroll)
})

defineExpose({
  chooseLink
})
</script>
