<template>
  <div style="width: 500px">
    <b-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <b-form-item label="密码" prop="pass">
        <b-input v-model="ruleForm.pass" type="password" autocomplete="off"></b-input>
      </b-form-item>
      <b-form-item label="确认密码" prop="checkPass">
        <b-input v-model="ruleForm.checkPass" type="password" autocomplete="off"></b-input>
      </b-form-item>
      <b-form-item label="年龄" prop="age">
        <b-input v-model.number="ruleForm.age" type="number"></b-input>
      </b-form-item>
      <b-form-item>
        <b-button type="primary" @click="submitForm">提交</b-button>
        <b-button @click="resetForm">重置</b-button>
      </b-form-item>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('年龄不能为空'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字值'))
    } else {
      if (value < 18) {
        callback(new Error('必须年满18岁'))
      } else {
        callback()
      }
    }
  }, 1000)
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (ruleForm.value.checkPass !== '') {
      ruleFormRef.value?.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== ruleForm.value.pass) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const ruleFormRef = ref(null)

const rules = ref({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }]
})

const ruleForm = ref({
  pass: '',
  checkPass: '',
  age: ''
})

function submitForm() {
  ruleFormRef.value?.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
function resetForm() {
  ruleFormRef.value?.resetFields()
}
</script>
