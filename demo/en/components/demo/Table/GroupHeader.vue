<template>
  <b-table :columns="columns" height="300" :data="data" border></b-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { title: '姓名', key: 'name' },
  {
    title: '基本信息',
    align: 'center',
    children: [
      { title: '年龄', key: 'age' },
      { title: '出生日期', key: 'birthday' },
      { title: '详细地址', key: 'address' }
    ]
  },
  {
    title: '学历信息',
    align: 'center',
    children: [
      { title: '毕业院校', key: 'school' },
      { title: '毕业日期', key: 'eduDate' }
    ]
  }
]
const data = ref([
  {
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    address: '北京市朝阳区芍药居',
    school: '南京河海大学',
    eduDate: '2012-04-22'
  },
  {
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    address: '北京市海淀区西二旗',
    school: '北京大学',
    eduDate: '2012-04-22'
  },
  {
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    address: '上海市浦东新区世纪大道',
    school: '上海复旦',
    eduDate: '2012-04-22'
  },
  {
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    address: '深圳市南山区深南大道',
    school: '广东大学',
    eduDate: '2012-04-22'
  },
  {
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: '南京市龙眠大道',
    school: '南京交通学院',
    eduDate: '2012-04-22'
  },
  {
    name: '李晓红',
    age: 23,
    birthday: '1999-12-12',
    address: '南京市龙眠大道',
    school: '南京交通学院',
    eduDate: '2012-04-22'
  },
  {
    name: '郭小宁',
    age: 23,
    birthday: '1999-12-12',
    address: '南京市龙眠大道',
    school: '南京交通学院',
    eduDate: '2012-04-22'
  }
])
</script>
