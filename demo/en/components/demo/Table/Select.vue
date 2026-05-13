<template>
  <div>
    <b-table
      ref="currentRowTable"
      :columns="columns"
      :data="data"
      highlight-row
      highlight-row-cancel
      @current-change="currentRowChange"
    ></b-table>
    <br />
    <div>
      <b-button @click="clearSelect">清除Single select</b-button>
      <b-button @click="clickRow(0)">select第一Row</b-button>
    </div>
    <br />
    <b-table
      ref="currentRowTable2"
      :columns="columns2"
      :data="data2"
      highlight-row
      @current-change="currentRowChange"
    >
      <template #ctrl="{ index }">
        <b-button type="text" text-color="danger" @click="removeRow(index)">Delete</b-button>
      </template>
    </b-table>
    <br />
    <b-button @click="init">初始化table2并Defaultselect第一Row</b-button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Message } from 'bin-ui-design'

const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Birthday', key: 'birthday' },
  { title: 'Address', key: 'address' }
]
const columns2 = [
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Birthday', key: 'birthday' },
  { title: 'Address', key: 'address' },
  { title: 'Actions', slot: 'ctrl' }
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
const data2 = ref([
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
const currentRowTable = ref(null)
const currentRowTable2 = ref(null)

function currentRowChange(currentRow, oldRow, index) {
  console.log(currentRow, oldRow, index)
  if (index >= 0) {
    Message(`select了第${index + 1}Row`)
  }
}

function clearSelect() {
  currentRowTable.value.clearCurrentRow()
}
// select某一Row
function clickRow(index) {
  currentRowTable.value.clickCurrentRow(index)
}
function init() {
  data2.value = JSON.parse(JSON.stringify(data.value))
  nextTick(() => {
    currentRowTable2.value.clickCurrentRow(0)
  })
}
function removeRow(index) {
  data2.value.splice(index, 1)
}
</script>
