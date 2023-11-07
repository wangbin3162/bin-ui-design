<template>
  <div>
    <b-checkbox-group v-model="checkAllGroup" :min="1" :max="2">
      <b-checkbox label="香蕉"></b-checkbox>
      <b-checkbox label="苹果"></b-checkbox>
      <b-checkbox label="西瓜"></b-checkbox>
      <b-checkbox label="草莓"></b-checkbox>
    </b-checkbox-group>
    <span style="color: #ff4511; margin: 5px 0">{{ checkAllGroup }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checkAllGroup = ref(['香蕉', '西瓜'])
</script>
