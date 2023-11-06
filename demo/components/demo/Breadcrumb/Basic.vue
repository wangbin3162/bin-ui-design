<template>
  <div>
    <b-breadcrumb separator="/">
      <b-breadcrumb-item>首页</b-breadcrumb-item>
      <b-breadcrumb-item>组件</b-breadcrumb-item>
      <b-breadcrumb-item>面包屑</b-breadcrumb-item>
    </b-breadcrumb>
    <b-divider />
    <b-breadcrumb separator="/">
      <b-breadcrumb-item>
        <b-dropdown>
          <a>
            Dashboard
            <b-icon name="down"></b-icon>
          </a>
          <template #dropdown>
            <b-dropdown-menu>
              <b-dropdown-item>操作台</b-dropdown-item>
              <b-dropdown-item>分析页</b-dropdown-item>
            </b-dropdown-menu>
          </template>
        </b-dropdown>
      </b-breadcrumb-item>
      <b-breadcrumb-item>组件</b-breadcrumb-item>
      <b-breadcrumb-item>面包屑</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>
