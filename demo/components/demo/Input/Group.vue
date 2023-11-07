<template>
  <div>
    <p>Props：</p>
    <div>
      <b-input prefix="bulb-fill" clearable placeholder="Enter name" style="width: auto"></b-input>
      &nbsp;
      <b-input suffix="search" clearable placeholder="Enter text" style="width: auto"></b-input>
    </div>
    <p>Slots：</p>
    <div style="margin-top: 6px">
      <b-input placeholder="Enter name" style="width: auto">
        <template #prefix>
          <b-icon name="bulb-fill"></b-icon>
        </template>
      </b-input>
      &nbsp;
      <b-input placeholder="Enter text" clearable style="width: auto">
        <template #suffix>
          <b-icon name="search"></b-icon>
        </template>
      </b-input>
    </div>
    <p>prepend/append：</p>
    <div style="margin-top: 6px">
      <b-input placeholder="Enter text" style="width: auto" clearable>
        <template #prepend>
          <b-button>prepend</b-button>
        </template>
      </b-input>
      &nbsp;
      <b-input placeholder="Enter name" style="width: auto" clearable>
        <template #append>
          <b-button>append</b-button>
        </template>
      </b-input>
      &nbsp;
      <b-input placeholder="Enter name" style="width: auto" clearable>
        <template #prepend>
          <b-select v-model="type" clearable style="width: 100px">
            <b-option lable="email" value="email"></b-option>
            <b-option lable="phone" value="phone"></b-option>
          </b-select>
        </template>
        <template #append>
          <b-button>append</b-button>
        </template>
      </b-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const type = ref('')
</script>

<style scoped>
.input-item {
  width: 300px;
  margin-right: 20px;
}
</style>
