<template>
  <div>
    <b-breadcrumb separator="/">
      <b-breadcrumb-item>首page</b-breadcrumb-item>
      <b-breadcrumb-item>component</b-breadcrumb-item>
      <b-breadcrumb-item>breadcrumb</b-breadcrumb-item>
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
              <b-dropdown-item>Actions台</b-dropdown-item>
              <b-dropdown-item>分析page</b-dropdown-item>
            </b-dropdown-menu>
          </template>
        </b-dropdown>
      </b-breadcrumb-item>
      <b-breadcrumb-item>component</b-breadcrumb-item>
      <b-breadcrumb-item>breadcrumb</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>
