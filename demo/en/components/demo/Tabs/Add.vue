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
        <p v-if="activeTab === 'tab0'">Home</p>
        <p v-else-if="activeTab === 'tab1'">User Management</p>
        <p v-else-if="activeTab === 'tab2'">Org Management</p>
        <p v-else-if="activeTab === 'tab3'">System Management</p>
        <p v-else>{{ activeTab }}</p>
      </b-move-transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tabs = ref([
  { key: 'tab0', title: 'Home', noClose: true },
  { key: 'tab1', title: 'User Management' },
  { key: 'tab2', title: 'Org Management' },
  { key: 'tab3', title: 'System Management' }
])
const activeTab = ref('tab2')

const handleAdd = () => {
  // Ensure the key is unique here, otherwise the rendering will be affected
  const newTab = { key: `tab${+new Date()}`, title: 'New Tab' }
  tabs.value.push(newTab)
  // After adding, the new tab is usually selected by default; you can also choose not to select it
  activeTab.value = newTab.key
}
const handleTabClose = tab => {
  tabs.value.splice(
    tabs.value.findIndex(t => t.key === tab.key),
    1
  )
}
</script>
