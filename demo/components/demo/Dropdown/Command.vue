<template>
  <div>
    <b-dropdown @command="handleClick">
      <b-button>
        下拉菜单
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item name="驴肉火烧" selected>驴肉火烧</b-dropdown-item>
          <b-dropdown-item name="炸酱面" disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item name="牛肉板面">牛肉板面</b-dropdown-item>
          <b-dropdown-item :name="['徐州美食', '地锅鸡']" divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item :name="{ type: 'info', name: '街边烧烤' }">街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'bin-ui-design'

function handleClick(name) {
  console.log(name)
  Message('click on item: ' + JSON.stringify(name))
}
</script>
