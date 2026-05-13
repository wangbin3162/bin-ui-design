<template>
  <b-table :columns="columns" height="300" :data="data" border></b-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { title: 'Name', key: 'name' },
  {
    title: '基本Info',
    align: 'center',
    children: [
      { title: 'Age', key: 'age' },
      { title: 'Birthday', key: 'birthday' },
      { title: '详细Address', key: 'address' }
    ]
  },
  {
    title: 'EducationInfo',
    align: 'center',
    children: [
      { title: '毕业院校', key: 'school' },
      { title: '毕业Day期', key: 'eduDate' }
    ]
  }
]
const data = ref([
  {
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    address: 'BeijingCity朝阳区芍药居',
    school: 'Nanjing河海大学',
    eduDate: '2012-04-22'
  },
  {
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    address: 'BeijingCity海淀区西二旗',
    school: 'Beijing大学',
    eduDate: '2012-04-22'
  },
  {
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    address: 'ShanghaiCity浦东New区世纪大道',
    school: 'Shanghai复旦',
    eduDate: '2012-04-22'
  },
  {
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    address: 'ShenzhenCity南山区深南大道',
    school: '广东大学',
    eduDate: '2012-04-22'
  },
  {
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: 'NanjingCity龙眠大道',
    school: 'Nanjing交通学院',
    eduDate: '2012-04-22'
  },
  {
    name: '李晓红',
    age: 23,
    birthday: '1999-12-12',
    address: 'NanjingCity龙眠大道',
    school: 'Nanjing交通学院',
    eduDate: '2012-04-22'
  },
  {
    name: '郭小宁',
    age: 23,
    birthday: '1999-12-12',
    address: 'NanjingCity龙眠大道',
    school: 'Nanjing交通学院',
    eduDate: '2012-04-22'
  }
])
</script>
