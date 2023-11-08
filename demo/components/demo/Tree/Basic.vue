<template>
  <div flex>
    <div style="width: 300px">
      <b-tree
        :data="data"
        :lock-select="lockSelect"
        title-ellipsis
        @select-change="handleSelect"
      ></b-tree>
    </div>
    <div style="width: 80px">
      <b-switch v-model="lockSelect" size="large">
        <template #open>锁定</template>
        <template #close>解锁</template>
      </b-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    title: '一级 1',
    expand: true,
    children: [
      {
        title: '二级 1-1',
        expand: true,
        children: [
          { title: '三级 1-1-1 我是超长字段我是超长字段我是超长字段' },
          { title: '三级 1-1-2' }
        ]
      },
      {
        title: '二级 1-2',
        expand: true,
        children: [{ title: '三级 1-2-1' }, { title: '三级 1-2-2' }]
      }
    ]
  }
])

const lockSelect = ref(false)
function handleSelect(selected, node) {
  console.log(selected, node)
}
</script>
