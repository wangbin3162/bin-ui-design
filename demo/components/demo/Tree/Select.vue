<template>
  <div>
    <div flex>
      <div flex>
        <b-tree-select
          v-model="currentId"
          style="width: 300px"
          :data="data"
          title-key="text"
          @change="handleChange"
        ></b-tree-select>
        <b-button @click="defaultSelect">设置默认选中前端组</b-button>
      </div>
      <div flex class="ml-16">
        <b-tree-select
          v-model="currentId"
          v-model:checked="checked"
          style="width: 300px"
          :data="data"
          title-key="text"
          show-checkbox
          @change="handleChange"
        ></b-tree-select>
        <b-button @click="setChecked">设置默认勾选项目部</b-button>
      </div>
    </div>

    <div class="pt-8 pb-8">
      <b-button @click="clear">清空选择</b-button>
    </div>
    <div>currentId：{{ currentId }}</div>
    <div>currentNode：{{ currentNode }}</div>
    <div>checked：{{ checked }}</div>
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

const currentId = ref('00102')
const currentNode = ref({})
const checked = ref([])

function defaultSelect() {
  currentId.value = '00102'
}
function handleChange(val, node) {
  currentNode.value = node ? { id: node.id, text: node.text } : {}
}
function setChecked() {
  checked.value = ['002', '00201', '00202']
}
function clear() {
  currentId.value = ''
  currentNode.value = {}
  checked.value = []
}
</script>
