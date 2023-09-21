<template>
  <div>
    <p>子元素向左排列</p>
    <b-row type="flex" justify="start" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>子元素向右排列</p>
    <b-row type="flex" justify="end" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>子元素居中排列</p>
    <b-row type="flex" justify="center" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>子元素等宽排列</p>
    <b-row type="flex" justify="space-between" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>子元素分散排列</p>
    <b-row type="flex" justify="space-around" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>顶部对齐</p>
    <b-row type="flex" justify="center" align="top" class="code-row-bg">
      <b-col span="4"><p style="height: 80px">col-4</p></b-col>
      <b-col span="4"><p style="height: 30px">col-4</p></b-col>
      <b-col span="4"><p style="height: 100px">col-4</p></b-col>
      <b-col span="4"><p style="height: 60px">col-4</p></b-col>
    </b-row>
    <p>底部对齐</p>
    <b-row type="flex" justify="center" align="bottom" class="code-row-bg">
      <b-col span="4"><p style="height: 80px">col-4</p></b-col>
      <b-col span="4"><p style="height: 30px">col-4</p></b-col>
      <b-col span="4"><p style="height: 100px">col-4</p></b-col>
      <b-col span="4"><p style="height: 60px">col-4</p></b-col>
    </b-row>
    <p>居中对齐</p>
    <b-row type="flex" justify="center" align="middle" class="code-row-bg">
      <b-col span="4"><p style="height: 80px">col-4</p></b-col>
      <b-col span="4"><p style="height: 30px">col-4</p></b-col>
      <b-col span="4"><p style="height: 100px">col-4</p></b-col>
      <b-col span="4"><p style="height: 60px">col-4</p></b-col>
    </b-row>
  </div>
</template>

<style scoped>
.code-row-bg {
  background: #eee;
  p {
    color: #fff;
  }
}
</style>
