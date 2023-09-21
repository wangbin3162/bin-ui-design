<template>
  <div>
    <b-radio v-model="disabledSingle" disabled>Checkbox</b-radio>
    <b-radio-group v-model="disabledGroup">
      <b-radio label="香蕉" disabled></b-radio>
      <b-radio label="苹果" disabled></b-radio>
      <b-radio label="西瓜"></b-radio>
    </b-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const disabledSingle = ref(true)
const disabledGroup = ref('苹果')
</script>
