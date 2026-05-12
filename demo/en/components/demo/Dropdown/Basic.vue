<template>
  <div>
    <b-dropdown>
      <a href="javascript:void(0)">
        下拉菜单
        <b-icon name="down"></b-icon>
      </a>
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

    <b-dropdown style="margin-left: 20px">
      <b-button type="primary">
        下拉菜单
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown-item divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item>街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </div>
</template>
