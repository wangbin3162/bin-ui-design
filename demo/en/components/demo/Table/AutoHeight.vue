<template>
  <div style="padding: 2px">
    <b-table :columns="columns" :data="data" max-height="200" border>
      <template #ctrl="{ index }">
        <b-button type="danger" size="mini" plain @click="removeRow(index)">删除</b-button>
      </template>
    </b-table>
    <br />
    <b-button @click="add">增加一条数据</b-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age', align: 'center' },
  { title: '出生日期', key: 'birthday' },
  { title: '地址', key: 'address', width: 350 },
  { title: '操作', slot: 'ctrl', width: 100 }
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
  }
])

function add() {
  data.value.push({
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: '南京市龙眠大道'
  })
}
function removeRow(index) {
  data.value.splice(index, 1)
}
</script>
