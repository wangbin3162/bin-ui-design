<template>
  <div>
    <b-radio-group v-model="social">
      <b-radio label="twitter">
        <span>Twitter</span>
      </b-radio>
      <b-radio label="facebook">
        <span>Facebook</span>
      </b-radio>
      <b-radio label="github">
        <span>Github</span>
      </b-radio>
      <b-radio label="snapchat">
        <span>Snapchat</span>
      </b-radio>
    </b-radio-group>
    <p style="color: #ff4511; margin: 5px 0">{{ social }}</p>
    <b-radio-group v-model="fruit">
      <b-radio label="Banana"></b-radio>
      <b-radio label="Apple"></b-radio>
      <b-radio label="Watermelon"></b-radio>
    </b-radio-group>
    <p style="color: #ff4511; margin: 5px 0">{{ fruit }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const social = ref('facebook')
const fruit = ref('Apple')
</script>
