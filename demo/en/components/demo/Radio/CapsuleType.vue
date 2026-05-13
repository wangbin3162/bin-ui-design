<template>
  <div flex>
    <div>
      <b-radio-group v-model="fruit" type="capsule">
        <b-radio label="Banana"></b-radio>
        <b-radio label="Apple"></b-radio>
        <b-radio label="Peach"></b-radio>
        <b-radio label="Watermelon"></b-radio>
      </b-radio-group>
      <div class="p10" />
      <b-radio-group v-model="fruit" type="capsule" size="small">
        <b-radio label="Banana"></b-radio>
        <b-radio label="Apple"></b-radio>
        <b-radio label="Peach"></b-radio>
        <b-radio label="Watermelon"></b-radio>
      </b-radio-group>
      <div class="p10" />
      <b-radio-group v-model="fruit" type="capsule" size="mini">
        <b-radio label="Banana"></b-radio>
        <b-radio label="Apple"></b-radio>
        <b-radio label="Peach"></b-radio>
        <b-radio label="Watermelon"></b-radio>
      </b-radio-group>
    </div>

    <div style="margin-left: 24px">
      <b-radio-group v-model="fruit" type="capsule">
        <b-radio label="Banana" disabled></b-radio>
        <b-radio label="Apple"></b-radio>
        <b-radio label="Peach"></b-radio>
        <b-radio label="Watermelon"></b-radio>
      </b-radio-group>
      <div class="p10" />
      <b-radio-group v-model="fruit" type="capsule" disabled>
        <b-radio label="Banana" disabled></b-radio>
        <b-radio label="Apple"></b-radio>
        <b-radio label="Peach"></b-radio>
        <b-radio label="Watermelon"></b-radio>
      </b-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const fruit = ref('Apple')
</script>
