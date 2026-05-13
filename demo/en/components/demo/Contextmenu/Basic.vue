<template>
  <div flex>
    <div
      style="width: 224px; border: 1px solid #eee; height: 150px; margin-right: 20px"
      flex="main:center cross:center"
      @contextmenu.stop.prevent="show($event)"
    >
      Right click for menu
    </div>
    <b-contextmenu ref="contextMenuRef">
      <li>
        <b-icon name="edit" />
        Edit
      </li>
      <li>
        <b-icon name="delete" />
        Delete
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
