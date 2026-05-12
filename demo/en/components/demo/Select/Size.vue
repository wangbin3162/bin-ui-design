<template>
  <b-row :gutter="20">
    <b-col :span="6">
      <b-select v-model="select" clearable size="large">
        <b-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></b-option>
      </b-select>
    </b-col>
    <b-col :span="6">
      <b-select v-model="select" clearable>
        <b-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></b-option>
      </b-select>
    </b-col>
    <b-col :span="6">
      <b-select v-model="select" clearable size="small">
        <b-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></b-option>
      </b-select>
    </b-col>
    <b-col :span="6">
      <b-select v-model="select" clearable size="mini">
        <b-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></b-option>
      </b-select>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const select = ref('')
const cityList = [
  { value: 'beijing', label: '北京' },
  { value: 'nanjing', label: '南京' },
  { value: 'shanghai', label: '上海' },
  { value: 'xuzhou', label: '徐州' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' }
]
</script>
