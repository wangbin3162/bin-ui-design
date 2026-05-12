<template>
  <div flex="box:mean">
    <div style="padding: 0 10px">
      <div class="demonstration">年</div>
      <b-date-picker v-model="value1" type="year" placeholder="选择年"></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">周</div>
      <b-date-picker
        v-model="value2"
        type="week"
        format="gggg 第 ww 周"
        placeholder="选择周"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">月</div>
      <b-date-picker v-model="value3" type="month" placeholder="选择月"></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">多个日期</div>
      <b-date-picker v-model="value4" type="dates" placeholder="选择一个或多个日期"></b-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
