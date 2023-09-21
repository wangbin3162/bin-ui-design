<template>
  <div style="width: 100%; height: 300px; border: 1px solid #ddd">
    <b-split split="horizontal" :default="100">
      <template #left>
        <div class="left-container">上边容器</div>
      </template>
      <template #right>
        <div class="right-container">下面容器</div>
      </template>
    </b-split>
  </div>
</template>
