<template>
  <div flex="main:justify box:mean">
    <div style="padding: 0 10px">
      <b-card class="box-card" shadow="always">
        <div>总是show</div>
      </b-card>
    </div>
    <div style="padding: 0 10px">
      <b-card class="box-card">
        <div>Defaulthovershow</div>
      </b-card>
    </div>
    <div style="padding: 0 10px">
      <b-card class="box-card" shadow="never">
        <div>不show</div>
      </b-card>
    </div>
  </div>
</template>
