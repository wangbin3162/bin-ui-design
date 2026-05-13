<template>
  <div style="width: 100%; height: 300px; border: 1px solid #ddd">
    <b-split>
      <template #left>
        <div class="left-container">Left Container</div>
      </template>
      <template #right>
        <b-split split="horizontal" :default="100">
          <template #left>
            <div class="top-container">Top Container</div>
          </template>
          <template #right>
            <div class="bottom-container">Bottom Container</div>
          </template>
        </b-split>
      </template>
    </b-split>
  </div>
</template>
