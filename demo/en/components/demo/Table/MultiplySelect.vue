<template>
  <div>
    <b-table ref="tableRef" :columns="columns" :data="data" highlight-row></b-table>
    <br />
    <b-button @click="$refs.tableRef.selectAll(true)">设置全选</b-button>
    <b-button @click="$refs.tableRef.selectAll(false)">Cancel全选</b-button>
    <b-button @click="getAllSelected">获取select</b-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { type: 'selection', width: 60, align: 'center' },
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
const tableRef = ref(null)
function getAllSelected() {
  const selected = tableRef.value.getSelection()
  console.log(selected)
}
</script>
