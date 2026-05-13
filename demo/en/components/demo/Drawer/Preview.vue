<template>
  <div>
    <b-button type="primary" @click="value = true">Info Preview</b-button>
    <b-drawer v-model="value" :show-close="false" width="640">
      <p :style="pStyle">User Info</p>
      <p :style="pStyle">Personal Info</p>
      <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>Name: wangbin</span>
          <span>Phone: +86 1762516xxxx</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>City: XuzhouCity</span>
          <span>District: Gulou District</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>Date of Birth: 1990-04</span>
          <span>Occupation: Web Frontend</span>
        </p>
      </div>
      <b-divider></b-divider>
      <p :style="pStyle">Company</p>
      <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>Name: xxxx Co., Ltd.</span>
          <span>Phone: +86 1762516xxxx</span>
        </p>
        <p flex="box:mean" class="mb-10">
          <span>Address: No.88, xx Street, xx District, Xuzhou City</span>
          <span>Phone: +86 1762516xxxx</span>
        </p>
      </div>
      <b-divider></b-divider>
      <p :style="pStyle">Contact Us</p>
      <div class="demo-drawer-profile">
        <p flex="box:mean" class="mb-10">
          <span>Email: 316281400@qq.com</span>
          <span>Phone: +86 1762516xxxx</span>
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
