---
title: 滚动组件 Scrollbar
---

<b-back-top></b-back-top>

# 滚动组件 Scrollbar

由于默认浏览器滚动条极为丑陋切不同浏览器之间样式不统一，故封装一个滚动组件用于实现滚动

## 基础用法

使用`b-scrollbar`进行包裹，默认`slot`为内容显示区域,如当前示例所包含的滚动结构如下:

<preview path="./demo/Scrollbar/Basic.vue"></preview>

注意：如果内容区域不超过容器高度则不会生成滚动条

## 最大高度

通过 `max-height` 可以限制滚动区域的最大高度，只有内容超出时才会出现滚动条。

<preview path="./demo/Scrollbar/MaxHeight.vue"></preview>

## 手动滚动

可以通过组件暴露的 `setScrollTop`、`setScrollLeft` 方法手动控制滚动位置。

<preview path="./demo/Scrollbar/ManualScroll.vue"></preview>

## 始终显示

使用`always`可以让滚动条始终显示出来

<preview path="./demo/Scrollbar/Always.vue"></preview>

## 定制滚动条的样式

可以借助不同的props来定制滚动条的样式，也可以使用css来实现样式修改。

<preview path="./demo/Scrollbar/Custom.vue"></preview>

## 无限滚动

滚动到边缘时会触发 `end-reached` 事件，事件参数支持 `top / bottom / left / right` 四个方向，常用于无限加载。

<preview path="./demo/Scrollbar/InfiniteScroll.vue"></preview>

## 注意事项

- b-scrollbar的父层要有固定高度
- b-scrollbar的高度要设成100%
- 如果出现横滚动条，请添加css（.bin-scrollbar\_\_wrap{overflow-x:hidden;}）

## Props

| 参数         | 说明                                                    | 类型    | 可选值 | 默认值 |
| ------------ | ------------------------------------------------------- | ------- | ------ | ------ |
| distance     | 触发 `end-reached` 的距离阈值，单位 px                  | Number  | -      | 0      |
| height       | 滚动区域高度                                            | String / Number | - | — |
| maxHeight    | 滚动区域最大高度                                        | String / Number | - | — |
| native       | 是否采用原生滚动 (隐藏原生滚动条)                       | Boolean | true   | false  |
| always       | 是否一直显示，而非悬停显示                              | Boolean | true   | false  |
| wrapStyle    | 内联方式自定义 wrap 容器样式                            | String / Object / Array | - | — |
| wrapClass    | 类名方式自定义 wrap 容器样式                            | String / Array | - | — |
| viewClass    | 类名方式自定义 view 容器样式                            | String / Array | - | — |
| viewStyle    | 内联方式自定义 view 容器样式                            | String / Object / Array | - | — |
| noresize     | 如果 container 尺寸不会发生变化，最好设置它可以优化性能 | Boolean | true   | false  |
| tag          | 视图容器元素标签                                        | String  | -      | div    |
| minSize      | 滚动条最小尺寸                                          | Number  | -      | 20     |
| tabindex     | wrap 容器的 tabindex                                    | String / Number | - | — |
| barStyle     | 滚动条 thumb 样式                                       | Object  | -      | {}     |
| barWrapStyle | 滚动条 bar 容器样式                                     | Object  | -      | {}     |

## Events

| 事件名称    | 说明                       | 回调参数                                   |
| ----------- | -------------------------- | ------------------------------------------ |
| scroll      | 滚动时触发                 | `{ scrollTop, scrollLeft }`                |
| end-reached | 滚动触达边界时触发         | `direction: 'top' \| 'bottom' \| 'left' \| 'right'` |

## Methods

| 方法名        | 说明                         | 参数 |
| ------------- | ---------------------------- | ---- |
| handleScroll  | 手动触发一次滚动处理         | —    |
| scrollTo      | 滚动到指定位置               | `(options)` 或 `(x, y)` |
| setScrollTop  | 设置纵向滚动距离             | `(scrollTop: number)` |
| setScrollLeft | 设置横向滚动距离             | `(scrollLeft: number)` |
| update        | 手动更新滚动条状态           | —    |
| wrapRef       | 滚动容器实例引用             | —    |
