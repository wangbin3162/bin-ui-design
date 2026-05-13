<template>
  <div>
    <b-button-group v-model="isCollapse" style="margin-bottom: 20px">
      <b-button :type="isCollapse ? 'default' : 'primary'" @click="isCollapse = false">
        Expand
      </b-button>
      <b-button :type="isCollapse ? 'primary' : 'default'" @click="isCollapse = true">
        Collapse
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
          <span>Nav One</span>
        </template>
        <b-menu-item-group>
          <template #title>Group One</template>
          <b-menu-item index="1-1">Option 1</b-menu-item>
          <b-menu-item index="1-2">Option 2</b-menu-item>
        </b-menu-item-group>
        <b-menu-item-group title="Grouped2">
          <b-menu-item index="1-3">Option 3</b-menu-item>
        </b-menu-item-group>
        <b-submenu index="1-4">
          <template #title>Option 4</template>
          <b-menu-item index="1-4-1">Option 1</b-menu-item>
        </b-submenu>
      </b-submenu>
      <b-menu-item index="2">
        <b-icon name="appstore-fill"></b-icon>
        <template #title>Nav Two</template>
      </b-menu-item>
      <b-menu-item index="3" disabled>
        <b-icon name="file-text"></b-icon>
        <template #title>Nav Three</template>
      </b-menu-item>
      <b-menu-item index="4">
        <b-icon name="setting-fill"></b-icon>
        <template #title>Nav Four</template>
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
