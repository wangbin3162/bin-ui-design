<template>
  <div>
    <b-tabs v-model="activeTab" :data="tabs"></b-tabs>
    <div style="overflow: hidden; position: relative">
      <b-move-transition>
        <p v-if="activeTab === 'tab0'">Home</p>
        <p v-else-if="activeTab === 'tab1'">User Management</p>
        <p v-else-if="activeTab === 'tab2'">Organization Management</p>
        <p v-else-if="activeTab === 'tab3'">System Management</p>
      </b-move-transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tabs = ref([
  { key: 'tab0', title: 'Home', noClose: true },
  { key: 'tab1', title: 'User Management' },
  { key: 'tab2', title: 'Organization Management' },
  { key: 'tab3', title: 'System Management' }
])
const activeTab = ref('tab2')
</script>
