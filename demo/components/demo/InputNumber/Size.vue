<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number v-model="value" size="mini"></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value" size="small"></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value"></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value" size="large"></b-input-number>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
</script>
