<template>
  <div style="width: 500px">
    <b-form :model="formObj">
      <b-form-item>
        <b-input v-model="formObj.username" placeholder="输入用户名"></b-input>
      </b-form-item>
      <b-form-item>
        <b-input v-model="formObj.password" placeholder="输入用户名" type="password"></b-input>
      </b-form-item>
      <b-form-item>
        <b-button type="primary" style="width: 100%">登录</b-button>
      </b-form-item>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formObj = ref({
  username: '',
  password: ''
})
</script>
