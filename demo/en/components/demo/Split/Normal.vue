<template>
  <div style="width: 100%; height: 300px; border: 1px solid #ddd">
    <b-split :default-wrap-style="['20%', '80%']">
      <template #left>
        <div class="left-container">Left Container</div>
      </template>
      <template #right>
        <b-split split="horizontal" :default="100" :default-wrap-style="['50%', '50%']">
          <template #left>
            <div class="left-container">Top Container</div>
          </template>
          <template #right>
            <div class="right-container">Bottom Container</div>
          </template>
        </b-split>
      </template>
    </b-split>
  </div>
</template>
