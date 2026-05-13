<template>
  <div style="padding: 2px">
    <b-table :columns="columns" :data="data" max-height="200" border>
      <template #ctrl="{ index }">
        <b-button type="danger" size="mini" plain @click="removeRow(index)">Delete</b-button>
      </template>
    </b-table>
    <br />
    <b-button @click="add">增加一条数据</b-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age', align: 'center' },
  { title: 'Birthday', key: 'birthday' },
  { title: 'Address', key: 'address', width: 350 },
  { title: 'Actions', slot: 'ctrl', width: 100 }
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
  }
])

function add() {
  data.value.push({
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: 'NanjingCity龙眠大道'
  })
}
function removeRow(index) {
  data.value.splice(index, 1)
}
</script>
