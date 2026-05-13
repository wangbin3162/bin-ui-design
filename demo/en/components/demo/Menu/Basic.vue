<template>
  <div>
    <b-menu
      :default-active="activeIndex"
      class="b-menu-demo"
      mode="horizontal"
      style="padding-left: 55px"
      @select="handleSelect"
    >
      <b-menu-item index="1">Processing Center</b-menu-item>
      <b-submenu index="2">
        <template #title>My Workspace</template>
        <b-menu-item index="2-1">Option 1</b-menu-item>
        <b-menu-item index="2-2">Option 2</b-menu-item>
        <b-menu-item index="2-3">Option 3</b-menu-item>
        <b-submenu index="2-4">
          <template #title>Option 4</template>
          <b-menu-item index="2-4-1">Option 1</b-menu-item>
          <b-menu-item index="2-4-2">Option 2</b-menu-item>
          <b-menu-item index="2-4-3">Option 3</b-menu-item>
        </b-submenu>
      </b-submenu>
      <b-menu-item index="3" disabled>Message Center</b-menu-item>
      <b-menu-item index="4">
        <a href="https://wangbin3162.github.io/bin-ui-design/" target="_blank">Documentation</a>
      </b-menu-item>
    </b-menu>
    <b-divider />
    <b-menu
      :default-active="activeIndex2"
      class="b-menu-demo"
      mode="horizontal"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="padding-left: 55px"
      @select="handleSelect"
    >
      <b-menu-item index="1">Processing Center</b-menu-item>
      <b-submenu index="2">
        <template #title>My Workspace</template>
        <b-menu-item index="2-1">Option 1</b-menu-item>
        <b-menu-item index="2-2">Option 2</b-menu-item>
        <b-menu-item index="2-3">Option 3</b-menu-item>
        <b-submenu index="2-4">
          <template #title>Option 4</template>
          <b-menu-item index="2-4-1">Option 1</b-menu-item>
          <b-menu-item index="2-4-2">Option 2</b-menu-item>
          <b-menu-item index="2-4-3">Option 3</b-menu-item>
        </b-submenu>
      </b-submenu>
      <b-menu-item index="3" disabled>Message Center</b-menu-item>
      <b-menu-item index="4">
        <a href="https://wangbin3162.github.io/bin-ui-design/" target="_blank">Documentation</a>
      </b-menu-item>
    </b-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')

function handleSelect(key, keyPath) {
  console.log(key, keyPath)
}
</script>
