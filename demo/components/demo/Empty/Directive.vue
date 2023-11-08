<template>
  <div style="width: 224px">
    <div v-no-data:[dataText]="true" style="border: 1px solid #eee; height: 150px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dataText = ref('抱歉，暂时没有数据')
</script>
