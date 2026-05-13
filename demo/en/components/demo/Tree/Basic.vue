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
        <template #open>Lock</template>
        <template #close>Unlock</template>
      </b-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    title: 'Level 1-1',
    expand: true,
    children: [
      {
        title: 'Level 2-1-1',
        expand: true,
        children: [
          { title: 'Level 3-1-1-1 Very Long Field Text Very Long Field Text' },
          { title: 'Level 3-1-1-2' }
        ]
      },
      {
        title: 'Level 2-1-2',
        expand: true,
        children: [{ title: 'Level 3-1-2-1' }, { title: 'Level 3-1-2-2' }]
      }
    ]
  }
])

const lockSelect = ref(false)
function handleSelect(selected, node) {
  console.log(selected, node)
}
</script>
