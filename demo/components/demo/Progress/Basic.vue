<template>
  <div style="width: 350px">
    <div class="mb-16">
      <b-progress :percent="0"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress :percent="70" status="text" active><span>进度70</span></b-progress>
    </div>
    <div class="mb-16">
      <b-progress :percent="100" status="success"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress :percent="50" status="exception"></b-progress>
    </div>
  </div>
</template>
