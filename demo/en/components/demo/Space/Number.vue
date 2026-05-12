<template>
  <b-space direction="vertical" alignment="start" :size="30">
    <b-radio-group v-model="size" type="capsule">
      <b-radio :label="8">8</b-radio>
      <b-radio :label="16">16</b-radio>
      <b-radio :label="24">24</b-radio>
      <b-radio :label="32">32</b-radio>
      <b-radio :label="40">40</b-radio>
    </b-radio-group>

    <b-space wrap :size="size">
      <b-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <b-button type="text">Operation button</b-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </b-card>
    </b-space>
  </b-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const size = ref(16)
</script>
