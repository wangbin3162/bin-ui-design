<template>
  <div flex>
    <div class="block" style="width: 220px; margin-right: 20px">
      <span class="demonstration">Single select可Search</span>
      <b-cascader
        v-model="selected1"
        placeholder="试试Search：鼓楼"
        :options="options"
        filterable
      ></b-cascader>
      <div class="mt-5">{{ selected1 }}</div>
    </div>
    <div class="block" style="width: 220px; margin-right: 20px">
      <span class="demonstration">Multi-select可Search</span>
      <b-cascader
        v-model="selected2"
        placeholder="试试Search：鼓楼"
        :options="options"
        :props="{ multiple: true }"
        collapse-tags
        filterable
        :filter-method="filterMethod"
      ></b-cascader>
      <div class="mt-5">{{ selected2 }}</div>
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
const selected1 = ref([])
const selected2 = ref([])

function filterMethod(node, keyword) {
  return node.label.includes(keyword) && node.parent && node.parent.label === 'Xuzhou'
}
</script>
