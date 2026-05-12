<template>
  <div style="width: 350px">
    <div class="mb-16">
      <b-progress :percent="70" :show-text="false"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress :percent="40" color="#76eeff"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress text-inside :stroke-width="20" :percent="60" color="#df52ff"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress :stroke-width="20" :percent="30" color="#ffcf2f"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress :percent="60" status="text" active><span>进度60</span></b-progress>
    </div>
  </div>
</template>
