<template>
  <div>
    <b-table
      ref="currentRowTable"
      :columns="columns"
      :data="data"
      highlight-row
      @current-change="currentRowChange"
    ></b-table>
    <br />
    <div>
      <b-button @click="clearSelect">清除单选</b-button>
      <b-button @click="clickRow(0)">选中第一行</b-button>
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
        <b-button type="text" text-color="danger" @click="removeRow(index)">删除</b-button>
      </template>
    </b-table>
    <br />
    <b-button @click="init">初始化表格2并默认选中第一行</b-button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Message } from 'bin-ui-design'

const columns = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '出生日期', key: 'birthday' },
  { title: '地址', key: 'address' }
]
const columns2 = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '出生日期', key: 'birthday' },
  { title: '地址', key: 'address' },
  { title: '操作', slot: 'ctrl' }
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
const data2 = ref([
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
const currentRowTable = ref(null)
const currentRowTable2 = ref(null)

function currentRowChange(currentRow, oldRow, index) {
  if (index >= 0) {
    Message(`选中了第${index + 1}行`)
  }
}

function clearSelect() {
  currentRowTable.value.clearCurrentRow()
}
// 选中某一行
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
