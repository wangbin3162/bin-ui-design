<template>
  <div>
    <b-select v-model="select" style="width: 200px" clearable placeholder="Clearable">
      <b-option
        v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></b-option>
    </b-select>

    <b-select v-model="select" style="width: 200px; margin-left: 20px" placeholder="Grouped">
      <b-option-group label="Municipalities">
        <b-option value="beijing" label="Beijing"></b-option>
        <b-option value="shanghai" label="Shanghai"></b-option>
      </b-option-group>
      <b-option-group label="Popular Cities">
        <b-option value="xuzhou" label="Xuzhou"></b-option>
        <b-option value="nanjing" label="Nanjing"></b-option>
        <b-option value="suzhou" label="Guangzhou"></b-option>
        <b-option value="shenzhen" label="Shenzhen"></b-option>
      </b-option-group>
    </b-select>

    <b-select v-model="select" style="width: 200px; margin-left: 20px" placeholder="Customoption">
      <b-option value="beijing" label="Beijing">
        <span>Beijing</span>
        <span style="float: right; color: #ccc">beijing</span>
      </b-option>
      <b-option value="shanghai" label="Shanghai">
        <span>Shanghai</span>
        <span style="float: right; color: #ccc">shanghai</span>
      </b-option>
      <b-option value="xuzhou" label="Xuzhou">
        <span>Xuzhou</span>
        <span style="float: right; color: #ccc">xuzhou</span>
      </b-option>
    </b-select>
  </div>
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
