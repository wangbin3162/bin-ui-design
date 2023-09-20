<template>
  <div style="background: #f8f8f8; padding: 20px">
    <div flex="main:justify box:mean">
      <div style="padding: 0 10px">
        <b-card class="box-card" header="卡片标题">
          <div v-for="o in 4" :key="o" class="text item">
            {{ '这是内容区域 ' + o }}
          </div>
        </b-card>
      </div>
      <div style="padding: 0 10px">
        <b-card class="box-card" header="卡片标题" divider="no">
          <div v-for="o in 4" :key="o" class="text item">
            {{ '这是内容区域 ' + o }}
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
