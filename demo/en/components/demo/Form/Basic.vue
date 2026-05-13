<template>
  <div style="width: 500px">
    <b-form ref="form" :model="formObj" label-width="100px">
      <b-form-item label="Name">
        <b-input v-model="formObj.name" placeholder="输入Name"></b-input>
      </b-form-item>
      <b-form-item label="Age">
        <b-input-number v-model="formObj.age"></b-input-number>
      </b-form-item>
      <b-form-item label="Hometown">
        <b-select v-model="formObj.region" placeholder="Please selectHometown">
          <b-option label="Shanghai" value="shanghai"></b-option>
          <b-option label="Beijing" value="beijing"></b-option>
          <b-option label="Nanjing" value="nanjing"></b-option>
          <b-option label="Xuzhou" value="xuzhou"></b-option>
        </b-select>
      </b-form-item>
      <b-form-item label="Education">
        <b-radio-group v-model="formObj.edu">
          <b-radio label="High School"></b-radio>
          <b-radio label="College"></b-radio>
          <b-radio label="Bachelor"></b-radio>
          <b-radio label="Master"></b-radio>
        </b-radio-group>
      </b-form-item>
      <b-form-item label="Hobby">
        <b-checkbox-group v-model="formObj.hobby">
          <b-checkbox label="打游戏" name="hobby"></b-checkbox>
          <b-checkbox label="看电影" name="hobby"></b-checkbox>
          <b-checkbox label="打篮球/运动" name="hobby"></b-checkbox>
          <b-checkbox label="看书" name="hobby"></b-checkbox>
        </b-checkbox-group>
      </b-form-item>
      <b-form-item label="Address">
        <b-input v-model="formObj.address" type="textarea" placeholder="Please enterAddress..."></b-input>
      </b-form-item>
      <b-form-item>
        <b-button type="primary" @click="onSubmit">Submit</b-button>
        <b-button>Cancel</b-button>
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
