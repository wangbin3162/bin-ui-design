<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number
        v-model="value1"
        :max="10"
        :min="1"
        arrow-up-icon="plus"
        arrow-down-icon="minus"
      ></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value1" :max="10" :min="1" always></b-input-number>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(1)
</script>
