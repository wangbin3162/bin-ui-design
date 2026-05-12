<template>
  <div style="width: 300px">
    <b-tree :data="data" show-checkbox :load-data="loadData"></b-tree>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    title: 'root',
    children: []
  },
  {
    title: 'leaf',
    isLeaf: true,
    children: []
  }
])

function loadData(item, callback) {
  console.log(item)
  setTimeout(() => {
    let data = [
      {
        title: 'have-child',
        loading: false,
        children: []
      },
      {
        title: 'no-child',
        loading: false,
        children: []
      }
    ]
    // 模拟请求数据有子项的时候
    if (item.title === 'have-child') {
      data = [
        {
          title: 'child1',
          loading: false,
          isLeaf: false,
          children: [],
          visible: true
        },
        {
          title: 'leaf node',
          isLeaf: true,
          children: []
        }
      ]
    } else if (item.title === 'no-child') {
      // 按需自行设置是否是叶子节点或者不设置
      item['isLeaf'] = true
      // 不设置会保留箭头可以再次点击
      // data = []
    }

    callback(data)
  }, 1000)
}
</script>
