<template>
  <div flex>
    <div class="block" style="width: 220px; margin-right: 20px">
      <b-cascader :options="options">
        <template #default="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf">({{ data.children.length }})</span>
        </template>
      </b-cascader>
    </div>
    <div class="block" style="width: 220px; margin-right: 20px">
      <div class="mt-5">{{ selected }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = [
  {
    value: 'nanjing',
    label: 'Nanjing',
    children: [
      {
        value: 'xuanwu',
        label: '玄武区'
      },
      {
        value: 'gulou',
        label: 'Gulou District'
      },
      {
        value: 'jianye',
        label: '建邺区'
      }
    ]
  },
  {
    value: 'xuzhou',
    label: 'Xuzhou',
    children: [
      {
        value: 'tongshan',
        label: '铜山区'
      },
      {
        value: 'gulou',
        label: 'Gulou District'
      },
      {
        value: 'yunlong',
        label: 'Yunlong District',
        children: [
          { value: 'dalonghu', label: '大龙湖街道' },
          { value: 'guozhuanglu', label: '郭庄路街道' },
          { value: 'lvdi', label: '绿地商务城' },
          { value: 'jinlonghu', label: '金龙湖街道' }
        ]
      },
      {
        value: 'jiawang',
        label: 'Jiawang District'
      },
      { value: 'peixian', label: '沛县' },
      { value: 'fengxian', label: '丰县' },
      { value: 'pizhou', label: '邳州City' },
      { value: 'xinyi', label: 'New沂City' }
    ]
  }
]
const selected = ref([])

function handleChange(value) {
  console.log(value)
}
</script>
