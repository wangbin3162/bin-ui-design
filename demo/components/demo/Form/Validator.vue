<template>
  <div style="width: 500px">
    <b-form ref="ruleForm" :model="formObj" status-icon label-width="100px" :rules="ruleValidate">
      <b-form-item prop="name" label="名称">
        <b-input v-model="formObj.name" placeholder="用户名"></b-input>
      </b-form-item>
      <b-form-item prop="mail" label="邮箱">
        <b-input v-model="formObj.mail" placeholder="邮箱" clearable></b-input>
      </b-form-item>
      <b-row>
        <b-col :span="12">
          <b-form-item prop="age" label="年龄">
            <b-input-number v-model="formObj.age" style="width: 100%"></b-input-number>
          </b-form-item>
        </b-col>
        <b-col :span="12">
          <b-form-item label="户籍地" prop="region">
            <b-select v-model="formObj.region" placeholder="请选择户籍地" clearable>
              <b-option label="上海" value="shanghai"></b-option>
              <b-option label="北京" value="beijing"></b-option>
              <b-option label="南京" value="nanjing"></b-option>
              <b-option label="徐州" value="xuzhou"></b-option>
            </b-select>
          </b-form-item>
        </b-col>
      </b-row>
      <b-form-item label="出生日期" prop="birthday">
        <b-date-picker
          v-model="formObj.birthday"
          type="date"
          placeholder="出生日期"
        ></b-date-picker>
      </b-form-item>
      <b-form-item label="爱好" prop="hobby">
        <b-checkbox-group v-model="formObj.hobby">
          <b-checkbox label="打游戏" name="hobby"></b-checkbox>
          <b-checkbox label="看电影" name="hobby"></b-checkbox>
          <b-checkbox label="打篮球/运动" name="hobby"></b-checkbox>
          <b-checkbox label="看书" name="hobby"></b-checkbox>
        </b-checkbox-group>
      </b-form-item>
      <b-form-item label="性别" prop="sex">
        <b-radio-group v-model="formObj.sex">
          <b-radio label="男" value="male"></b-radio>
          <b-radio label="女" value="female"></b-radio>
        </b-radio-group>
      </b-form-item>
      <b-form-item label="状态" prop="status">
        <b-switch v-model="formObj.status" true-value="enable" false-value="disable" size="large">
          <template #open><span>启用</span></template>
          <template #close><span>禁用</span></template>
        </b-switch>
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

const ruleValidate = {
  name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  region: [{ required: true, message: '户籍地不能为空', trigger: 'change' }],
  age: [
    { required: true, type: 'number', message: '年龄不为空', trigger: 'change' },
    { type: 'number', min: 18, trigger: 'change', message: '年龄必须在18以上' }
  ],
  hobby: [{ type: 'array', required: true, message: '请至少选择一个爱好', trigger: 'change' }],
  sex: [{ required: true, message: '性别必选', trigger: 'change' }],
  birthday: [{ required: true, type: 'date', message: '出生日期必选', trigger: 'blur' }],
  mail: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
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
