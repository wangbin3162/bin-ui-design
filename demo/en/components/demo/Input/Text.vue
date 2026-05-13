<template>
  <div flex="box:mean">
    <div class="input-item">
      <b-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 6 }"
        placeholder="Auto size, draggable, max 6 rows"
      ></b-input>
    </div>
    <div class="input-item">
      <b-input type="textarea" :rows="4" placeholder="Resize disabled, default 4 rows" no-resize></b-input>
    </div>
  </div>
</template>

<style scoped>
.input-item {
  width: 300px;
  margin-right: 20px;
}
</style>
