<template>
  <div style="height: 500px; overflow: auto; border: 1px solid #eee">
    <b-scrollbar style="height: 100%" wrap-class="scrollbar-box">
      <div style="padding: 20px">
        <div v-for="item in 80" :key="item" ref="item">{{ item }}:这是用来撑开内容的行...</div>
      </div>
      <b-back-top target=".scrollbar-box" :visible-height="200">
        <b-button type="info" size="large" icon="up"></b-button>
      </b-back-top>
    </b-scrollbar>
  </div>
</template>
