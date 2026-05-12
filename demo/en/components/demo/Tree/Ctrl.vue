<template>
  <div>
    <div class="mb-16">
      <b-button size="small" @click="expandAll">展开全部</b-button>
      <b-button size="small" @click="collapseAll">收起全部</b-button>
      <b-button size="small" @click="setExpand">展开三级</b-button>
      <b-button size="small" @click="checkAll">选择全部</b-button>
      <b-button size="small" @click="uncheckAll">取消全选</b-button>
      <b-button size="small" @click="setChecked">设置选中1-2及以下</b-button>
      <b-button size="small" @click="setSelected">单选 1-2-1</b-button>
      <b-button size="small" @click="clear">清空单选和多选</b-button>
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
    title: '一级 1',
    children: [
      {
        title: '二级 1-1',
        children: [{ title: '三级 1-1-1' }, { title: '三级 1-1-2' }]
      },
      {
        title: '二级 1-2',
        children: [{ title: '三级 1-2-1' }, { title: '三级 1-2-2' }]
      }
    ]
  },
  {
    title: '一级 2',
    children: [
      {
        title: '二级 2-1'
      },
      {
        title: '二级 2-2'
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
  // 默认是获取了nodeKey索引，如有特殊判断，如id，则可以自行根据flatState.find所有nodeKey值
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
