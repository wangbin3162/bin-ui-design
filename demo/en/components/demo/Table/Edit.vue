<template>
  <b-table :columns="columns" :data="data">
    <template #name="{ index, row }">
      <b-input
        v-if="obj.editIndex === index"
        v-model="obj.editName"
        type="text"
        size="small"
        clearable
      ></b-input>
      <span v-else>{{ row.name }}</span>
    </template>
    <template #age="{ index, row }">
      <b-input-number
        v-if="obj.editIndex === index"
        v-model="obj.editAge"
        type="text"
        size="small"
      ></b-input-number>
      <span v-else>{{ row.age }}</span>
    </template>
    <template #birthday="{ index, row }">
      <b-date-picker
        v-if="obj.editIndex === index"
        v-model="obj.editBirthday"
        size="small"
        type="date"
        placeholder="选择Day期"
      ></b-date-picker>
      <span v-else>{{ row.birthday }}</span>
    </template>
    <template #hobby="{ index, row }">
      <b-select v-if="obj.editIndex === index" v-model="obj.editHobby" clearable size="small">
        <b-option v-for="(val, key) in hobbyMap" :key="key" :value="key" :label="val">
          {{ val }}
        </b-option>
      </b-select>
      <span v-else>{{ hobbyMap[row.hobby] }}</span>
    </template>
    <template #address="{ index, row }">
      <b-input
        v-if="obj.editIndex === index"
        v-model="obj.editAddress"
        type="text"
        size="small"
      ></b-input>
      <span v-else>{{ row.address }}</span>
    </template>
    <template #action="{ index, row }">
      <div v-if="obj.editIndex === index">
        <b-button size="small" type="success" plain @click="handleSave(index)">save</b-button>
        <b-button size="small" @click="obj.editIndex = -1">Cancel</b-button>
      </div>
      <div v-else>
        <b-button size="small" @click="handleEdit(row, index)">Actions</b-button>
      </div>
    </template>
  </b-table>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import dayjs from 'dayjs'

const columns = [
  { title: 'Name', slot: 'name' },
  { title: 'Age', slot: 'age' },
  { title: 'Birthday', slot: 'birthday' },
  { title: 'Hobby', slot: 'hobby' },
  { title: 'Address', slot: 'address' },
  { title: 'Actions', slot: 'action' }
]
const hobbyMap = { '1': '吃饭', '2': '睡觉', '3': '打豆豆' }
const data = ref([
  {
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    hobby: '1',
    address: 'BeijingCity朝阳区芍药居'
  },
  {
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    hobby: '1',
    address: 'BeijingCity海淀区西二旗'
  },
  {
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    hobby: '3',
    address: 'ShanghaiCity浦东New区世纪大道'
  },
  {
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    hobby: '1',
    address: 'ShenzhenCity南山区深南大道'
  },
  {
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    hobby: '2',
    address: 'NanjingCity龙眠大道'
  }
])

const obj = reactive({
  editName: '',
  editAge: '',
  editBirthday: '',
  editHobby: '',
  editAddress: '',
  editIndex: -1
})

function handleEdit(row, index) {
  obj.editName = row.name
  obj.editAge = row.age
  obj.editHobby = row.hobby
  obj.editAddress = row.address
  obj.editBirthday = new Date(row.birthday)
  obj.editIndex = index
}
function handleSave(index) {
  data.value[index].name = obj.editName
  data.value[index].age = obj.editAge
  data.value[index].birthday = dayjs(obj.editBirthday).format('YYYY-MM-DD')
  data.value[index].hobby = obj.editHobby
  data.value[index].address = obj.editAddress
  obj.editIndex = -1
}
</script>
