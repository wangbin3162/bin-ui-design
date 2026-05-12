---
title: 提示 Tooltip
---

<b-back-top></b-back-top>

# 提示 Tooltip

文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。tooltip的default slot应该保证是一个dom或者一个component

## 基础用法

直接使用默认插槽即可

<preview path="./demo/Tooltip/Basic.vue"></preview>

## 多种悬停位置

使用 `placement` 来设置不同的悬停位置

<preview path="./demo/Tooltip/Placement.vue"></preview>

## 不同主题

设置 `theme` 来设置不同样式主题

<preview path="./demo/Tooltip/Theme.vue"></preview>

## 多行&长文本

可以使用插槽或者长文本

<preview path="./demo/Tooltip/Slot.vue"></preview>

## 延时&触发时机&禁用提示

可以使用不同的参数设置。

<preview path="./demo/Tooltip/More.vue"></preview>

## Props

| 参数            | 说明                     | 类型    | 可选值                                                                                                    | 默认值         |
| --------------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| v-model:visible | 状态是否可见             | Boolean | —                                                                                                         | false          |
| content         | 显示的内容               | String  | —                                                                                                         | —              |
| placement       | 提示框出现的位置         | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | —              |
| disabled        | 是否禁用提示框           | Boolean | —                                                                                                         | false          |
| transition      | 自定义渐变动画           | String  | —                                                                                                         | fade-in-linear |
| show-arrow      | 是否显示箭头             | Boolean | —                                                                                                         | true           |
| theme           | 主题                     | String  | dark 或 light                                                                                             | dark           |
| open-delay      | 延迟出现，单位毫秒       | Number  | —                                                                                                         | 0              |
| hide-delay      | 延迟消失，单位毫秒       | Number  | —                                                                                                         | 0              |
| offset          | 出现位置的偏移量         | Number  | —                                                                                                         | 12             |
| appendToBody    | 是否将弹层放置于 body 内 | Boolean | —                                                                                                         | true           |
