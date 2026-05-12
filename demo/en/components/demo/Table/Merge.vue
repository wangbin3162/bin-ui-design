<template>
  <b-table :columns="columns" :data="data" border :merge-method="handleSpan"></b-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '出生日期', key: 'birthday' },
  { title: '地址', key: 'address' }
]
const data = ref([
  {
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    address: '北京市朝阳区芍药居'
  },
  {
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    address: '北京市海淀区西二旗'
  },
  {
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    address: '上海市浦东新区世纪大道'
  },
  {
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    address: '深圳市南山区深南大道'
  },
  {
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: '南京市龙眠大道'
  }
])

function handleSpan({ row, column, rowIndex, columnIndex }) {
  // 获取相同姓名的行是，0，1
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
  // 合并列，这里将第三行，周小伟的日期和地址合并
  if (rowIndex === 3 && columnIndex === 2) {
    return [1, 2]
  } else if (rowIndex === 3 && columnIndex === 3) {
    return [0, 0]
  }
}
</script>
