<template>
  <div style="width: 400px">
    <b-upload action="//jsonplaceholder.typicode.com/posts/" multiple type="drag">
      <div
        style="padding: 20px 0; border: 1px dashed #eee; cursor: pointer"
        flex="dir:top main:center cross:center"
      >
        <p>
          <b-icon name="cloud-upload" size="52" style="color: #3399ff"></b-icon>
        </p>
        <p>Click or drag files here to upload</p>
      </div>
    </b-upload>
  </div>
</template>

<script setup lang="ts"></script>
