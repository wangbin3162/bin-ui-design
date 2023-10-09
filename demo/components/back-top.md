---
title: 返回顶部 Backtop
---

<b-back-top></b-back-top>

# 返回顶部 Backtop

当页面内容比较长滚动后需要快捷返回顶部时使用，一般放置在页面右下角位置。如果指定 `target` 使用则是针对某个容器的滚动

## 基础用法

直接用组件默认插槽插入即可

<preview path="./demo/Backtop/Basic.vue"></preview>

## scrollbar用法

如果结合 `scrollbar` 使用则不需要配置其他项

注意：如嵌套在自定义滚动组件中使用则需要将 `BackTop` 组件放置于 `Scrollbar` 组件内部

<preview path="./demo/Backtop/Scrollbar.vue"></preview>

## Props

| 参数           | 说明                                                        | 类型   | 可选值 | 默认值 |
| -------------- | ----------------------------------------------------------- | ------ | ------ | ------ |
| visible-height | 页面滚动高度达到该值时才显示BackTop                         | Number | —      | 400    |
| target         | 目标容器标识，可设置目标的class、id标识来制定滚动监听的内容 | String | —      | —      |
| bottom         | 组件距离底部的距离                                          | Number | —      | 50     |
| right          | 组件距离右部的距离                                          | Number | —      | 50     |
| duration       | 滚动动画持续时间，单位 毫秒                                 | Number | —      | 1000   |

## Events

| 事件名 | 说明           | 返回值 |
| ------ | -------------- | ------ |
| click  | 点击按钮时触发 | 无     |
