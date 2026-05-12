<template>
  <b-row :gutter="20">
    <b-col :span="8">
      <b-select
        v-model="selected"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择城市"
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
  { value: 'beijing', label: '北京' },
  { value: 'nanjing', label: '南京' },
  { value: 'shanghai', label: '上海' },
  { value: 'xuzhou', label: '徐州' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' }
]
</script>
