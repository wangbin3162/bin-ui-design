<template>
  <div>
    <div style="margin-bottom: 8px">
      <b-space>
        数据条数：
        <b-input-number v-model="number" style="width: 120px"></b-input-number>
        <b-button @click="init">渲染</b-button>
        <b-input
          v-model="query"
          search
          placeholder="输入过滤条件后回车筛选"
          style="width: 230px"
          @search="handleFilter"
        ></b-input>
        <b-button-group>
          <b-button @click="expandAll">展开所有</b-button>
          <b-button @click="collapseAll">收起所有</b-button>
        </b-button-group>
      </b-space>
    </div>
    <b-divider style="margin: 14px 0"></b-divider>
    <b-big-tree
      ref="treeRef"
      :data="treedata"
      :visible-count="10"
      :filter-node-method="filterNode"
      @select-change="handleSelected"
    ></b-big-tree>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const treedata = ref([])

const number = ref(5000)
const query = ref('')
const treeRef = ref(null)

let maxNode = 10000 // 最大的节点数
const childNodesNumber = [2, 5] // 子节点数
const maxLevel = 3 // 最大嵌套层级
const childRate = 0.4 // 拥有子节点的概率
const label = '节点' // 节点label
let index = 0
const data = []

const randomInteger = function (min, max) {
  let result = min - 0.5 + Math.random() * (max - min + 1)
  result = Math.round(result)
  return result
}

const generateId = function () {
  ++index
  return Math.random().toString().slice(3) * 1
}

const generateNode = function () {
  const id = generateId()
  return {
    id: id,
    title: `${label}_${index}-id：${id}`
  }
}
const generateChild = function (tree, level = 1) {
  if (index > maxNode - 1) return
  tree.children = []
  const childNumber = randomInteger(childNodesNumber[0], childNodesNumber[1])
  for (let i = 0; i < childNumber; i++) {
    if (index > maxNode - 1) break
    const obj = generateNode()

    if (Math.random() < childRate && level < maxLevel) {
      generateChild(obj, ++level)
    }
    tree.children.push(obj)
  }
}

const generate = function (number) {
  // eslint-disable-next-line no-const-assign
  maxNode = number
  // eslint-disable-next-line no-unmodified-loop-condition
  while (index < maxNode) {
    let obj = generateNode()
    generateChild(obj)
    data.push(obj)
  }
  return data
}
function init() {
  treedata.value = generate(number.value)
}
function handleSelected(allSelected, node) {
  console.log(allSelected, node)
}
function expandAll() {
  treeRef.value.expandAll()
}
function collapseAll() {
  treeRef.value.collapseAll()
}
function handleFilter(value) {
  treeRef.value.filter(value)
}
function filterNode(value, node) {
  if (!value) return true
  // return node.title===value.trim()
  return node.title.indexOf(value) !== -1
}
</script>
