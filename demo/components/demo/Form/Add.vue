<template>
  <div style="width: 500px">
    <b-form ref="formRef" :model="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <b-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        :label="'域名' + index"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: '域名不能为空',
          trigger: 'blur'
        }"
      >
        <div flex="box:last">
          <b-input v-model="domain.value"></b-input>
          <b-button @click="removeDomain(domain)">删除</b-button>
        </div>
      </b-form-item>
      <b-form-item>
        <b-button type="primary" @click="submitForm">提交</b-button>
        <b-button @click="addDomain">新增域名</b-button>
        <b-button @click="resetForm">重置</b-button>
      </b-form-item>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dynamicValidateForm = ref({
  domains: [
    {
      value: ''
    }
  ]
})
const formRef = ref(null)

function submitForm() {
  formRef.value?.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
function resetForm() {
  formRef.value?.resetFields()
}
function removeDomain(item) {
  const index = dynamicValidateForm.value.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.value.domains.splice(index, 1)
  }
}
function addDomain() {
  dynamicValidateForm.value.domains.push({
    value: '',
    key: Date.now()
  })
}
</script>
