<template>
  <div>
    <b-dropdown placement="right-start">
      <a href="javascript:void(0)">
        徐州小吃
        <b-icon name="down"></b-icon>
      </a>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown placement="right-start">
            <b-dropdown-item>
              特色菜系
              <b-icon name="right"></b-icon>
            </b-dropdown-item>
            <template #dropdown>
              <b-dropdown-menu>
                <b-dropdown-item>地锅鸡</b-dropdown-item>
                <b-dropdown-item>狗肉</b-dropdown-item>
                <b-dropdown-item>把子肉</b-dropdown-item>
              </b-dropdown-menu>
            </template>
          </b-dropdown>
          <b-dropdown-item>过桥米线</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </div>
</template>
