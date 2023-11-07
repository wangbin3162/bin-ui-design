<template>
  <div>
    <b-space>
      对齐方式
      <b-radio-group v-model="labelPosition" type="capsule">
        <b-radio label="left">左对齐</b-radio>
        <b-radio label="right">右对齐</b-radio>
        <b-radio label="top">顶部对齐</b-radio>
      </b-radio-group>
      尺寸大小
      <b-radio-group v-model="size" type="capsule" :size="size">
        <b-radio label="large">large</b-radio>
        <b-radio label="default">default</b-radio>
        <b-radio label="small">small</b-radio>
        <b-radio label="mini">mini</b-radio>
      </b-radio-group>
      文字显示
      <b-switch v-model="onlyText"></b-switch>
    </b-space>
    <div style="width: 500px; margin-top: 20px">
      <b-form :label-position="labelPosition" label-width="100px" :model="formObj" :size="size">
        <b-form-item label="姓名">
          <b-input v-if="!onlyText" v-model="formObj.name" placeholder="输入姓名"></b-input>
          <label v-else>{{ formObj.name }}</label>
        </b-form-item>
        <b-form-item label="年龄">
          <b-input-number v-if="!onlyText" v-model="formObj.age"></b-input-number>
          <label v-else>{{ formObj.age }}</label>
        </b-form-item>
        <b-form-item label="户籍地">
          <b-select v-if="!onlyText" v-model="formObj.city" placeholder="请选择户籍地">
            <b-option label="上海" value="shanghai"></b-option>
            <b-option label="北京" value="beijing"></b-option>
            <b-option label="南京" value="nanjing"></b-option>
            <b-option label="徐州" value="xuzhou"></b-option>
          </b-select>
          <label v-else>{{ formObj.city }}</label>
        </b-form-item>
        <b-form-item label="学历">
          <b-radio-group v-if="!onlyText" v-model="formObj.edu">
            <b-radio label="高中"></b-radio>
            <b-radio label="大专"></b-radio>
            <b-radio label="本科"></b-radio>
            <b-radio label="硕士"></b-radio>
          </b-radio-group>
          <span v-else>{{ formObj.edu }}</span>
        </b-form-item>
        <b-form-item label="爱好">
          <b-checkbox-group v-if="!onlyText" v-model="formObj.hobby">
            <b-checkbox label="打游戏" name="hobby"></b-checkbox>
            <b-checkbox label="看电影" name="hobby"></b-checkbox>
            <b-checkbox label="打篮球/运动" name="hobby"></b-checkbox>
            <b-checkbox label="看书" name="hobby"></b-checkbox>
          </b-checkbox-group>
          <span v-else>{{ formObj.hobby }}</span>
        </b-form-item>
        <b-form-item label="住址">
          <b-input
            v-if="!onlyText"
            v-model="formObj.address"
            type="textarea"
            placeholder="请输入住址..."
          ></b-input>
          <span v-else>{{ formObj.address }}</span>
        </b-form-item>
        <!-- <b-form-item label="进度">
        <b-slider></b-slider>
      </b-form-item>
      <b-form-item label="颜色">
        <b-color-picker></b-color-picker>
      </b-form-item>
      <b-form-item label="评分">
        <b-rate></b-rate>
      </b-form-item>
      <b-form-item label="日期选择器">
        <b-date-picker></b-date-picker>
      </b-form-item>
      <b-form-item label="时间选择器">
        <b-time-picker></b-time-picker>
      </b-form-item>
      <b-form-item label="开关">
        <b-switch></b-switch>
      </b-form-item> -->
        <b-form-item v-if="!onlyText">
          <b-button type="primary">提交</b-button>
          <b-button>取消</b-button>
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
  name: '张三',
  age: 18,
  city: 'xuzhou',
  edu: '高中',
  hobby: ['打游戏', '看电影'],
  address: '徐州市鼓楼区'
})
</script>
