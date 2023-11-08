<template>
  <div>
    <b-input
      v-model="query"
      search
      placeholder="输入过滤条件后回车筛选"
      style="width: 230px"
      @search="handleFilter"
    ></b-input>
    <b-divider style="margin: 14px 0"></b-divider>
    <div style="width: 300px">
      <b-tree ref="treeRef" :data="data" :filter-node-method="filterNode" highlight-filter></b-tree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    id: '1',
    title: '江苏省',
    children: [
      {
        id: '1-1',
        title: '南京市',
        children: [
          { id: '1-1-1', title: '玄武区' },
          { id: '1-1-2', title: '鼓楼区' },
          { id: '1-1-3', title: '建邺区' },
          { id: '1-1-4', title: '秦淮区' }
        ]
      },
      {
        id: '1-2',
        title: '无锡市',
        children: [
          { id: '1-2-1', title: '锡山区' },
          { id: '1-2-2', title: '惠山区' },
          { id: '1-2-3', title: '滨湖区' },
          { id: '1-2-4', title: '梁溪区' }
        ]
      },
      {
        id: '1-3',
        title: '徐州市',
        children: [
          { id: '1-3-1', title: '鼓楼区' },
          { id: '1-3-2', title: '云龙区' },
          { id: '1-3-3', title: '泉山区' },
          { id: '1-3-4', title: '铜山区' },
          { id: '1-3-5', title: '贾汪区' },
          { id: '1-3-6', title: '沛县' },
          { id: '1-3-7', title: '丰县' },
          { id: '1-3-8', title: '睢宁县' },
          { id: '1-3-9', title: '新沂市' },
          { id: '1-3-10', title: '邳州市' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: '河北省',
    children: [
      {
        id: '2-1',
        title: '石家庄',
        children: [
          { id: '2-1-1', title: '长安区' },
          { id: '2-1-2', title: '新华区' },
          { id: '2-1-3', title: '鼓楼区' }
        ]
      }
    ]
  }
])

const query = ref('')
const treeRef = ref(null)

const handleFilter = value => {
  treeRef.value.filter(value)
}
const filterNode = (value, node) => {
  if (!value) return true
  // return node.title===value.trim()
  return node.title.indexOf(value) !== -1
}
</script>
