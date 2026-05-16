<template>
  <div style="height: 300px">
    <b-scrollbar
      ref="componentScrollBar"
      always
      noresize
      :bar-style="{ background: 'rgba(110, 23, 122, 0.3)' }"
      :bar-wrap-style="{ background: 'rgba(0, 0, 0, 0.03)' }"
    >
      <div class="scrollbar-demo-list">
        <div v-for="i in 12" :key="i" class="scrollbar-demo-item">自定义样式滚动块 {{ i }}</div>
      </div>
    </b-scrollbar>
  </div>
</template>

<style scoped>
.scrollbar-demo-list {
  padding: 4px;
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin: 10px 0;
  border-radius: 8px;
  background: linear-gradient(135deg, #f7efff 0%, #efe4ff 100%);
  color: #5c2a86;
  font-weight: 500;
}
</style>
