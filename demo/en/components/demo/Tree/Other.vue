<template>
  <div flex>
    <div class="p10" style="width: 300px; border-right: 1px solid #eeeeee">
      <b-tag type="primary">多选</b-tag>
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
      <b-tag type="primary">附加图标</b-tag>
      <b-divider style="margin: 8px 0"></b-divider>
      <b-tree :data="data1"></b-tree>
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
const data1 = ref([
  {
    title: '导航',
    icon: 'apartment',
    expand: true,
    children: [
      { title: '导航菜单', icon: 'menu' },
      { title: '图钉', icon: 'pushpin' },
      { title: '锚点', icon: 'attachment' },
      { title: '面包屑', icon: 'right' },
      { title: '标签页', icon: 'project' }
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
