<template>
  <b-form ref="form" :model="formObj" inline class="demo-form-inline">
    <b-form-item label="姓名">
      <b-input v-model="formObj.name" placeholder="输入姓名"></b-input>
    </b-form-item>
    <b-form-item label="户籍地">
      <b-select v-model="formObj.region" placeholder="请选择户籍地">
        <b-option label="上海" value="shanghai"></b-option>
        <b-option label="北京" value="beijing"></b-option>
        <b-option label="南京" value="nanjing"></b-option>
        <b-option label="徐州" value="xuzhou"></b-option>
      </b-select>
    </b-form-item>
    <b-form-item>
      <b-button type="primary" @click="onSubmit">提交</b-button>
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
