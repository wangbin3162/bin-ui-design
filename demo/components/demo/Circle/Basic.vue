<template>
  <div flex="main:justify" style="width: 400px">
    <b-circle :percent="80">
      <span class="demo-circle-inner" style="font-size: 24px">80%</span>
    </b-circle>
    <b-circle :percent="100" stroke-color="#5cb85c">
      <b-icon name="check" size="30" style="color: #5cb85c"></b-icon>
    </b-circle>
    <b-circle :percent="35" stroke-color="#ff5500">
      <span class="demo-circle-inner">
        <b-icon name="close" size="30" style="color: #ff5500"></b-icon>
      </span>
    </b-circle>
  </div>
</template>
