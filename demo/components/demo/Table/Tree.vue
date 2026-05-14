<template>
  <div>
    <p class="mb-12">基础树表默认展开华东分部，第二张表演示受控展开 keys 和固定列。</p>

    <b-table
      class="mb-24"
      border
      :columns="basicColumns"
      :data="treeData"
      row-key="id"
      expand-column-key="name"
      :default-expanded-row-keys="[1001]"
    ></b-table>

    <div class="mb-12">
      <b-button size="small" @click="expandedRowKeys = [1001, 1002]">展开全部</b-button>
      <b-button size="small" class="ml-8" @click="expandedRowKeys = []">全部收起</b-button>
      <b-button size="small" class="ml-8" @click="expandedRowKeys = [1001]">
        恢复默认
      </b-button>
    </div>
    <div class="mb-12">当前展开 keys：{{ expandedRowKeys.join(', ') || '-' }}</div>

    <b-table
      border
      height="260"
      :columns="fixedColumns"
      :data="treeData"
      row-key="id"
      expand-column-key="name"
      :expanded-row-keys="expandedRowKeys"
      @update:expanded-row-keys="expandedRowKeys = $event"
    ></b-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const basicColumns = [
  {
    title: '部门 / 成员',
    key: 'name',
    minWidth: 220
  },
  {
    title: '城市',
    key: 'city',
    minWidth: 140
  },
  {
    title: '本月签约',
    key: 'amount',
    width: 140,
    sortable: true
  }
]

const fixedColumns = [
  {
    title: '部门 / 成员',
    key: 'name',
    minWidth: 220,
    fixed: 'left'
  },
  {
    title: '城市',
    key: 'city',
    minWidth: 140
  },
  {
    title: '角色',
    key: 'role',
    minWidth: 140
  },
  {
    title: '本月签约',
    key: 'amount',
    width: 140,
    sortable: true
  },
  {
    title: '状态',
    key: 'status',
    width: 120,
    fixed: 'right'
  }
]

const treeData = [
  {
    id: 1001,
    name: '华东分部',
    city: '上海',
    role: '区域',
    amount: 286,
    status: '正常',
    children: [
      {
        id: 1101,
        name: '零售组',
        city: '上海',
        role: '团队',
        amount: 168,
        status: '正常',
        children: [
          {
            id: 1111,
            name: '王小明',
            city: '上海',
            role: '销售',
            amount: 92,
            status: '活跃'
          },
          {
            id: 1112,
            name: '李小雨',
            city: '苏州',
            role: '销售',
            amount: 76,
            status: '活跃'
          }
        ]
      },
      {
        id: 1102,
        name: '渠道组',
        city: '杭州',
        role: '团队',
        amount: 118,
        status: '正常',
        children: [
          {
            id: 1121,
            name: '周小北',
            city: '杭州',
            role: '销售',
            amount: 63,
            status: '跟进中'
          },
          {
            id: 1122,
            name: '陈小南',
            city: '宁波',
            role: '销售',
            amount: 55,
            status: '跟进中'
          }
        ]
      }
    ]
  },
  {
    id: 1002,
    name: '华南分部',
    city: '深圳',
    role: '区域',
    amount: 214,
    status: '正常',
    children: [
      {
        id: 1201,
        name: '客户成功组',
        city: '深圳',
        role: '团队',
        amount: 126,
        status: '正常',
        children: [
          {
            id: 1211,
            name: '张小川',
            city: '深圳',
            role: '销售',
            amount: 74,
            status: '活跃'
          },
          {
            id: 1212,
            name: '赵小林',
            city: '广州',
            role: '销售',
            amount: 52,
            status: '活跃'
          }
        ]
      }
    ]
  }
]

const expandedRowKeys = ref([1001])
</script>
