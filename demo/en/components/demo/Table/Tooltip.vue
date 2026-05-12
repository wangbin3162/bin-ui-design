<template>
  <div>
    <b-divider align="left">默认原生title</b-divider>
    <b-table :columns="columns" :data="data" border></b-table>
    <b-divider align="left">开启tooltip</b-divider>
    <b-table :columns="columns" :data="data" border tooltip-theme="dark"></b-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '出生日期', key: 'birthday' },
  { title: '地址', key: 'address' },
  { title: '备注', key: 'remark', tooltip: true }
]
const data = ref([
  {
    name: '王小明',
    age: 18,
    birthday: '1990-04-22',
    address: '北京市朝阳区芍药居',
    remark:
      '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
  },
  {
    name: '张小刚',
    age: 25,
    birthday: '1990-11-11',
    address: '北京市海淀区西二旗',
    remark:
      '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
  },
  {
    name: '李小红',
    age: 30,
    birthday: '1985-02-05',
    address: '上海市浦东新区世纪大道',
    remark:
      '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
  },
  {
    name: '周小伟',
    age: 26,
    birthday: '1993-07-11',
    address: '深圳市南山区深南大道',
    remark:
      '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
  },
  {
    name: '张小发',
    age: 33,
    birthday: '1999-12-12',
    address: '南京市龙眠大道',
    remark:
      '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
  }
])
</script>
