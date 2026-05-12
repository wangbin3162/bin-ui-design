<template>
  <b-table :columns="columns" :data="data" no-data-text="No Data"></b-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '出生日期', key: 'birthday' },
  { title: '地址', key: 'address' }
]
const data = ref([])
</script>
