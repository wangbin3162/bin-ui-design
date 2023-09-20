<template>
  <div style="background: #f8f8f8; padding: 20px">
    <div flex="main:justify box:mean">
      <div style="padding: 0 10px">
        <b-card class="box-card" header="卡片标题" :bordered="false">
          <div>bordered 设置是否含有边框</div>
        </b-card>
      </div>
      <div style="padding: 0 10px">
        <b-card class="box-card" header="卡片标题" radius="10px">
          <div>radius 设置圆角弧度</div>
        </b-card>
      </div>
    </div>
  </div>
</template>
