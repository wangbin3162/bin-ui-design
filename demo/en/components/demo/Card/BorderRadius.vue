<template>
  <div style="background: #f8f8f8; padding: 20px">
    <div flex="main:justify box:mean">
      <div style="padding: 0 10px">
        <b-card class="box-card" header="cardTitle" :bordered="false">
          <div>bordered controls whether to show a border</div>
        </b-card>
      </div>
      <div style="padding: 0 10px">
        <b-card class="box-card" header="cardTitle" radius="10px">
          <div>radius sets the border radius value</div>
        </b-card>
      </div>
    </div>
  </div>
</template>
