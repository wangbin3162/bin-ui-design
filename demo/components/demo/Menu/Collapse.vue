<template>
  <div>
    <b-button-group v-model="isCollapse" style="margin-bottom: 20px">
      <b-button :type="isCollapse ? 'default' : 'primary'" @click="isCollapse = false">
        展开
      </b-button>
      <b-button :type="isCollapse ? 'primary' : 'default'" @click="isCollapse = true">
        收起
      </b-button>
    </b-button-group>

    <b-menu
      style="width: 240px"
      default-active="1-4-1"
      :collapse="isCollapse"
      background-color="#232324"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="b-menu-vertical-demo border"
      @open="handleOpen"
      @close="handleClose"
    >
      <b-submenu index="1">
        <template #title>
          <b-icon name="location-fill"></b-icon>
          <span>导航一</span>
        </template>
        <b-menu-item-group>
          <template #title>分组一</template>
          <b-menu-item index="1-1">选项1</b-menu-item>
          <b-menu-item index="1-2">选项2</b-menu-item>
        </b-menu-item-group>
        <b-menu-item-group title="分组2">
          <b-menu-item index="1-3">选项3</b-menu-item>
        </b-menu-item-group>
        <b-submenu index="1-4">
          <template #title>选项4</template>
          <b-menu-item index="1-4-1">选项1</b-menu-item>
        </b-submenu>
      </b-submenu>
      <b-menu-item index="2">
        <b-icon name="appstore-fill"></b-icon>
        <template #title>导航二</template>
      </b-menu-item>
      <b-menu-item index="3" disabled>
        <b-icon name="file-text"></b-icon>
        <template #title>导航三</template>
      </b-menu-item>
      <b-menu-item index="4">
        <b-icon name="setting-fill"></b-icon>
        <template #title>导航四</template>
      </b-menu-item>
    </b-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isCollapse = ref(false)

function handleOpen(key, keyPath) {
  console.log(key, keyPath)
}
function handleClose(key, keyPath) {
  console.log(key, keyPath)
}
</script>

<style scoped>
.b-menu-vertical-demo {
  width: 240px;
  border-right: 1px solid #f0f0f0;
}
</style>
