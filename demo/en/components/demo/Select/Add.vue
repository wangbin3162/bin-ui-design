<template>
  <b-row :gutter="20">
    <b-col :span="8">
      <b-select
        v-model="selected"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="Please selectCity"
      >
        <b-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></b-option>
      </b-select>
    </b-col>
    <b-col :span="16">
      <div style="height: 32px; line-height: 32px">{{ selected }}</div>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref([])
const cityList = [
  { value: 'beijing', label: 'Beijing' },
  { value: 'nanjing', label: 'Nanjing' },
  { value: 'shanghai', label: 'Shanghai' },
  { value: 'xuzhou', label: 'Xuzhou' },
  { value: 'guangzhou', label: 'Guangzhou' },
  { value: 'shenzhen', label: 'Shenzhen' }
]
</script>
