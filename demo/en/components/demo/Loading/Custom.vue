<template>
  <div>
    <div class="demo-loading">
      <b-loading fix>加载中</b-loading>
    </div>
    <div class="demo-loading">
      <b-loading fix show-text="loading"></b-loading>
    </div>
    <div class="demo-loading">
      <b-loading fix show-text="loading" show-icon="loading2"></b-loading>
    </div>
  </div>
</template>

<style scoped>
.demo-loading {
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-right: 5px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #cecece;
}
</style>
