<template>
  <div class="doc-table">
    <table cellspacing="0" cellpadding="0" border="0">
      <colgroup>
        <col
          v-for="(title, index) in columns[type].title"
          :key="index"
          :width="columns[type].col[index] ?? 500"
        />
      </colgroup>
      <thead>
        <tr>
          <th v-for="(title, index) in columns[type].title" :key="index">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(col, colIndex) in cols(row)" :key="colIndex">{{ col }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// 暂时先用于实现，后续等待table表格实现完成后可以进行替换
interface DocTableProps {
  type: 'props' | 'events' | 'slot'
  data: string[]
}
defineOptions({
  name: 'DocTable'
})

defineProps<DocTableProps>()

const columns = {
  props: {
    title: ['参数', '说明', '类型', '可选值', '默认值'],
    col: [160, null, 160, null, 140]
  },
  events: {
    title: ['事件名', '说明', '返回值'],
    col: [160]
  },
  slot: {
    title: ['名称', '说明'],
    col: [160]
  }
}

const cols = (row: string) => row.split(' | ')
</script>

<style>
.vp-doc table {
  table-layout: auto;
  width: 100%;
}
.vp-doc tr:nth-child(2n) {
  background-color: #fff;
}
</style>
