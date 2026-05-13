<template>
  <div flex>
    <div class="p10" style="width: 300px; border-right: 1px solid #eeeeee">
      <b-tag type="primary">Multi-select</b-tag>
      <b-divider style="margin: 8px 0"></b-divider>
      <b-tree
        :data="data"
        show-checkbox
        multiple
        @select-change="handleSelect"
        @check-change="handleChecked"
      ></b-tree>
    </div>
    <div class="p10" style="width: 300px; border-right: 1px solid #eeeeee">
      <b-tag type="primary">附加icon</b-tag>
      <b-divider style="margin: 8px 0"></b-divider>
      <b-tree :data="data1"></b-tree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    title: 'Level 1 1',
    expand: true,
    children: [
      {
        title: 'Level 2 1-1',
        expand: true,
        children: [
          { title: 'Level 3 1-1-1 我是超长字段我是超长字段我是超长字段' },
          { title: 'Level 3 1-1-2' }
        ]
      },
      {
        title: 'Level 2 1-2',
        expand: true,
        children: [{ title: 'Level 3 1-2-1' }, { title: 'Level 3 1-2-2' }]
      }
    ]
  }
])
const data1 = ref([
  {
    title: 'navigation',
    icon: 'apartment',
    expand: true,
    children: [
      { title: 'navigationmenu', icon: 'menu' },
      { title: '图钉', icon: 'pushpin' },
      { title: 'anchor', icon: 'attachment' },
      { title: 'breadcrumb', icon: 'right' },
      { title: 'Tab', icon: 'project' }
    ]
  }
])

function handleSelect(selected, node) {
  console.log(selected, node)
}

function handleChecked(checked, node) {
  console.log(checked, node)
}
</script>
