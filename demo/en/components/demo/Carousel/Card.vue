<template>
  <b-carousel :interval="4000" type="card" height="200px" loop>
    <b-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </b-carousel-item>
  </b-carousel>
</template>

<script setup lang="ts"></script>

<style scoped>
.demo-carousel-panel {
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #99a9bf;
}
</style>
