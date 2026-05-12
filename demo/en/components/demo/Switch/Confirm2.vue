<template>
  <div>
    <b-switch
      v-model="value1"
      confirm
      :loading="loading1"
      :before-change="beforeChange1"
    ></b-switch>
    &nbsp;
    <b-switch
      v-model="value2"
      confirm
      :loading="loading2"
      :before-change="beforeChange2"
    ></b-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
const loading1 = ref(false)
const loading2 = ref(false)

const beforeChange1 = () => {
  loading1.value = true
  return new Promise(resolve => {
    setTimeout(() => {
      loading1.value = false
      return resolve(true)
    }, 1000)
  })
}

const beforeChange2 = () => {
  loading2.value = true
  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false
      return reject(new Error('调用出错！'))
    }, 1000)
  })
}
</script>
