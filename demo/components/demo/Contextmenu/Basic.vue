<template>
  <div flex>
    <div
      style="width: 224px; border: 1px solid #eee; height: 150px; margin-right: 20px"
      flex="main:center cross:center"
      @contextmenu.stop.prevent="show($event)"
    >
      右键点击菜单
    </div>
    <b-contextmenu ref="contextMenuRef">
      <li>
        <b-icon name="edit" />
        编辑
      </li>
      <li>
        <b-icon name="delete" />
        删除
      </li>
    </b-contextmenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contextMenuRef = ref(null)

function show(e) {
  contextMenuRef.value?.showMenu(e)
}
</script>
