<template>
  <b-row gutter="20">
    <b-col span="12">
      <b-image src="https://wangbin3162.github.io/bin-files/bg/bg2.jpg" />
      <p class="t-center">默认</p>
    </b-col>
    <b-col span="12">
      <b-image src="https://wangbin3162.github.io/bin-files/bg/bg3.jpg">
        <template #placeholder>
          <b-loading fix />
        </template>
      </b-image>
      <p class="t-center">插槽</p>
    </b-col>
  </b-row>
</template>
