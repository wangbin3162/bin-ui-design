<template>
  <div>
    <b-button type="primary" @click="value = true">信息预览</b-button>
    <b-drawer v-model="value" :show-close="false" width="640">
      <p :style="pStyle">用户信息</p>
      <p :style="pStyle">个人信息</p>
      <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>名称: wangbin</span>
          <span>手机号: +86 1762516xxxx</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>城市: 徐州市</span>
          <span>区: 鼓楼区</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>出生年月: 1990-04</span>
          <span>职业: web前端</span>
        </p>
      </div>
      <b-divider></b-divider>
      <p :style="pStyle">公司</p>
      <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>名称: xxxx有限公司</span>
          <span>手机号: +86 1762516xxxx</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>地址: 徐州市xx区xx街道88号</span>
          <span>电话: +86 1762516xxxx</span>
        </p>
      </div>
      <b-divider></b-divider>
      <p :style="pStyle">联系我们</p>
      <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>Email: 316281400@qq.com</span>
          <span>手机号: +86 1762516xxxx</span>
        </p>
        <p class="mb-10">
          github:
          <a href="https://github.com/wangbin3162/bin-ui-design" target="_blank">
            https://github.com/wangbin3162/bin-ui-design-design
          </a>
        </p>
      </div>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)

const pStyle = {
  fontSize: '16px',
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  marginBottom: '16px'
}
</script>
