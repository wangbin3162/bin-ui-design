<template>
  <div>
    <b-space>
      Alignment
      <b-radio-group v-model="labelPosition" type="capsule">
        <b-radio label="left">Left</b-radio>
        <b-radio label="right">Right</b-radio>
        <b-radio label="top">Top</b-radio>
      </b-radio-group>
      Size
      <b-radio-group v-model="size" type="capsule">
        <b-radio label="large">large</b-radio>
        <b-radio label="default">default</b-radio>
        <b-radio label="small">small</b-radio>
        <b-radio label="mini">mini</b-radio>
      </b-radio-group>
      Text Display
      <b-switch v-model="onlyText"></b-switch>
    </b-space>
    <div style="width: 500px; margin-top: 20px">
      <b-form :label-position="labelPosition" label-width="100px" :model="formObj" :size="size">
        <b-form-item label="Name">
          <b-input v-if="!onlyText" v-model="formObj.name" placeholder="Enter Name"></b-input>
          <label v-else>{{ formObj.name }}</label>
        </b-form-item>
        <b-form-item label="Age">
          <b-input-number v-if="!onlyText" v-model="formObj.age"></b-input-number>
          <label v-else>{{ formObj.age }}</label>
        </b-form-item>
        <b-form-item label="Hometown">
          <b-select v-if="!onlyText" v-model="formObj.city" placeholder="Please selectHometown">
            <b-option label="Shanghai" value="shanghai"></b-option>
            <b-option label="Beijing" value="beijing"></b-option>
            <b-option label="Nanjing" value="nanjing"></b-option>
            <b-option label="Xuzhou" value="xuzhou"></b-option>
          </b-select>
          <label v-else>{{ formObj.city }}</label>
        </b-form-item>
        <b-form-item label="Education">
          <b-radio-group v-if="!onlyText" v-model="formObj.edu">
            <b-radio label="High School"></b-radio>
            <b-radio label="College"></b-radio>
            <b-radio label="Bachelor"></b-radio>
            <b-radio label="Master"></b-radio>
          </b-radio-group>
          <span v-else>{{ formObj.edu }}</span>
        </b-form-item>
        <b-form-item label="Hobby">
          <b-checkbox-group v-if="!onlyText" v-model="formObj.hobby">
            <b-checkbox label="打游戏" name="hobby"></b-checkbox>
            <b-checkbox label="看电影" name="hobby"></b-checkbox>
            <b-checkbox label="打篮球/运动" name="hobby"></b-checkbox>
            <b-checkbox label="看书" name="hobby"></b-checkbox>
          </b-checkbox-group>
          <span v-else>{{ formObj.hobby }}</span>
        </b-form-item>
        <b-form-item label="Address">
          <b-input
            v-if="!onlyText"
            v-model="formObj.address"
            type="textarea"
            placeholder="Please enterAddress..."
          ></b-input>
          <span v-else>{{ formObj.address }}</span>
        </b-form-item>
        <!-- <b-form-item label="进度">
        <b-slider></b-slider>
      </b-form-item>
      <b-form-item label="color">
        <b-color-picker></b-color-picker>
      </b-form-item>
      <b-form-item label="rate">
        <b-rate></b-rate>
      </b-form-item>
      <b-form-item label="Day期选择器">
        <b-date-picker></b-date-picker>
      </b-form-item>
      <b-form-item label="time picker">
        <b-time-picker></b-time-picker>
      </b-form-item>
      <b-form-item label="switch">
        <b-switch></b-switch>
      </b-form-item> -->
        <b-form-item v-if="!onlyText">
          <b-button type="primary">Submit</b-button>
          <b-button>Cancel</b-button>
        </b-form-item>
      </b-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const labelPosition = ref('right')
const size = ref('default')
const onlyText = ref(false)

const formObj = ref({
  name: 'John Doe',
  age: 18,
  city: 'xuzhou',
  edu: 'High School',
  hobby: ['打游戏', '看电影'],
  address: 'XuzhouCityGulou District'
})
</script>
