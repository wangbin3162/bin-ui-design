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
        <b-button @click="defaultSelect">Set Default: Frontend Team</b-button>
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
        <b-button @click="setChecked">Set Default: Project Dept</b-button>
      </div>
    </div>

    <div class="pt-8 pb-8">
      <b-button @click="clear">Clear Selection</b-button>
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
    text: 'R&D Department',
    deptCode: 'yfb',
    status: '1',
    desc: 'R&D Center',
    parentId: null,
    children: [
      {
        id: '00101',
        text: 'Backend Team',
        deptCode: 'hd',
        status: '1',
        desc: 'Backend R&D Center',
        parentId: '001'
      },
      {
        id: '00102',
        text: 'Frontend Team',
        deptCode: 'qd',
        status: '1',
        desc: 'Frontend R&D Center',
        parentId: '001'
      },
      {
        id: '00103',
        text: 'UI Design',
        deptCode: 'sj',
        status: '1',
        desc: 'Interaction & UI Design Center',
        parentId: '001'
      },
      {
        id: '00104',
        text: 'Testing Team',
        deptCode: 'cs',
        status: '1',
        desc: 'Testing Team',
        parentId: '001'
      },
      {
        id: '00105',
        text: 'Operations Team',
        deptCode: 'yw',
        status: '1',
        desc: 'Operations, Services, and Inspections',
        parentId: '001'
      }
    ]
  },
  {
    id: '002',
    text: 'Project Department',
    deptCode: 'xmb',
    status: '1',
    desc: 'Project Services Department',
    parentId: null,
    children: [
      {
        id: '00201',
        text: 'Development Team',
        deptCode: 'kf',
        status: '1',
        desc: 'Backend Project Development',
        parentId: '002'
      },
      {
        id: '00202',
        text: 'Delivery Service Team',
        deptCode: 'jf',
        status: '1',
        desc: 'Project Delivery and Technical Service Support',
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
