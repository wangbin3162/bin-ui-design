<template>
  <div style="width: 350px">
    <div class="mb-16">
      <b-progress text-inside :stroke-width="20" :percent="0"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress text-inside :stroke-width="20" :percent="70"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress
        text-inside
        :stroke-width="20"
        :percent="80"
        color="rgba(142, 113, 199, 0.7)"
      ></b-progress>
    </div>
    <div class="mb-16">
      <b-progress text-inside :stroke-width="20" :percent="100" status="success"></b-progress>
    </div>
    <div class="mb-16">
      <b-progress text-inside :stroke-width="20" :percent="50" status="exception"></b-progress>
    </div>
  </div>
</template>
