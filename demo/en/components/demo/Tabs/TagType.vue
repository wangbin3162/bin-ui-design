<template>
  <div>
    <div class="mb-15">
      <b-button type="primary" plain size="small" @click="handleAdd">add tab</b-button>
    </div>
    <b-tabs
      ref="tabsRef"
      v-model="activeTab"
      :data="tabs"
      type="tag"
      closable
      context-menu
      @tab-close="handleTabClose"
      @tab-select="handleSelect"
    >
      <template #menu>
        <li @click="refreshSelected">Refresh</li>
        <li @click="closeSelected">Close</li>
        <li @click="closeOthers">Close Others</li>
        <li @click="closeAll">Close All</li>
      </template>
    </b-tabs>
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
import { Message } from 'bin-ui-design'

const tabs = ref([
  { key: 'tab0', title: 'Home', noClose: true },
  { key: 'tab1', title: 'User Management' },
  { key: 'tab2', title: 'Org Management' },
  { key: 'tab3', title: 'System Management' }
])
const activeTab = ref('tab2')
const selectTab = ref(null)
const tabsRef = ref(null)

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

function handleSelect(tab) {
  selectTab.value = { ...tab }
}

function refreshSelected() {
  Message('Refresh current view:' + selectTab.value?.title)
}

function closeSelected() {
  // Call the component's method to close the selected tab
  tabsRef.value && tabsRef.value.closeSelectedTab(selectTab.value)
}
// Close other tags
function closeOthers() {
  tabs.value = [selectTab.value]
  activeTab.value = selectTab.value.key
  tabsRef.value && tabsRef.value.moveToCurrentTab()
}
// Close all
function closeAll() {
  tabs.value = []
  activeTab.value = ''
  tabsRef.value && tabsRef.value.moveToCurrentTab()
}
</script>
