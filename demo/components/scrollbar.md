---
title: 滚动组件 Scrollbar
---

# 滚动组件 Scrollbar

由于默认浏览器滚动条极为丑陋切不同浏览器之间样式不统一，故封装一个滚动组件用于实现滚动

## 基础用法

使用`b-scrollbar`进行包裹，默认`slot`为内容显示区域,如当前示例所包含的滚动结构如下:

<preview path="./demo/Scrollbar/Basic.vue"></preview>

注意：如果内容区域不超过容器高度则不会生成滚动条

## 始终显示

使用`always`可以让滚动条始终显示出来

<preview path="./demo/Scrollbar/Always.vue"></preview>

## 定制滚动条的样式

可以借助不同的props来定制滚动条的样式，也可以使用css来实现样式修改。

<preview path="./demo/Scrollbar/Custom.vue"></preview>

## 注意事项

- b-scrollbar的父层要有固定高度
- b-scrollbar的高度要设成100%
- 如果出现横滚动条，请添加css（.bin-scrollbar\_\_wrap{overflow-x:hidden;}）

## Props

| 参数         | 说明                                                    | 类型    | 可选值 | 默认值 |
| ------------ | ------------------------------------------------------- | ------- | ------ | ------ |
| native       | 是否采用原生滚动 (隐藏原生滚动条)                       | Boolean | true   | false  |
| always       | 是否一直显示，而非悬停显示                              | Boolean | true   | false  |
| wrapStyle    | 内联方式 自定义wrap容器的样式                           | Object  | -      | {}     |
| wrapClass    | 类名方式 自定义wrap容器的样式                           | Object  | -      | {}     |
| viewClass    | 类名方式 自定义view容器的样式                           | Object  | -      | {}     |
| viewStyle    | 内联方式 自定义view容器的样式                           | Object  | -      | {}     |
| barStyle     | 滚动条thumb样式                                         | Object  | -      | {}     |
| barWrapStyle | 滚动条bar样式                                           | Object  | -      | {}     |
| noresize     | 如果 container 尺寸不会发生变化，最好设置它可以优化性能 | Boolean | true   | false  |
