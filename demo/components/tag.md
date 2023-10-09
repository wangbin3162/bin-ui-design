---
title: 标签 Tag
---

# 标签 Tag

## 基础用法

直接使用默认插槽即可

<preview path="./demo/Tag/Basic.vue"></preview>

## 多种颜色

由`dark`属性来设置深色模式,并可以设置更多颜色类型的标签

<preview path="./demo/Tag/Colors.vue"></preview>

## 可选择标签

设置`checkable`属性可以定义一个标签是否可可选择。

<preview path="./demo/Tag/Checked.vue"></preview>

## 可移除标签

设置`closable`属性可以定义一个标签是否可移除。

<preview path="./demo/Tag/Closed.vue"></preview>

## 小圆点模式

设置 `dot` 模式可以简单显示带有提示小圆点等内容

<preview path="./demo/Tag/Dots.vue"></preview>

## 动态编辑标签

<preview path="./demo/Tag/Dynamic.vue"></preview>

## 自定义样式

具有多种自定义样式的方式可供选择

<preview path="./demo/Tag/Custom.vue"></preview>

## Props

| 参数       | 说明                             | 类型    | 可选值                      | 默认值 |
| ---------- | -------------------------------- | ------- | --------------------------- | ------ |
| closable   | 是否可关闭                       | Boolean | —                           | false  |
| type       | 主题                             | String  | success/info/warning/danger | —      |
| dot        | 是否显示是小圆点                 | Boolean | —                           | false  |
| no-border  | 是否关闭边框                     | Boolean | —                           | false  |
| color      | 背景颜色(可自定义)               | String  | —                           | —      |
| fontSize   | 字体大小                         | String  | —                           | —      |
| tag-style  | 标签样式(完全控制，尽量不要设置) | String  | —                           | —      |
| checkable  | 是否可选中                       | Boolean | —                           | false  |
| modelValue | 选中状态可以使用v-model双向绑定  | Boolean | —                           | true   |

## Events

| 事件名 | 说明                              | 返回值       |
| ------ | --------------------------------- | ------------ |
| close  | 关闭事件回调                      | event        |
| click  | 点击事件回调                      | event        |
| change | 选中事件回调,第二项需要设置name值 | checked,name |
