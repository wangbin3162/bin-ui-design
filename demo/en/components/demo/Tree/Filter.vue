<template>
  <div>
    <b-input
      v-model="query"
      search
      placeholder="Enter filter criteria and press Enter to search"
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
    title: 'Jiangsu Province',
    children: [
      {
        id: '1-1',
        title: 'Nanjing',
        children: [
          { id: '1-1-1', title: 'Xuanwu District' },
          { id: '1-1-2', title: 'Gulou District' },
          { id: '1-1-3', title: 'Jianye District' },
          { id: '1-1-4', title: 'Qinhuai District' }
        ]
      },
      {
        id: '1-2',
        title: 'Wuxi',
        children: [
          { id: '1-2-1', title: 'Xishan District' },
          { id: '1-2-2', title: 'Huishan District' },
          { id: '1-2-3', title: 'Binhu District' },
          { id: '1-2-4', title: 'Liangxi District' }
        ]
      },
      {
        id: '1-3',
        title: 'Xuzhou',
        children: [
          { id: '1-3-1', title: 'Gulou District' },
          { id: '1-3-2', title: 'Yunlong District' },
          { id: '1-3-3', title: 'Quanshan District' },
          { id: '1-3-4', title: 'Tongshan District' },
          { id: '1-3-5', title: 'Jiawang District' },
          { id: '1-3-6', title: 'Pei County' },
          { id: '1-3-7', title: 'Feng County' },
          { id: '1-3-8', title: 'Suining County' },
          { id: '1-3-9', title: 'Xinyi City' },
          { id: '1-3-10', title: 'Pizhou City' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Hebei Province',
    children: [
      {
        id: '2-1',
        title: 'Shijiazhuang',
        children: [
          { id: '2-1-1', title: "Chang'an District" },
          { id: '2-1-2', title: 'Xinhua District' },
          { id: '2-1-3', title: 'Gulou District' }
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
