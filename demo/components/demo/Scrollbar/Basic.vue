<template>
  <div style="height: 300px">
    <b-scrollbar ref="componentScrollBar" style="height: 100%">
      <div class="scrollbar-demo-list">
        <div v-for="i in 12" :key="i" class="scrollbar-demo-item">滚动示例块 {{ i }}</div>
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
  background: linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%);
  color: #3a4a66;
  font-weight: 500;
}
</style>
