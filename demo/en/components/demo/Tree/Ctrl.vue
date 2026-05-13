<template>
  <div>
    <div class="mb-16">
      <b-button size="small" @click="expandAll">Expand全部</b-button>
      <b-button size="small" @click="collapseAll">Collapse全部</b-button>
      <b-button size="small" @click="setExpand">Expand三级</b-button>
      <b-button size="small" @click="checkAll">选择全部</b-button>
      <b-button size="small" @click="uncheckAll">Cancel全选</b-button>
      <b-button size="small" @click="setChecked">设置select1-2及以下</b-button>
      <b-button size="small" @click="setSelected">Single select 1-2-1</b-button>
      <b-button size="small" @click="clear">清空Single select和Multi-select</b-button>
    </div>
    <div style="width: 300px">
      <b-tree ref="treeRef" :data="data" show-checkbox></b-tree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    title: 'Level 1 1',
    children: [
      {
        title: 'Level 2 1-1',
        children: [{ title: 'Level 3 1-1-1' }, { title: 'Level 3 1-1-2' }]
      },
      {
        title: 'Level 2 1-2',
        children: [{ title: 'Level 3 1-2-1' }, { title: 'Level 3 1-2-2' }]
      }
    ]
  },
  {
    title: 'Level 1 2',
    children: [
      {
        title: 'Level 2 2-1'
      },
      {
        title: 'Level 2 2-2'
      }
    ]
  }
])
const treeRef = ref(null)

function expandAll() {
  treeRef.value.expandAll()
}
function collapseAll() {
  treeRef.value.collapseAll()
}
function checkAll() {
  treeRef.value.checkAll()
}
function uncheckAll() {
  treeRef.value.uncheckAll()
}
function setChecked() {
  // Default是获取了nodeKey索引，如有特殊判断，如id，则可以自Row根据flatState.find所有nodeKey值
  treeRef.value.setChecked([5, 6])
}
function setSelected() {
  treeRef.value.setSelected([5])
}
function clear() {
  treeRef.value.uncheckAll()
  treeRef.value.unselectAll()
}
function setExpand() {
  treeRef.value.setExpand([0, 4])
}
</script>
