<template>
  <div>
    <div style="width: 200px">
      <b-popper
        trigger="click"
        theme="light"
        :show-arrow="false"
        :offset="4"
        placement="bottom-start"
        transition="zoom-in-top"
        popper-class="bin-select__popper"
        :gpu-acceleration="false"
      >
        <template #default>
          <div style="width: 120px">
            <div style="padding: 8px 10px 10px; border-bottom: 1px solid #eee">Select columns</div>
            <div v-for="(item, index) in list" :key="index" style="padding: 4px 8px">
              <b-checkbox v-model="item.checked">{{ item.name }}</b-checkbox>
            </div>
          </div>
        </template>
        <template #trigger>
          <b-button>Select columns</b-button>
        </template>
      </b-popper>
    </div>

    <pre>{{ list }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const list = ref([
  { name: 'Name', checked: false },
  { name: 'Age', checked: false },
  { name: 'Phone', checked: false },
  { name: 'Gender', checked: false },
  { name: 'Address', checked: false },
  { name: 'Remarks', checked: false }
])
</script>
