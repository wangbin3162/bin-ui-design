---
title: 锚点 Anchor
---

# 锚点 Anchor

锚点主要应用于滚动导航

## 基础用法

默认是window滚动，也可以设置滚动区域的 target，并且可以设置`b-affix`来固定

<preview path="./demo/Anchor/Basic.vue"></preview>

## 自定义图标

可以通过设置`icon`来设置小圆点为自定义图标，推荐使用实心图标以达到最好的显示效果

<preview path="./demo/Anchor/Icon.vue"></preview>

## 自定义颜色

可以通过设置`activeColor`来设置自定义图标的颜色

<preview path="./demo/Anchor/Color.vue"></preview>

## 指定滚动容器

可以通过设置`target`来指定滚动区域的标识，设置的滚动容器需要设置定位

<preview path="./demo/Anchor/Target.vue"></preview>

## Props

| 参数          | 说明                                                             | 类型    | 可选值                                     | 默认值 |
| ------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------ | ------ |
| icon          | 是否设置自定义图标                                               | string  | —                                          | —      |
| icon-size     | 自定义图标大小                                                   | Number  | —                                          | —      |
| active-color  | 选中颜色                                                         | string  | primary,info,success,warning,danger,自定义 | —      |
| offset-top    | 距离窗口顶部达到指定偏移量后触发                                 | Number  | —                                          | 0      |
| bounds        | 锚点区域边界                                                     | Number  | —                                          | 5      |
| showInk       | 是否显示小圆点                                                   | Boolean | —                                          | false  |
| scroll-offset | 点击滚动的额外距离                                               | Number  | —                                          | 0      |
| target        | 指定滚动容器的标识，滚动容器需要设置position定位用于计算滚动偏移 | string  | —                                          | —      |

## Events

| 事件名 | 说明                     | 返回值 |
| ------ | ------------------------ | ------ |
| select | 点击锚点时触发，返回链接 | href   |

## AnchorLink Props

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| href  | 锚点链接 | String | —      | —      |
| title | 文字内容 | String | —      | —      |
