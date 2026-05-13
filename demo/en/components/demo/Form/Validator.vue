<template>
  <div style="width: 500px">
    <b-form ref="ruleForm" :model="formObj" status-icon label-width="100px" :rules="ruleValidate">
      <b-form-item prop="name" label="名称">
        <b-input v-model="formObj.name" placeholder="Username"></b-input>
      </b-form-item>
      <b-form-item prop="mail" label="Email">
        <b-input v-model="formObj.mail" placeholder="Email" clearable></b-input>
      </b-form-item>
      <b-row>
        <b-col :span="12">
          <b-form-item prop="age" label="Age">
            <b-input-number v-model="formObj.age" style="width: 100%"></b-input-number>
          </b-form-item>
        </b-col>
        <b-col :span="12">
          <b-form-item label="Hometown" prop="region">
            <b-select v-model="formObj.region" placeholder="Please selectHometown" clearable>
              <b-option label="Shanghai" value="shanghai"></b-option>
              <b-option label="Beijing" value="beijing"></b-option>
              <b-option label="Nanjing" value="nanjing"></b-option>
              <b-option label="Xuzhou" value="xuzhou"></b-option>
            </b-select>
          </b-form-item>
        </b-col>
      </b-row>
      <b-form-item label="Birthday" prop="birthday">
        <b-date-picker
          v-model="formObj.birthday"
          type="date"
          placeholder="Birthday"
        ></b-date-picker>
      </b-form-item>
      <b-form-item label="Hobby" prop="hobby">
        <b-checkbox-group v-model="formObj.hobby">
          <b-checkbox label="打游戏" name="hobby"></b-checkbox>
          <b-checkbox label="看电影" name="hobby"></b-checkbox>
          <b-checkbox label="打篮球/运动" name="hobby"></b-checkbox>
          <b-checkbox label="看书" name="hobby"></b-checkbox>
        </b-checkbox-group>
      </b-form-item>
      <b-form-item label="Gender" prop="sex">
        <b-radio-group v-model="formObj.sex">
          <b-radio label="Male" value="male"></b-radio>
          <b-radio label="Female" value="female"></b-radio>
        </b-radio-group>
      </b-form-item>
      <b-form-item label="Status" prop="status">
        <b-switch v-model="formObj.status" true-value="enable" false-value="disable" size="large">
          <template #open><span>Enable</span></template>
          <template #close><span>Disabled</span></template>
        </b-switch>
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

const ruleValidate = {
  name: [{ required: true, message: 'UsernameCannot be empty', trigger: 'blur' }],
  region: [{ required: true, message: 'HometownCannot be empty', trigger: 'change' }],
  age: [
    { required: true, type: 'number', message: 'Age不为空', trigger: 'change' },
    { type: 'number', min: 18, trigger: 'change', message: 'Age必须在18以上' }
  ],
  hobby: [{ type: 'array', required: true, message: '请to少选择一个Hobby', trigger: 'change' }],
  sex: [{ required: true, message: 'Gender必选', trigger: 'change' }],
  birthday: [{ required: true, type: 'date', message: 'Birthday必选', trigger: 'blur' }],
  mail: [
    { required: true, message: 'EmailCannot be empty', trigger: 'blur' },
    { type: 'email', message: 'EmailInvalid format', trigger: 'blur' }
  ]
}

const ruleForm = ref(null)

const formObj = ref({
  name: '',
  age: null,
  mail: '',
  region: '',
  hobby: [],
  sex: '',
  status: 'disable',
  birthday: ''
})

function submitForm() {
  ruleForm.value?.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
function resetForm() {
  ruleForm.value?.resetFields()
}
</script>
