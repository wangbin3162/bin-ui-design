<template>
  <b-form ref="form" :model="formObj" inline class="demo-form-inline">
    <b-form-item label="Name">
      <b-input v-model="formObj.name" placeholder="输入Name"></b-input>
    </b-form-item>
    <b-form-item label="Hometown">
      <b-select v-model="formObj.region" placeholder="Please selectHometown">
        <b-option label="Shanghai" value="shanghai"></b-option>
        <b-option label="Beijing" value="beijing"></b-option>
        <b-option label="Nanjing" value="nanjing"></b-option>
        <b-option label="Xuzhou" value="xuzhou"></b-option>
      </b-select>
    </b-form-item>
    <b-form-item>
      <b-button type="primary" @click="onSubmit">Submit</b-button>
    </b-form-item>
  </b-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formObj = ref({
  name: '',
  region: ''
})

function onSubmit() {
  console.log('submit!', formObj.value)
}
</script>
