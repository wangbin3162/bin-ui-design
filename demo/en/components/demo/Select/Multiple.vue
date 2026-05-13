<template>
  <div>
    <b-select v-model="select" style="width: 300px" multiple>
      <b-option
        v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></b-option>
    </b-select>
    <b-select v-model="select" style="width: 300px; margin-left: 20px" multiple collapse-tags>
      <b-option
        v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></b-option>
    </b-select>
    <span>{{ select }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const select = ref([])
const cityList = [
  { value: 'beijing', label: 'BeijingBeijingBeijingBeijingBeijingBeijingBeijingBeijingBeijingBeijing' },
  { value: 'nanjing', label: 'Nanjing' },
  { value: 'shanghai', label: 'Shanghai' },
  { value: 'xuzhou', label: 'Xuzhou' },
  { value: 'guangzhou', label: 'Guangzhou' },
  { value: 'shenzhen', label: 'Shenzhen' },
  { value: 'xuzhou', label: 'Xuzhou' },
  { value: 'guangzhou', label: 'Guangzhou' },
  { value: 'shenzhen', label: 'Shenzhen' }
]
</script>
