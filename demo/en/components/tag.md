---
title: Tag
---

<b-back-top></b-back-top>

# Tag

## Basic Usage

直接useDefaultslot即可

<preview path="./demo/Tag/Basic.vue"></preview>

## 多种color

由`dark`property来设置深色Mode,并Can set 更多colorType的tag

<preview path="./demo/Tag/Colors.vue"></preview>

## 可选择tag

设置`checkable`property可以定义一个tagWhether to 可可选择。

<preview path="./demo/Tag/Checked.vue"></preview>

## 可移除tag

设置`closable`property可以定义一个tagWhether to 可移除。

<preview path="./demo/Tag/Closed.vue"></preview>

## 小圆点Mode

设置 `dot` Mode可以简单Show带有Tip小圆点等Content

<preview path="./demo/Tag/Dots.vue"></preview>

## Dynamictag

<preview path="./demo/Tag/Dynamic.vue"></preview>

## Custom Styles

具有多种自定义style的方式可供选择

<preview path="./demo/Tag/Custom.vue"></preview>

## Props

| Parameter       | Description                             | Type    | Options                      | Default |
| ---------- | -------------------------------- | ------- | --------------------------- | ------ |
| closable   | Whether to 可Disable                       | Boolean | —                           | false  |
| type       | theme                             | String  | success/info/warning/danger | —      |
| dot        | Whether to show Yes小圆点                 | Boolean | —                           | false  |
| no-border  | Disable border                     | Boolean | —                           | false  |
| color      | backgroundcolor(可自定义)               | String  | —                           | —      |
| fontSize   | 字体大小                         | String  | —                           | —      |
| tag-style  | tagstyle(完全控制，尽量不要设置) | String  | —                           | —      |
| checkable  | Whether to 可select                       | Boolean | —                           | false  |
| modelValue | select状态可以usev-model双向绑定  | Boolean | —                           | true   |

## Events

| Event Name | Description                              | Return Value       |
| ------ | --------------------------------- | ------------ |
| close  | DisableeventCallback                      | event        |
| click  | clickeventCallback                      | event        |
| change | selecteventCallback,第二项需要设置name值 | checked,name |
