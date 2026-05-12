<template>
  <div>
    <b-tabs v-model="activeTab" :data="tabs" type="card"></b-tabs>
    <div style="overflow: hidden; position: relative">
      <b-move-transition>
        <p v-if="activeTab === 'tab0'">首页</p>
        <p v-else-if="activeTab === 'tab1'">用户管理</p>
        <p v-else-if="activeTab === 'tab2'">组织管理</p>
        <p v-else-if="activeTab === 'tab3'">系统管理</p>
      </b-move-transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tabs = ref([
  { key: 'tab0', title: '首页', noClose: true },
  { key: 'tab1', title: '用户管理' },
  { key: 'tab2', title: '组织管理' },
  { key: 'tab3', title: '系统管理' }
])
const activeTab = ref('tab2')
</script>
