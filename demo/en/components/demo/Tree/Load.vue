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
    // Simulate requesting data when there are child items
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
      // Set whether it's a leaf node on demand, or leave it unset
      item['isLeaf'] = true
      // If not set, the arrow is retained and can be clicked again
      // data = []
    }

    callback(data)
  }, 1000)
}
</script>
