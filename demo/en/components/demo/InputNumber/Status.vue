<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number v-model="value" disabled></b-input-number>
      disabled
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value" readonly></b-input-number>
      readonly
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value" :editable="false"></b-input-number>
      editable="false"
    </b-col>
  </b-row>
  <br />
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number v-model="value" disabled always></b-input-number>
      disabled
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value" readonly always></b-input-number>
      readonly
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value" :editable="false" always></b-input-number>
      editable="false"
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
</script>
