<template>
  <div style="width: 100%; height: 300px; border: 1px solid #ddd">
    <b-split :default="240" hide-line>
      <template #left>
        <div class="left-container">Left Container</div>
      </template>
      <template #right>
        <div class="right-container">Bottom Container</div>
      </template>
    </b-split>
  </div>
</template>
