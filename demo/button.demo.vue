<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false)
function click() {
  console.log('测试按钮')
}
</script>

<template>
  <div class="test-wrap">
    <div class="demo-button">
      <b-button-group>
        <b-button type="primary" icon="left">上一页</b-button>
        <b-button type="primary">
          下一页
          <i class="b-iconfont b-icon-right" />
        </b-button>
      </b-button-group>
      <b-button-group>
        <b-button>小样</b-button>
        <b-button>你</b-button>
        <b-button>瞅啥</b-button>
      </b-button-group>
      <b-button-group>
        <b-button type="success" icon="star" />
        <b-button type="info" icon="heatmap" />
        <b-button type="danger" icon="edit" />
      </b-button-group>

      <b-button-group vertical>
        <b-button>小样</b-button>
        <b-button>你</b-button>
        <b-button>瞅啥</b-button>
      </b-button-group>
    </div>
    <div class="demo-button">
      <b-button type="primary" :loading="loading" icon="reload" @click="loading = true">
        Click me!
      </b-button>
      <b-button @click="loading = false">stop</b-button>
    </div>

    <div class="demo-button">
      <b-button icon="search">search</b-button>
      <b-button icon="plus-circle">create</b-button>
      <b-button icon="check-circle" type="primary">check</b-button>
      <b-button icon="delete" type="danger">delete</b-button>
    </div>
    <div class="demo-button" flex="cross:center">
      <b-button v-waves @click="click()">Default</b-button>
      <b-button v-waves dashed>Dashed</b-button>
      <b-button background>Background</b-button>
      <b-button v-waves type="primary">Primary</b-button>
      <b-button type="success">Success</b-button>
      <b-button type="info">Info</b-button>
      <b-button type="warning">Warning</b-button>
      <b-button type="danger">Danger</b-button>
    </div>
    <div class="demo-button">
      <b-button plain>plain</b-button>
      <b-button v-waves type="primary" plain>Primary</b-button>
      <b-button type="success" plain>Success</b-button>
      <b-button type="info" plain>Info</b-button>
      <b-button type="warning" plain>Warning</b-button>
      <b-button type="danger" plain>Danger</b-button>
    </div>

    <div class="demo-button">
      <b-button type="primary" round>Primary</b-button>
      <b-button type="success" round>Success</b-button>
      <b-button type="info" round>Info</b-button>
      <b-button type="warning" round>Warning</b-button>
      <b-button type="danger" round>Danger</b-button>
    </div>

    <div class="demo-button">
      <b-button type="primary" dashed>Primary</b-button>
      <b-button type="success" dashed>Success</b-button>
      <b-button type="info" dashed>Info</b-button>
      <b-button type="warning" dashed>Warning</b-button>
      <b-button type="danger" dashed>Danger</b-button>
    </div>

    <div class="demo-button" style="background: #cad4d4; padding: 10px 6px">
      <b-button type="primary" transparent size="small">Primary</b-button>
      <b-button type="success" transparent size="small">Success</b-button>
      <b-button type="info" transparent size="small">Info</b-button>
      <b-button type="warning" transparent size="small">Warning</b-button>
      <b-button type="danger" transparent size="small">Danger</b-button>
    </div>

    <div class="demo-button" flex="cross:center">
      <b-button disabled>Default</b-button>
      <b-button dashed disabled>Dashed</b-button>
      <b-button background disabled>Background</b-button>
      <b-button loading disabled>Loading</b-button>
    </div>
    <div class="demo-button">
      <b-button type="primary" disabled>Primary</b-button>
      <b-button type="success" disabled>Success</b-button>
      <b-button type="info" disabled>Info</b-button>
      <b-button type="warning" disabled>Warning</b-button>
      <b-button type="danger" disabled>Danger</b-button>
    </div>
    <div class="demo-button">
      <b-button type="primary" plain disabled>Primary</b-button>
      <b-button type="success" plain disabled>Success</b-button>
      <b-button type="info" plain disabled>Info</b-button>
      <b-button type="warning" plain disabled>Warning</b-button>
      <b-button type="danger" plain disabled>Danger</b-button>
    </div>
    <div class="demo-button">
      <b-button type="primary" round disabled>Primary</b-button>
      <b-button type="success" round disabled>Success</b-button>
      <b-button type="info" round disabled>Info</b-button>
      <b-button type="warning" round disabled>Warning</b-button>
      <b-button type="danger" round disabled>Danger</b-button>
    </div>
    <div class="demo-button">
      <b-button type="primary" dashed disabled>Primary</b-button>
      <b-button type="success" dashed disabled>Success</b-button>
      <b-button type="info" dashed disabled>Info</b-button>
      <b-button type="warning" dashed disabled>Warning</b-button>
      <b-button type="danger" dashed disabled>Danger</b-button>
    </div>
    <div class="demo-button" style="background: #cad4d4; padding: 10px">
      <b-button type="primary" transparent size="small" disabled>Primary</b-button>
      <b-button type="success" transparent size="small" disabled>Success</b-button>
      <b-button type="info" transparent size="small" disabled>Info</b-button>
      <b-button type="warning" transparent size="small" disabled>Warning</b-button>
      <b-button type="danger" transparent size="small" disabled>Danger</b-button>
    </div>
    <div>
      <b-button type="text">文字按钮</b-button>
      <b-button type="text" text-color="primary">Primary</b-button>
      <b-button type="text" text-color="success">Success</b-button>
      <b-button type="text" text-color="info">Info</b-button>
      <b-button type="text" text-color="warning">Warning</b-button>
      <b-button type="text" text-color="danger">Danger</b-button>
      <b-button type="text" text-color="#b37feb">多彩按钮</b-button>
      <b-button type="text" text-color="#f759ab">多彩按钮2</b-button>
    </div>
    <div>
      <b-button type="text" disabled>禁用按钮</b-button>
      <b-button type="text" text-color="primary" disabled>Primary</b-button>
      <b-button type="text" text-color="success" disabled>Success</b-button>
      <b-button type="text" text-color="info" disabled>Info</b-button>
      <b-button type="text" text-color="warning" disabled>Warning</b-button>
      <b-button type="text" text-color="danger" disabled>Danger</b-button>
      <b-button type="text" text-color="#b37feb" disabled>多彩按钮</b-button>
      <b-button type="text" text-color="#f759ab" disabled>多彩按钮2</b-button>
    </div>
    <div class="demo-button">
      <b-button size="large">Large</b-button>
      <b-button>Default</b-button>
      <b-button size="small">Small</b-button>
      <b-button size="mini">Mini</b-button>
    </div>
    <div class="demo-button">
      <b-button size="large" round>Large</b-button>
      <b-button round>Default</b-button>
      <b-button size="small" round>Small</b-button>
      <b-button size="mini" round>Mini</b-button>
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  margin-bottom: 8px;
}
</style>
