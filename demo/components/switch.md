---
title: 开关 Switch
---

<b-back-top></b-back-top>

# 开关 Switch

在两种状态间切换时用到的开关选择器

## 基础用法

直接用组件默认插槽插入即可

<preview path="./demo/Switch/Basic.vue"></preview>

## 大小及颜色

<preview path="./demo/Switch/Size.vue"></preview>

## 文字或图标

<preview path="./demo/Switch/Icon.vue"></preview>

## 禁用

<preview path="./demo/Switch/Disabled.vue"></preview>

## loading

<preview path="./demo/Switch/Loading.vue"></preview>

## 切换前拦截

可以通过设置`confirm`来设置切换前拦截，并通过`confirm-txt`来自定义切换文字提示。

<preview path="./demo/Switch/Confirm.vue"></preview>

## 阻止切换

可以配合loading和confirm一级before-change函数props来配合实现阻止切换

<preview path="./demo/Switch/Confirm2.vue"></preview>

## Props

| 参数           | 说明                                                       | 类型                    | 可选值                | 默认值  |
| -------------- | ---------------------------------------------------------- | ----------------------- | --------------------- | ------- |
| modelValue     | 指定当前是否选中，可以使用 v-model 双向绑定数据            | Boolean                 | —                     | false   |
| size           | 开关的尺寸。建议开关如果使用了2个汉字的文字，使用 large。  | String                  | large、small、default | default |
| disabled       | 禁用开关                                                   | Boolean                 | —                     | false   |
| true-value     | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用     | String, Number, Boolean | —                     | true    |
| false-value    | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 | String, Number, Boolean | —                     | false   |
| active-color   | switch 打开时的背景色                                      | string                  | —                     | —       |
| inactive-color | switch 关闭时的背景色                                      | string                  | —                     | —       |
| confirm        | 开启切换前拦截功能                                         | Boolean                 | —                     | false   |
| confirm-txt    | 切换拦截文字                                               | string                  | —                     | —       |
| loading        | 加载中状态                                                 | Boolean                 | —                     | —       |
| beforeChange   | 改变状态前拦截函数，return type Promise or boolean         | Function                | —                     | —       |

## Events

| 事件名 | 说明                           | 返回值      |
| ------ | ------------------------------ | ----------- |
| change | 开关变化时触发，返回当前的状态 | true、false |

## Slot

| 事件名 | 说明                   |
| ------ | ---------------------- |
| open   | 自定义显示打开时的内容 |
| close  | 自定义显示关闭时的内容 |
