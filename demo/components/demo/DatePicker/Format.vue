<template>
  <div flex="cross:center">
    <div style="padding: 0 10px; width: 500px">
      <b-date-picker
        v-model="value1"
        type="date"
        format="YYYY 年 MM 月 DD 日"
        placeholder="选择日期"
      ></b-date-picker>
      <div>值：{{ value1 }}</div>
    </div>
    <div style="padding: 0 10px; width: 500px">
      <b-date-picker
        v-model="value2"
        type="date"
        format="YYYY 年 MM 月 DD 日"
        value-format="YYYY-MM-DD"
        placeholder="选择日期"
      ></b-date-picker>
      <div>值：{{ value2 }}</div>
    </div>
  </div>
  <br />
  <div flex="cross:center">
    <div style="padding: 0 10px; width: 500px">
      <b-date-picker
        v-model="value3"
        type="daterange"
        format="YYYY 年 MM 月 DD 日"
        placeholder="选择日期"
      ></b-date-picker>
      <div>值：{{ value3 }}</div>
    </div>
    <div style="padding: 0 10px; width: 500px">
      <b-date-picker
        v-model="value4"
        type="daterange"
        format="YYYY 年 MM 月 DD 日"
        value-format="YYYY-MM-DD"
        placeholder="选择日期"
      ></b-date-picker>
      <div>值：{{ value4 }}</div>
    </div>
  </div>
  <br />
  <div flex="cross:center">
    <div style="padding: 0 10px; width: 500px">
      <b-date-picker v-model="value5" type="datetime" placeholder="选择日期"></b-date-picker>
      <div>值：{{ value5 }}</div>
    </div>
    <div style="padding: 0 10px; width: 500px">
      <b-date-picker
        v-model="value6"
        value-format="YYYY-MM-DD HH:mm:ss"
        type="datetime"
        placeholder="选择日期"
      ></b-date-picker>
      <div>值：{{ value6 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('2024-01-01')
const value3 = ref([])
const value4 = ref(['2024-01-01', '2024-04-30'])
const value5 = ref('')
const value6 = ref('')
</script>
