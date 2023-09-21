<template>
  <div class="demo-grid">
    <b-space>
      <span>栅格间距：</span>
      <b-radio-group v-model="gutter" size="small" type="capsule">
        <b-radio :label="8">8</b-radio>
        <b-radio :label="16">16</b-radio>
        <b-radio :label="24">24</b-radio>
      </b-radio-group>
    </b-space>

    <b-row :gutter="gutter" class="gutter">
      <b-col span="6">
        <div>col-6</div>
      </b-col>
      <b-col span="6">
        <div>col-6</div>
      </b-col>
      <b-col span="6">
        <div>col-6</div>
      </b-col>
      <b-col span="6">
        <div>col-6</div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const gutter = ref(8)
</script>
