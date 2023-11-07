<template>
  <div>
    <div flex="cross:center" class="mb-16">
      <div class="mr-16">
        <b-color-picker v-model="color" size="large"></b-color-picker>
      </div>
      <div class="mr-16">
        <b-color-picker v-model="color"></b-color-picker>
      </div>
      <div class="mr-16">
        <b-color-picker v-model="color" size="small"></b-color-picker>
      </div>
      <div>
        <b-color-picker v-model="color" size="mini"></b-color-picker>
      </div>
    </div>
    <div flex="cross:center">
      <div class="mr-16">
        <b-color-picker v-model="color" size="large" :show-label="false"></b-color-picker>
      </div>
      <div class="mr-16">
        <b-color-picker v-model="color" :show-label="false"></b-color-picker>
      </div>
      <div class="mr-16">
        <b-color-picker v-model="color" size="small" :show-label="false"></b-color-picker>
      </div>
      <div>
        <b-color-picker v-model="color" size="mini" :show-label="false"></b-color-picker>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color = ref('#1089ff')
</script>
