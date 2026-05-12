<template>
  <div>
    <div class="mb-15">
      <b-button type="primary" plain size="small" @click="handleAdd">add tab</b-button>
    </div>
    <b-tabs
      v-model="activeTab"
      :data="tabs"
      type="card"
      closable
      @tab-close="handleTabClose"
    ></b-tabs>
    <div style="overflow: hidden; position: relative">
      <b-move-transition>
        <p v-if="activeTab === 'tab0'">首页</p>
        <p v-else-if="activeTab === 'tab1'">用户管理</p>
        <p v-else-if="activeTab === 'tab2'">组织管理</p>
        <p v-else-if="activeTab === 'tab3'">系统管理</p>
        <p v-else>{{ activeTab }}</p>
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

const handleAdd = () => {
  // 这里需要保证key值唯一否则会影响渲染显示
  const newTab = { key: `tab${+new Date()}`, title: 'New Tab' }
  tabs.value.push(newTab)
  // 增加完毕后通常默认选中这个新的tab，当然，你也可以不设置选中新的tab
  activeTab.value = newTab.key
}
const handleTabClose = tab => {
  tabs.value.splice(
    tabs.value.findIndex(t => t.key === tab.key),
    1
  )
}
</script>
