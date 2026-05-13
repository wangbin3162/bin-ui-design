<template>
  <div flex="cross:center box:mean" style="width: 800px">
    <div style="padding: 0 10px">
      <div class="demonstration">起始Day期时刻为 12:00:00</div>
      <b-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="to"
        start-placeholder="开始Day期"
        end-placeholder="结束Day期"
        :default-time="[new Date(2021, 1, 1, 12, 0, 0)]"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">起始Day期时刻为 12:00:00，结束Day期时刻为 08:00:00</div>
      <b-date-picker
        v-model="value2"
        type="datetimerange"
        range-separator="to"
        start-placeholder="开始Day期"
        end-placeholder="结束Day期"
        :default-time="[new Date(2021, 1, 1, 12, 0, 0), new Date(2021, 2, 1, 8, 0, 0)]"
      ></b-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>
