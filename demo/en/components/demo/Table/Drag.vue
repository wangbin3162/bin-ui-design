<template>
  <div>
    <div>
      <p>Default Drag</p>
      <b-table v-model:data="data1" :columns="columns1" draggable></b-table>
      <p>Actual Data: {{ data1.map(v => v.id + '-' + v.name) }}</p>
    </div>
    <b-divider></b-divider>
    <div>
      <p>When combined with single selection, it is recommended to use the drag-drop function for custom control, which better implements custom selection effects</p>
      <p>Drag Handle</p>
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
          <b-button type="text" @click.stop="handleEdit(row, index)">Edit</b-button>
          <b-button type="text" text-color="danger" @click.stop="removeRow(index)">Delete</b-button>
        </template>
      </b-table>
      <p>Actual Data: {{ data2.map(v => v.id + '-' + v.name) }}</p>
      <p>Selected Row: {{ currentRow }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
const columns1 = [
  { title: 'ID', key: 'id', width: 70 },
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Date of Birth', key: 'birthday' },
  { title: 'Address', key: 'address' }
]
const columns2 = [
  { slot: 'handle', width: 70 },
  { title: 'ID', key: 'id', width: 70 },
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Date of Birth', key: 'birthday' },
  { title: 'Address', key: 'address' },
  { title: 'Actions', slot: 'ctrl', width: 120 }
]
const data1 = ref([
  {
    id: 1,
    name: 'John Brown',
    age: 18,
    birthday: '1990-04-22',
    address: 'New York No. 1 Lake Park'
  },
  {
    id: 2,
    name: 'Jim Green',
    age: 25,
    birthday: '1990-11-11',
    address: 'London No. 1 Lake Park'
  },
  {
    id: 3,
    name: 'Joe Black',
    age: 30,
    birthday: '1985-02-05',
    address: 'Sydney No. 1 Lake Park'
  },
  {
    id: 4,
    name: 'Jon Snow',
    age: 26,
    birthday: '1993-07-11',
    address: 'Ottawa No. 2 Lake Park'
  },
  {
    id: 5,
    name: 'Jim Raynor',
    age: 33,
    birthday: '1999-12-12',
    address: 'Moscow No. 3 Lake Park'
  }
])
const data2 = ref([
  {
    id: 1,
    name: 'John Brown',
    age: 18,
    birthday: '1990-04-22',
    address: 'New York No. 1 Lake Park'
  },
  {
    id: 2,
    name: 'Jim Green',
    age: 25,
    birthday: '1990-11-11',
    address: 'London No. 1 Lake Park'
  },
  {
    id: 3,
    name: 'Joe Black',
    age: 30,
    birthday: '1985-02-05',
    address: 'Sydney No. 1 Lake Park'
  },
  {
    id: 4,
    name: 'Jon Snow',
    age: 26,
    birthday: '1993-07-11',
    address: 'Ottawa No. 2 Lake Park'
  },
  {
    id: 5,
    name: 'Jim Raynor',
    age: 33,
    birthday: '1999-12-12',
    address: 'Moscow No. 3 Lake Park'
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
