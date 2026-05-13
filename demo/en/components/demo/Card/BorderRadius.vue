<template>
  <div style="background: #f8f8f8; padding: 20px">
    <div flex="main:justify box:mean">
      <div style="padding: 0 10px">
        <b-card class="box-card" header="cardTitle" :bordered="false">
          <div>bordered 设置是否含有border</div>
        </b-card>
      </div>
      <div style="padding: 0 10px">
        <b-card class="box-card" header="cardTitle" radius="10px">
          <div>radius 设置border radius弧度</div>
        </b-card>
      </div>
    </div>
  </div>
</template>
