<template>
  <div>
    <b-alert show-icon>info alert</b-alert>
    <b-alert type="success" show-icon>success alert</b-alert>
    <b-alert type="warning" show-icon>warning alert</b-alert>
    <b-alert type="error" show-icon>
      error alert
      <template #desc>Custom error description copywriting.</template>
    </b-alert>
    <b-alert show-icon>
      自定义icon
      <template #icon>
        <b-icon name="smile"></b-icon>
      </template>
      <template #desc>自定义icon描述</template>
    </b-alert>
  </div>
</template>
