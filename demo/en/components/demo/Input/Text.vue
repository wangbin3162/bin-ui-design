<template>
  <div flex="box:mean">
    <div class="input-item">
      <b-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 6 }"
        placeholder="自动大小，可拖动，最大行数6"
      ></b-input>
    </div>
    <div class="input-item">
      <b-input type="textarea" :rows="4" placeholder="禁用拖动，默认4行" no-resize></b-input>
    </div>
  </div>
</template>

<style scoped>
.input-item {
  width: 300px;
  margin-right: 20px;
}
</style>
