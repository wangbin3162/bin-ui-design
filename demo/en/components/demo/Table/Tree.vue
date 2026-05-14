<template>
  <div>
    <p class="mb-12">
      The first table expands East China by default. The second table shows controlled
      expanded keys with fixed columns.
    </p>

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
      <b-button size="small" @click="expandedRowKeys = [1001, 1002]">Expand all</b-button>
      <b-button size="small" class="ml-8" @click="expandedRowKeys = []">Collapse all</b-button>
      <b-button size="small" class="ml-8" @click="expandedRowKeys = [1001]">
        Reset default
      </b-button>
    </div>
    <div class="mb-12">Expanded keys: {{ expandedRowKeys.join(', ') || '-' }}</div>

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
    title: 'Department / Member',
    key: 'name',
    minWidth: 220
  },
  {
    title: 'City',
    key: 'city',
    minWidth: 140
  },
  {
    title: 'Monthly Deals',
    key: 'amount',
    width: 140,
    sortable: true
  }
]

const fixedColumns = [
  {
    title: 'Department / Member',
    key: 'name',
    minWidth: 220,
    fixed: 'left'
  },
  {
    title: 'City',
    key: 'city',
    minWidth: 140
  },
  {
    title: 'Role',
    key: 'role',
    minWidth: 140
  },
  {
    title: 'Monthly Deals',
    key: 'amount',
    width: 140,
    sortable: true
  },
  {
    title: 'Status',
    key: 'status',
    width: 120,
    fixed: 'right'
  }
]

const treeData = [
  {
    id: 1001,
    name: 'East China',
    city: 'Shanghai',
    role: 'Region',
    amount: 286,
    status: 'Stable',
    children: [
      {
        id: 1101,
        name: 'Retail Team',
        city: 'Shanghai',
        role: 'Team',
        amount: 168,
        status: 'Stable',
        children: [
          {
            id: 1111,
            name: 'Mia Wang',
            city: 'Shanghai',
            role: 'Sales',
            amount: 92,
            status: 'Active'
          },
          {
            id: 1112,
            name: 'Iris Li',
            city: 'Suzhou',
            role: 'Sales',
            amount: 76,
            status: 'Active'
          }
        ]
      },
      {
        id: 1102,
        name: 'Channel Team',
        city: 'Hangzhou',
        role: 'Team',
        amount: 118,
        status: 'Stable',
        children: [
          {
            id: 1121,
            name: 'Noah Zhou',
            city: 'Hangzhou',
            role: 'Sales',
            amount: 63,
            status: 'Following up'
          },
          {
            id: 1122,
            name: 'Lena Chen',
            city: 'Ningbo',
            role: 'Sales',
            amount: 55,
            status: 'Following up'
          }
        ]
      }
    ]
  },
  {
    id: 1002,
    name: 'South China',
    city: 'Shenzhen',
    role: 'Region',
    amount: 214,
    status: 'Stable',
    children: [
      {
        id: 1201,
        name: 'Customer Success',
        city: 'Shenzhen',
        role: 'Team',
        amount: 126,
        status: 'Stable',
        children: [
          {
            id: 1211,
            name: 'Leo Zhang',
            city: 'Shenzhen',
            role: 'Sales',
            amount: 74,
            status: 'Active'
          },
          {
            id: 1212,
            name: 'Evan Zhao',
            city: 'Guangzhou',
            role: 'Sales',
            amount: 52,
            status: 'Active'
          }
        ]
      }
    ]
  }
]

const expandedRowKeys = ref([1001])
</script>
