<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number
        v-model="value1"
        :max="10000"
        :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
        :parser="value => value.replace(/$s?|(,*)/g, '')"
      ></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number
        v-model="value2"
        :max="100"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
      ></b-input-number>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(1)
const value2 = ref(1)
</script>
