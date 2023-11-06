<template>
  <div>
    <b-menu
      :default-active="activeIndex"
      class="b-menu-demo"
      mode="horizontal"
      style="padding-left: 55px"
      @select="handleSelect"
    >
      <b-menu-item index="1">处理中心</b-menu-item>
      <b-submenu index="2">
        <template #title>我的工作台</template>
        <b-menu-item index="2-1">选项1</b-menu-item>
        <b-menu-item index="2-2">选项2</b-menu-item>
        <b-menu-item index="2-3">选项3</b-menu-item>
        <b-submenu index="2-4">
          <template #title>选项4</template>
          <b-menu-item index="2-4-1">选项1</b-menu-item>
          <b-menu-item index="2-4-2">选项2</b-menu-item>
          <b-menu-item index="2-4-3">选项3</b-menu-item>
        </b-submenu>
      </b-submenu>
      <b-menu-item index="3" disabled>消息中心</b-menu-item>
      <b-menu-item index="4">
        <a href="https://wangbin3162.gitee.io/bin-ui-design/" target="_blank">文档外链</a>
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
      <b-menu-item index="1">处理中心</b-menu-item>
      <b-submenu index="2">
        <template #title>我的工作台</template>
        <b-menu-item index="2-1">选项1</b-menu-item>
        <b-menu-item index="2-2">选项2</b-menu-item>
        <b-menu-item index="2-3">选项3</b-menu-item>
        <b-submenu index="2-4">
          <template #title>选项4</template>
          <b-menu-item index="2-4-1">选项1</b-menu-item>
          <b-menu-item index="2-4-2">选项2</b-menu-item>
          <b-menu-item index="2-4-3">选项3</b-menu-item>
        </b-submenu>
      </b-submenu>
      <b-menu-item index="3" disabled>消息中心</b-menu-item>
      <b-menu-item index="4">
        <a href="https://wangbin3162.gitee.io/bin-ui-design/" target="_blank">文档外链</a>
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
