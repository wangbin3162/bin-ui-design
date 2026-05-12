<template>
  <div>
    <b-checkbox v-model="disabledSingle" disabled>Checkbox</b-checkbox>
    <b-checkbox-group v-model="disabledGroup">
      <b-checkbox label="香蕉" disabled></b-checkbox>
      <b-checkbox label="苹果" disabled></b-checkbox>
      <b-checkbox label="西瓜"></b-checkbox>
    </b-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const disabledSingle = ref(true)
const disabledGroup = ref(['苹果'])
</script>
