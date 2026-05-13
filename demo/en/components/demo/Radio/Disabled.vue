<template>
  <div>
    <b-radio v-model="disabledSingle" disabled>Checkbox</b-radio>
    <b-radio-group v-model="disabledGroup">
      <b-radio label="Banana" disabled></b-radio>
      <b-radio label="Apple" disabled></b-radio>
      <b-radio label="Watermelon"></b-radio>
    </b-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const disabledSingle = ref(true)
const disabledGroup = ref('Apple')
</script>
