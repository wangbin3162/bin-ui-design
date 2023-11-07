<template>
  <div style="border-bottom: 1px solid #e9e9e9; padding-bottom: 6px; margin-bottom: 6px">
    <b-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
      全选
    </b-checkbox>
    <span style="color: #ff4511; margin: 5px 0">{{ checkAllGroup }} - {{ checkAll }}</span>
  </div>
  <b-checkbox-group v-model="checkAllGroup" @change="checkAllGroupChange">
    <b-checkbox label="香蕉"></b-checkbox>
    <b-checkbox label="苹果"></b-checkbox>
    <b-checkbox label="西瓜"></b-checkbox>
    <b-checkbox label="草莓"></b-checkbox>
  </b-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const all = ['香蕉', '西瓜', '苹果', '草莓']

const indeterminate = ref(false)
const checkAll = ref(false)
const checkAllGroup = ref(['香蕉', '西瓜'])

function handleCheckAll(val) {
  checkAllGroup.value = val ? all : []
  indeterminate.value = false
}

function checkAllGroupChange(value) {
  if (value.length === all.length) {
    indeterminate.value = false
    checkAll.value = true
  } else if (value.length > 0) {
    indeterminate.value = true
    checkAll.value = false
  } else {
    indeterminate.value = false
    checkAll.value = false
  }
}
</script>
