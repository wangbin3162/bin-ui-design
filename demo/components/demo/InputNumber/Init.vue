<template>
  <div>
    <b-row :gutter="16">
      <b-col span="6">
        <b-input-number v-model="obj.num1"></b-input-number>
        初始化值为null(绑定属性存在）
      </b-col>
      <b-col span="6">
        <b-input-number v-model="obj.num2" :min="1" :max="10"></b-input-number>
        初始化值为字符串
      </b-col>
      <b-col span="6">
        <b-input-number v-model="obj.num3"></b-input-number>
        初始化值为undefined(绑定属性不存在）
      </b-col>
    </b-row>
    <p>{{ obj }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const obj = ref({ num1: null, num2: '0', num3: undefined })
</script>
