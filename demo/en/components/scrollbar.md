---
title: 滚动component Scrollbar
---

<b-back-top></b-back-top>

# 滚动component Scrollbar

由于Default浏览器scrollbar极为丑陋切不同浏览器之间style不统一，故封装一个滚动componentUsed for 实现滚动

## Basic Usage

use`b-scrollbar`进行包裹，Default`slot`为ContentShow区域,如当前示例所包含的滚动结构如下:

<preview path="./demo/Scrollbar/Basic.vue"></preview>

Note：如果Content区域不超过容器Height则不会生成scrollbar

## 始终Show

use`always`可以让scrollbar始终Show出来

<preview path="./demo/Scrollbar/Always.vue"></preview>

## 定制scrollbar的style

可以借助不同的props来定制scrollbar的style，也可以usecss来实现stylemodify。

<preview path="./demo/Scrollbar/Custom.vue"></preview>

## Note事项

- b-scrollbar的父层要有固定Height
- b-scrollbar的Height要设成100%
- 如果appear横scrollbar，请添加css（.bin-scrollbar\_\_wrap{overflow-x:hidden;}）

## Props

| Parameter         | Description                                                    | Type    | Options | Default |
| ------------ | ------------------------------------------------------- | ------- | ------ | ------ |
| native       | Whether to 采用原生滚动 (Hide原生scrollbar)                       | Boolean | true   | false  |
| always       | Whether to 一直Show，而非hover to show                              | Boolean | true   | false  |
| wrapStyle    | 内联方式 自定义wrap容器的style                           | Object  | -      | {}     |
| wrapClass    | 类名方式 自定义wrap容器的style                           | Object  | -      | {}     |
| viewClass    | 类名方式 自定义view容器的style                           | Object  | -      | {}     |
| viewStyle    | 内联方式 自定义view容器的style                           | Object  | -      | {}     |
| barStyle     | scrollbarthumbstyle                                         | Object  | -      | {}     |
| barWrapStyle | scrollbarbarstyle                                           | Object  | -      | {}     |
| noresize     | 如果 container size不会发生变化，最好设置它可以优化性能 | Boolean | true   | false  |
