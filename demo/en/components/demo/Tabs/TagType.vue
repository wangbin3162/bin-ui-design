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
        <li @click="closeOthers">Close其他</li>
        <li @click="closeAll">Close所有</li>
      </template>
    </b-tabs>
    <div style="overflow: hidden; position: relative">
      <b-move-transition>
        <p v-if="activeTab === 'tab0'">首page</p>
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
import { Message } from 'bin-ui-design'

const tabs = ref([
  { key: 'tab0', title: '首page', noClose: true },
  { key: 'tab1', title: '用户管理' },
  { key: 'tab2', title: '组织管理' },
  { key: 'tab3', title: '系统管理' }
])
const activeTab = ref('tab2')
const selectTab = ref(null)
const tabsRef = ref(null)

const handleAdd = () => {
  // 这里需要保证key值唯一否则会影响rendershow
  const newTab = { key: `tab${+new Date()}`, title: 'New Tab' }
  tabs.value.push(newTab)
  // 增加完毕后通常Defaultselect这个New的tab，当然，你也可以不设置selectNew的tab
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
  Message('Refresh当前view:' + selectTab.value?.title)
}

function closeSelected() {
  // 这里需要callcomponent的Close选择的tag
  tabsRef.value && tabsRef.value.closeSelectedTab(selectTab.value)
}
// Close其他tags
function closeOthers() {
  tabs.value = [selectTab.value]
  activeTab.value = selectTab.value.key
  tabsRef.value && tabsRef.value.moveToCurrentTab()
}
// Close所有
function closeAll() {
  tabs.value = []
  activeTab.value = ''
  tabsRef.value && tabsRef.value.moveToCurrentTab()
}
</script>
