<template>
  <div>
    <b-divider align="left">Default原生title</b-divider>
    <b-table :columns="columns" :data="data" border></b-table>
    <b-divider align="left">开启tooltip</b-divider>
    <b-table :columns="columns" :data="data" border tooltip-theme="dark"></b-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Birthday', key: 'birthday' },
  { title: 'Address', key: 'address' },
  { title: 'Remarks', key: 'remark', width: 300, tooltip: true }
]
const data = ref([
  {
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    address: 'BeijingCity朝阳区芍药居',
    remark:
      '这是一段描述文字，文本长度会超出Column宽，设置tooltipproperty可以设置不换Rowshow并开启mousehovershow所有文字。'
  },
  {
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    address: 'BeijingCity海淀区西二旗',
    remark:
      '这是一段描述文字，文本长度会超出Column宽，设置tooltipproperty可以设置不换Rowshow并开启mousehovershow所有文字。'
  },
  {
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    address: 'ShanghaiCity浦东New区世纪大道',
    remark:
      '这是一段描述文字，文本长度会超出Column宽，设置tooltipproperty可以设置不换Rowshow并开启mousehovershow所有文字。'
  },
  {
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    address: 'ShenzhenCity南山区深南大道',
    remark:
      '这是一段描述文字，文本长度会超出Column宽，设置tooltipproperty可以设置不换Rowshow并开启mousehovershow所有文字。'
  },
  {
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: 'NanjingCity龙眠大道',
    remark:
      '这是一段描述文字，文本长度会超出Column宽，设置tooltipproperty可以设置不换Rowshow并开启mousehovershow所有文字。'
  }
])
</script>
