<template>
  <div>
    <b-checkbox-group v-model="social">
      <b-checkbox label="twitter">
        <span>Twitter</span>
      </b-checkbox>
      <b-checkbox label="facebook">
        <span>Facebook</span>
      </b-checkbox>
      <b-checkbox label="github">
        <span>Github</span>
      </b-checkbox>
      <b-checkbox label="snapchat">
        <span>Snapchat</span>
      </b-checkbox>
    </b-checkbox-group>
    <p style="color: #ff4511; margin: 5px 0">{{ social }}</p>
    <b-checkbox-group v-model="fruit">
      <b-checkbox label="香蕉"></b-checkbox>
      <b-checkbox label="苹果"></b-checkbox>
      <b-checkbox label="西瓜"></b-checkbox>
    </b-checkbox-group>
    <p style="color: #ff4511; margin: 5px 0">{{ fruit }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const social = ref(['facebook', 'github'])
const fruit = ref(['苹果'])
</script>
