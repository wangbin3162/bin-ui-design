<template>
  <div class="bin-desc">
    <div v-if="title || extra || $slots.title || $slots.extra" class="bin-desc__header">
      <div class="bin-desc__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="bin-desc__extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <div class="bin-desc__body">
      <table :class="[{ 'is-bordered': border }, size ? `bin-desc--${size}` : '']">
        <tbody>
          <template v-for="(row, index) in rows" :key="index">
            <b-desc-row :row="row" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { computed, provide } from 'vue'
import BDescRow from './DescRow.vue'
import type { DescProps } from './types'

defineOptions({
  name: 'BDesc'
})

const slots = defineSlots()
const props = withDefaults(defineProps<DescProps>(), {
  column: 3,
  title: '',
  extra: '',
  size: 'default'
})

provide<DescProps>('BDesc', props)

const rows = computed(() => {
  const children = flattedChildren(slots.default?.()).filter(
    node => node?.type?.name === 'BDescItem'
  )
  const rows: any[] = []
  let temp: any[] = []
  let count = props.column

  children.forEach((node, index) => {
    const span = node.props?.span || 1

    if (index === children.length - 1) {
      temp.push(filledNode(node, span, count, true))
      rows.push(temp)
      return
    }

    if (span < count) {
      count -= span
      temp.push(node)
    } else {
      temp.push(filledNode(node, span, count))
      rows.push(temp)
      count = props.column
      temp = []
    }
  })

  return rows
})

const flattedChildren = (children: any) => {
  const temp = Array.isArray(children) ? children : [children]
  const res: any[] = []
  temp.forEach(child => {
    if (Array.isArray(child.children)) {
      res.push(...flattedChildren(child.children))
    } else {
      res.push(child)
    }
  })
  return res
}

const filledNode = (node: any, span: number, count: number, isLast = false) => {
  if (!node.props) {
    node.props = {}
  }
  if (span > count) {
    node.props.span = count
  }
  if (isLast) {
    // set the max span, cause of the last td
    node.props.span = props.column
  }
  return node
}
</script>
