<template>
  <div>
    <div flex>
      <b-form ref="ruleFormRef" :model="obj" label-width="85px" :rules="ruleValidate">
        <b-form-item prop="currentId" label="树结构">
          <b-tree-select
            v-model="obj.currentId"
            style="width: 300px"
            :data="data"
            title-key="text"
            clearable
            @change="handleChange"
          ></b-tree-select>
        </b-form-item>
        <b-form-item>
          <b-button type="primary" @click="submitForm">提交</b-button>
          <b-button @click="resetForm">重置</b-button>
        </b-form-item>
      </b-form>
    </div>
    <div>currentId：{{ obj.currentId }}</div>
    <div>currentNode：{{ currentNode }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    id: '001',
    text: '研发部',
    deptCode: 'yfb',
    status: '1',
    desc: '研发中心',
    parentId: null,
    children: [
      {
        id: '00101',
        text: '后端组',
        deptCode: 'hd',
        status: '1',
        desc: '后端研发中心',
        parentId: '001'
      },
      {
        id: '00102',
        text: '前端组',
        deptCode: 'qd',
        status: '1',
        desc: '前端研发中心',
        parentId: '001'
      },
      {
        id: '00103',
        text: 'UI设计',
        deptCode: 'sj',
        status: '1',
        desc: '交互、ui设计中心',
        parentId: '001'
      },
      {
        id: '00104',
        text: '测试组',
        deptCode: 'cs',
        status: '1',
        desc: '测试组',
        parentId: '001'
      },
      {
        id: '00105',
        text: '运维组',
        deptCode: 'yw',
        status: '1',
        desc: '运维、服务、巡检',
        parentId: '001'
      }
    ]
  },
  {
    id: '002',
    text: '项目部',
    deptCode: 'xmb',
    status: '1',
    desc: '项目服务部',
    parentId: null,
    children: [
      {
        id: '00201',
        text: '开发组',
        deptCode: 'kf',
        status: '1',
        desc: '后端项目开发',
        parentId: '002'
      },
      {
        id: '00202',
        text: '交付服务组',
        deptCode: 'jf',
        status: '1',
        desc: '交付项目，技术服务支持',
        parentId: '002'
      }
    ]
  }
])

const obj = ref({
  currentId: '00102'
})
const ruleFormRef = ref(null)
const currentNode = ref({})
const ruleValidate = {
  currentId: [{ required: true, message: '树不能为空', trigger: 'change' }]
}

function handleChange(val, node) {
  // console.log(val, node)
  currentNode.value = node ? { id: node.id, text: node.text } : {}
}

function submitForm() {
  ruleFormRef.value.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
function resetForm() {
  ruleFormRef.value.resetFields()
}
</script>
