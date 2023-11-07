<template>
  <div style="width: 500px">
    <b-form ref="form" :model="formObj" label-width="100px">
      <b-form-item label="姓名">
        <b-input v-model="formObj.name" placeholder="输入姓名"></b-input>
      </b-form-item>
      <b-form-item label="年龄">
        <b-input-number v-model="formObj.age"></b-input-number>
      </b-form-item>
      <b-form-item label="户籍地">
        <b-select v-model="formObj.region" placeholder="请选择户籍地">
          <b-option label="上海" value="shanghai"></b-option>
          <b-option label="北京" value="beijing"></b-option>
          <b-option label="南京" value="nanjing"></b-option>
          <b-option label="徐州" value="xuzhou"></b-option>
        </b-select>
      </b-form-item>
      <b-form-item label="学历">
        <b-radio-group v-model="formObj.edu">
          <b-radio label="高中"></b-radio>
          <b-radio label="大专"></b-radio>
          <b-radio label="本科"></b-radio>
          <b-radio label="硕士"></b-radio>
        </b-radio-group>
      </b-form-item>
      <b-form-item label="爱好">
        <b-checkbox-group v-model="formObj.hobby">
          <b-checkbox label="打游戏" name="hobby"></b-checkbox>
          <b-checkbox label="看电影" name="hobby"></b-checkbox>
          <b-checkbox label="打篮球/运动" name="hobby"></b-checkbox>
          <b-checkbox label="看书" name="hobby"></b-checkbox>
        </b-checkbox-group>
      </b-form-item>
      <b-form-item label="住址">
        <b-input v-model="formObj.address" type="textarea" placeholder="请输入住址..."></b-input>
      </b-form-item>
      <b-form-item>
        <b-button type="primary" @click="onSubmit">提交</b-button>
        <b-button>取消</b-button>
      </b-form-item>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formObj = ref({
  name: '',
  age: null,
  region: '',
  city: '',
  edu: '',
  hobby: [],
  address: ''
})

function onSubmit() {
  console.log('submit!', formObj.value)
}
</script>
