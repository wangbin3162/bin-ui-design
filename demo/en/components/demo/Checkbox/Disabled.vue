<template>
  <div>
    <b-checkbox v-model="disabledSingle" disabled>Checkbox</b-checkbox>
    <b-checkbox-group v-model="disabledGroup">
      <b-checkbox label="Banana" disabled></b-checkbox>
      <b-checkbox label="Apple" disabled></b-checkbox>
      <b-checkbox label="Watermelon"></b-checkbox>
    </b-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const disabledSingle = ref(true)
const disabledGroup = ref(['Apple'])
</script>
