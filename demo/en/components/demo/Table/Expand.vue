<template>
  <b-table :columns="columns" :data="data"></b-table>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
const columns = [
  {
    type: 'expand',
    width: 50,
    render: params => {
      return h('div', 'Detailed Address: ' + params.row.address)
    }
  },
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Date of Birth', key: 'birthday' },
  { title: 'Detailed Address', key: 'address' }
]

const data = ref([
  {
    name: 'John Brown',
    age: 18,
    birthday: '1990-04-22',
    address: 'New York No. 1 Lake Park'
  },
  {
    name: 'Jim Green',
    age: 25,
    birthday: '1990-11-11',
    address: 'London No. 1 Lake Park'
  },
  {
    name: 'Joe Black',
    age: 30,
    birthday: '1985-02-05',
    address: 'Sydney No. 1 Lake Park'
  },
  {
    name: 'Jon Snow',
    age: 26,
    birthday: '1993-07-11',
    address: 'Ottawa No. 2 Lake Park'
  },
  {
    name: 'Jim Raynor',
    age: 33,
    birthday: '1999-12-12',
    address: 'Moscow No. 3 Lake Park'
  }
])
</script>
