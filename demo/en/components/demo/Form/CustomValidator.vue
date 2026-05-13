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
      <b-form-item label="Password" prop="pass">
        <b-input v-model="ruleForm.pass" type="password" autocomplete="off"></b-input>
      </b-form-item>
      <b-form-item label="ConfirmPassword" prop="checkPass">
        <b-input v-model="ruleForm.checkPass" type="password" autocomplete="off"></b-input>
      </b-form-item>
      <b-form-item label="Age" prop="age">
        <b-input v-model.number="ruleForm.age" type="number"></b-input>
      </b-form-item>
      <b-form-item>
        <b-button type="primary" @click="submitForm">Submit</b-button>
        <b-button @click="resetForm">Reset</b-button>
      </b-form-item>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('AgeCannot be empty'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please enter数字值'))
    } else {
      if (value < 18) {
        callback(new Error('必须Year满18岁'))
      } else {
        callback()
      }
    }
  }, 1000)
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please enterPassword'))
  } else {
    if (ruleForm.value.checkPass !== '') {
      ruleFormRef.value?.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入Password'))
  } else if (value !== ruleForm.value.pass) {
    callback(new Error('两次输入Password不一致!'))
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
