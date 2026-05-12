<template>
  <b-card class="box-card" width="480px" head-tip>
    <template #header>
      <div flex="main:justify cross:center">
        <span>卡片名称</span>
        <b-icon name="dropbox" size="20" style="cursor: pointer"></b-icon>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">卡片内容</div>
  </b-card>
</template>
