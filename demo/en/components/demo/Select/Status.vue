<template>
  <div>
    <b-select v-model="select" style="width: 200px" clearable placeholder="可清空">
      <b-option
        v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></b-option>
    </b-select>

    <b-select v-model="select" style="width: 200px; margin-left: 20px" placeholder="分组">
      <b-option-group label="直辖市">
        <b-option value="beijing" label="北京"></b-option>
        <b-option value="shanghai" label="上海"></b-option>
      </b-option-group>
      <b-option-group label="热门城市">
        <b-option value="xuzhou" label="徐州"></b-option>
        <b-option value="nanjing" label="南京"></b-option>
        <b-option value="suzhou" label="广州"></b-option>
        <b-option value="shenzhen" label="深圳"></b-option>
      </b-option-group>
    </b-select>

    <b-select v-model="select" style="width: 200px; margin-left: 20px" placeholder="自定义选项">
      <b-option value="beijing" label="北京">
        <span>北京</span>
        <span style="float: right; color: #ccc">beijing</span>
      </b-option>
      <b-option value="shanghai" label="上海">
        <span>上海</span>
        <span style="float: right; color: #ccc">shanghai</span>
      </b-option>
      <b-option value="xuzhou" label="徐州">
        <span>徐州</span>
        <span style="float: right; color: #ccc">xuzhou</span>
      </b-option>
    </b-select>
  </div>
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
