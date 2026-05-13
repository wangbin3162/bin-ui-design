---
title: Icon
---

<b-back-top></b-back-top>

# Icon

icon这里use了阿里[iconfont](https://www.iconfont.cn/)icon库生成了icon，icon来源于开源项目 ionicons，结合整理添加了一些其他的icon。

i tag可以直接设置style类名为 `b-iconfont b-icon-xxx` 来use即可。icon component可以只设置 name 来实用。 设置 `icon-is-rotating` Can enable 旋转

<div class="demo-icon">
  <i class="b-iconfont b-icon-addteam"></i>
  <b-icon name="read-fill" color="#ff53a5"></b-icon>
  <b-icon name="loading" class="icon-is-rotating"></b-icon>
  <b-icon name="formatpainter" type="button" ></b-icon>
  <p flex="cross:center">
    icon选择器：
  <div style="width: 220px;">
    <b-icon-select></b-icon-select>
  </div>
  </p>
</div>

## 所有icon

<script lang="ts" setup>
import builtInIcons from '../.vitepress/utils/iconfont.json'
import { Utils, Message } from 'bin-ui-design'

const iconList = builtInIcons.glyphs.map(v => v.font_class)
const  baseIcons = [
  ...iconList.filter(i => !i.includes('-fill')),
  ...iconList.filter(i => i.includes('-fill')),
]

const copy = name =>  {
  const str = name
  Utils.util.copy(str)
  console.log(str)
   Message.info(`已复制iconiconName [ ${str} ]`)
}

const copyComp = name => {
  const str = `<b-icon name="${name}"></b-icon>`
  Utils.util.copy(str)
  console.log(str)
  
   Message.info(`已复制iconcomponent [ ${str} ]`)
}

</script>

<p>  收录了  <span style="color: red">{{ baseIcons.length }}</span>  个icon</p>

<p class="tip">click复制iconName，右键复制component代码</p>

<ul class="icon-list">
  <li
    v-for="name in baseIcons"
    :key="name"
    class="list-complete-item"
    @click="copy(name)"
    @contextmenu.stop.prevent="copyComp(name)"
  >
    <span>
      <i :class="['b-iconfont', 'b-icon-' + name]"></i>
      <span class="icon-name">{{ name }}</span>
    </span>
  </li>
</ul>

## Props

| Parameter  | Description                       | Type            | Options   | Default |
| ----- | -------------------------- | --------------- | -------- | ------ |
| name  | iconName                   | String          | icon集合 | —      |
| size  | size                       | Number / String | 数字px | —      |
| type  | 设置为button时可以hoverclick | String          | button   | —      |
| color | iconcolor值                 | String          | —        | —      |

<style scoped>
.demo-icon {
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 20px;
  overflow: hidden;
  > i {
    font-size: 22px;
    margin: 0 8px;
  }
}
.tip {
  font-size: 12px;
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
      transition: .15s linear;
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
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
      color: #99a9bf;
      transition: color .15s linear;
    }
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
    }
    &:after {
      content: "";
      height: 100%;
    }
  }
}
</style>
