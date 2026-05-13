<template>
  <b-table :columns="columns" :data="data" border :merge-method="handleSpan"></b-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Birthday', key: 'birthday' },
  { title: 'Address', key: 'address' }
]
const data = ref([
  {
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    address: 'BeijingCity朝阳区芍药居'
  },
  {
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    address: 'BeijingCity海淀区西二旗'
  },
  {
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    address: 'ShanghaiCity浦东New区世纪大道'
  },
  {
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    address: 'ShenzhenCity南山区深南大道'
  },
  {
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: 'NanjingCity龙眠大道'
  }
])

function handleSpan({ row, column, rowIndex, columnIndex }) {
  // 获取相同Name的Row是，0，1
  if (rowIndex === 0 && columnIndex === 0) {
    return {
      rowspan: 2,
      colspan: 1
    }
  } else if (rowIndex === 1 && columnIndex === 0) {
    return {
      rowspan: 0,
      colspan: 1
    }
  }
  // 合并Column，这里将第三Row，周小伟的Day期和Address合并
  if (rowIndex === 3 && columnIndex === 2) {
    return [1, 2]
  } else if (rowIndex === 3 && columnIndex === 3) {
    return [0, 0]
  }
}
</script>
