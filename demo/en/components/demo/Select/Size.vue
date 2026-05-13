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
  { value: 'beijing', label: 'Beijing' },
  { value: 'nanjing', label: 'Nanjing' },
  { value: 'shanghai', label: 'Shanghai' },
  { value: 'xuzhou', label: 'Xuzhou' },
  { value: 'guangzhou', label: 'Guangzhou' },
  { value: 'shenzhen', label: 'Shenzhen' }
]
</script>
