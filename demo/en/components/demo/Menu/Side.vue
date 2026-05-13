<template>
  <b-row class="tac">
    <b-col :span="12">
      <h5 style="margin-bottom: 10px">Default Colors</h5>
      <b-menu
        default-active="2"
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
    </b-col>
    <b-col :span="12">
      <h5 style="margin-bottom: 10px">Customcolor</h5>
      <b-menu
        :unique-opened="true"
        default-active="2"
        class="b-menu-vertical-demo"
        background-color="#495662"
        text-color="#fff"
        active-text-color="#ffd04b"
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
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
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
