<template>
  <div style="width: 800px">
    <b-table :columns="columns" :data="data" height="200" border></b-table>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

const columns = [
  {
    title: 'Name',
    fixed: 'left',
    key: 'name',
    width: 150
  },
  {
    title: 'Age',
    key: 'age',
    width: 150
  },
  {
    title: 'Birthday',
    key: 'birthday',
    width: 150
  },
  {
    title: 'Address',
    key: 'address',
    width: 350
  },
  {
    title: 'Actions',
    fixed: 'right',
    width: 100,
    render: () => {
      return h('a', { style: { cursor: 'pointer' } }, 'Edit')
    }
  }
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
</script>
