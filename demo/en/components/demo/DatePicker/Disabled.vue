<template>
  <div flex="box:mean" style="width: 600px">
    <div style="padding: 0 10px">
      <div class="demonstration">date</div>
      <b-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        disabled
        :default-value="new Date(2020, 4, 27)"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">daterange</div>
      <b-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        disabled
        :default-value="[new Date(2020, 1, 1), new Date(2020, 10, 1)]"
      ></b-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref([])
</script>
