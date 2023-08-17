<script setup lang="ts">
import builtInIcons from './assets/iconfont.json'
const iconList = builtInIcons.glyphs.map((v: { font_class: any }) => v.font_class)

const baseIcons = [
  ...iconList.filter((i: string) => !i.includes('-fill')),
  ...iconList.filter((i: string) => i.includes('-fill'))
]
console.log(baseIcons)

function click() {
  console.log('点击了图标')
}
</script>

<template>
  <div class="test-wrap">
    <div class="demo-icon">
      <i class="b-iconfont b-icon-addteam" />
      <b-icon name="read-fill" color="#ff53a5" />
      <b-icon name="loading" class="icon-is-rotating" />
      <b-icon name="formatpainter" type="button" @click="click" />
    </div>

    <ul class="icon-list">
      <li v-for="name in baseIcons" :key="name" class="list-complete-item">
        <span>
          <i :class="['b-iconfont', 'b-icon-' + name]" />
          <span class="icon-name">{{ name }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.demo-button {
  margin-bottom: 8px;
}
ul.icon-list {
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  min-height: 120px;
  border: 1px solid #eaeefb;
  li {
    display: inline-block;
    width: 125px;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    margin-right: -1px;
    margin-bottom: -1px;
    margin-left: 0;
    padding: 0;
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
      transition: 0.15s linear;
    }
    &:hover {
      span {
        color: #5cb6ff;
      }
      i {
        font-size: 40px;
      }
    }
    span {
      display: inline-block;
      vertical-align: middle;
      line-height: normal;
      font-family:
        Helvetica Neue,
        Helvetica,
        PingFang SC,
        Hiragino Sans GB,
        Microsoft YaHei,
        SimSun,
        sans-serif;
      color: #99a9bf;
      transition: color 0.15s linear;
    }
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
    }
    &:after {
      content: '';
      height: 100%;
    }
  }
}
</style>
