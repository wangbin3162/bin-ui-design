<template>
  <div>
    <b-steps :current="2" status="error">
      <b-step title="已完成" content="这里是该步骤的描述信息"></b-step>
      <b-step title="进行中" content="这里是该步骤的描述信息"></b-step>
      <b-step title="待进行" content="这里是该步骤的描述信息"></b-step>
      <b-step title="待进行" content="这里是该步骤的描述信息"></b-step>
    </b-steps>
  </div>
</template>

<script setup lang="ts"></script>
