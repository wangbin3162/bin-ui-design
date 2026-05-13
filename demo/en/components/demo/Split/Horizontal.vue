<template>
  <div style="width: 100%; height: 300px; border: 1px solid #ddd">
    <b-split split="horizontal" :default="100">
      <template #left>
        <div class="left-container">Top Container</div>
      </template>
      <template #right>
        <div class="right-container">Bottom Container</div>
      </template>
    </b-split>
  </div>
</template>
