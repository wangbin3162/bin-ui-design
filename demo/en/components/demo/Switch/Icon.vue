<template>
  <div>
    <b-switch>
      <template #open><span>开</span></template>
      <template #close><span>关</span></template>
    </b-switch>
    &nbsp;
    <b-switch>
      <template #open>
        <b-icon name="check"></b-icon>
      </template>
      <template #close>
        <b-icon name="close"></b-icon>
      </template>
    </b-switch>
    <br />
    <br />
    <b-switch size="large">
      <template #open><span>开启</span></template>
      <template #close><span>关闭</span></template>
    </b-switch>
    &nbsp;
    <b-switch size="large">
      <template #open><span>ON</span></template>
      <template #close><span>OFF</span></template>
    </b-switch>
  </div>
</template>

<script setup lang="ts"></script>
