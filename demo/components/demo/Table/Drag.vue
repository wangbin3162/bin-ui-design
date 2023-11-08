<template>
  <div>
    <div>
      <p>默认拖拽</p>
      <b-table v-model:data="data1" :columns="columns1" draggable></b-table>
      <p>实际数据：{{ data1.map(v => v.id + '-' + v.name) }}</p>
    </div>
    <b-divider></b-divider>
    <div>
      <p>如需和单选结合使用，推荐使用drag-drop函数来自定义控制，这样可以更好的实现自定义选中效果</p>
      <p>drag-handle</p>
      <b-table
        ref="currentRowTable"
        :columns="columns2"
        :data="data2"
        draggable
        drag-handle=".drag-handle"
        highlight-row
        @drag-drop="handleDragDrop"
        @current-change="currentRowChange"
      >
        <template #handle="{ row }">
          <span class="drag-handle" style="cursor: grab"><b-icon name="drag" size="20" /></span>
        </template>
        <template #ctrl="{ row, index }">
          <b-button type="text" @click.stop="handleEdit(row, index)">编辑</b-button>
          <b-button type="text" text-color="danger" @click.stop="removeRow(index)">删除</b-button>
        </template>
      </b-table>
      <p>实际数据：{{ data2.map(v => v.id + '-' + v.name) }}</p>
      <p>选中行：{{ currentRow }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
const columns1 = [
  { title: 'ID', key: 'id', width: 70 },
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '出生日期', key: 'birthday' },
  { title: '地址', key: 'address' }
]
const columns2 = [
  { slot: 'handle', width: 70 },
  { title: 'ID', key: 'id', width: 70 },
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '出生日期', key: 'birthday' },
  { title: '地址', key: 'address' },
  { title: '操作', slot: 'ctrl', width: 120 }
]
const data1 = ref([
  {
    id: 1,
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    address: '北京市朝阳区芍药居'
  },
  {
    id: 2,
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    address: '北京市海淀区西二旗'
  },
  {
    id: 3,
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    address: '上海市浦东新区世纪大道'
  },
  {
    id: 4,
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    address: '深圳市南山区深南大道'
  },
  {
    id: 5,
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: '南京市龙眠大道'
  }
])
const data2 = ref([
  {
    id: 1,
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    address: '北京市朝阳区芍药居'
  },
  {
    id: 2,
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    address: '北京市海淀区西二旗'
  },
  {
    id: 3,
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    address: '上海市浦东新区世纪大道'
  },
  {
    id: 4,
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    address: '深圳市南山区深南大道'
  },
  {
    id: 5,
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: '南京市龙眠大道'
  }
])
const currentRow = ref({})
const currentRowTable = ref(null)

function currentRowChange(row, oldRow, index) {
  currentRow.value = row
}
function handleDragDrop(newList, newIndex, oldIndex) {
  data2.value = [...newList]
  nextTick(() => {
    currentRowTable.value.clickCurrentRow(newIndex)
  })
}
function handleEdit(row, index) {
  console.log(row, index)
}
function removeRow(index) {
  data2.value.splice(index, 1)
  nextTick(() => {
    currentRowTable.value.clearCurrentRow()
  })
}
</script>
