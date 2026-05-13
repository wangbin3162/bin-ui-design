<template>
  <div flex>
    <div class="block" style="width: 220px; margin-right: 20px">
      <span class="demonstration">Default show所有tag</span>
      <b-cascader
        v-model="selected"
        :options="options"
        :props="{ multiple: true }"
        @change="handleChange"
      ></b-cascader>
    </div>
    <div class="block" style="width: 220px; margin-right: 20px">
      <span class="demonstration">collapseshowtag</span>
      <b-cascader
        v-model="selected"
        :options="options"
        :props="{ multiple: true }"
        collapse-tags
        @change="handleChange"
      ></b-cascader>
    </div>
    <div class="block" style="width: calc(100% - 500px); margin-right: 20px">
      <span class="demonstration">option值</span>
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
