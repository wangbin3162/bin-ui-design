<template>
  <div class="demo-grid">
    <p>子元素向左排Column</p>
    <b-row type="flex" justify="start" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>子元素向右排Column</p>
    <b-row type="flex" justify="end" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>子元素center排Column</p>
    <b-row type="flex" justify="center" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>子元素等宽排Column</p>
    <b-row type="flex" justify="space-between" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>子元素分散排Column</p>
    <b-row type="flex" justify="space-around" class="code-row-bg">
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
      <b-col span="4">col-4</b-col>
    </b-row>
    <p>Top</p>
    <b-row type="flex" justify="center" align="top" class="code-row-bg">
      <b-col span="4"><p style="height: 80px">col-4</p></b-col>
      <b-col span="4"><p style="height: 30px">col-4</p></b-col>
      <b-col span="4"><p style="height: 100px">col-4</p></b-col>
      <b-col span="4"><p style="height: 60px">col-4</p></b-col>
    </b-row>
    <p>底部alignment</p>
    <b-row type="flex" justify="center" align="bottom" class="code-row-bg">
      <b-col span="4"><p style="height: 80px">col-4</p></b-col>
      <b-col span="4"><p style="height: 30px">col-4</p></b-col>
      <b-col span="4"><p style="height: 100px">col-4</p></b-col>
      <b-col span="4"><p style="height: 60px">col-4</p></b-col>
    </b-row>
    <p>centeralignment</p>
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
