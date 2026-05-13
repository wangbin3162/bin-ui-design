<template>
  <div>
    <div class="mb-16">
      <b-button size="small" @click="expandAll">Expand All</b-button>
      <b-button size="small" @click="collapseAll">Collapse All</b-button>
      <b-button size="small" @click="setExpand">Expand Level 3</b-button>
      <b-button size="small" @click="checkAll">Select All</b-button>
      <b-button size="small" @click="uncheckAll">Deselect All</b-button>
      <b-button size="small" @click="setChecked">Select 1-2 and below</b-button>
      <b-button size="small" @click="setSelected">Single select 1-2-1</b-button>
      <b-button size="small" @click="clear">Clear single select and multi-select</b-button>
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
  // Default gets the nodeKey index. For special cases like id, you can search all nodeKey values from flatState
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
