<template>
  <div>
    <b-steps :current="2" status="error">
      <b-step title="Completed" content="Description of this step"></b-step>
      <b-step title="In Progress" content="Description of this step"></b-step>
      <b-step title="Pending" content="Description of this step"></b-step>
      <b-step title="Pending" content="Description of this step"></b-step>
    </b-steps>
  </div>
</template>

<script setup lang="ts"></script>
