<template>
  <b-table :columns="columns" :data="data" no-data-text="No Data"></b-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Birthday', key: 'birthday' },
  { title: 'Address', key: 'address' }
]
const data = ref([])
</script>
