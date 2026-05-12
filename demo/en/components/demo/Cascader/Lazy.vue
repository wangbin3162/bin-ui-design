<template>
  <div flex>
    <div class="block" style="width: 220px; margin-right: 20px">
      <b-cascader v-model="selected" :props="props"></b-cascader>
    </div>
    <div class="block" style="width: 220px; margin-right: 20px">
      <div class="mt-5">{{ selected }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let id = 0

const selected = ref([])
const props = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map(() => ({
        value: ++id,
        label: `选项${id}`,
        leaf: level >= 2
      }))
      // 通过调用resolve将子节点数据返回，通知组件数据加载完成
      resolve(nodes)
    }, 1000)
  }
}
</script>
