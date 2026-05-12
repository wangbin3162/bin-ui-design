<template>
  <div flex="box:mean">
    <div class="input-item">
      <b-input :maxlength="10" show-word-count></b-input>
    </div>
    <div class="input-item">
      <b-input type="textarea" :rows="2" no-resize show-word-count></b-input>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.input-item {
  width: 300px;
  margin-right: 20px;
}
</style>
