<template>
  <b-space>
    <b-dropdown trigger="hover">
      <b-button type="primary">
        hover 触发
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item name="驴肉火烧" selected>驴肉火烧</b-dropdown-item>
          <b-dropdown-item name="炸酱面" disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item name="牛肉板面">牛肉板面</b-dropdown-item>
          <b-dropdown-item name="地锅鸡" divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item name="街边烧烤">街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
    <b-dropdown>
      <b-button type="primary">
        click 触发
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item selected>驴肉火烧</b-dropdown-item>
          <b-dropdown-item disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown-item divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item>街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
    <b-dropdown trigger="contextmenu">
      <b-button type="primary">
        右键 触发
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item>返回</b-dropdown-item>
          <b-dropdown-item style="color: #ed4014">删除</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </b-space>
</template>
