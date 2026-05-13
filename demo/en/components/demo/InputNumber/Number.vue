<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number v-model="value1" :max="10" :min="1" :step="0.2"></b-input-number>
      Decimal step: 0.2
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value2" :precision="2"></b-input-number>
      Precision: 2
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(1)
const value2 = ref(null)
</script>
