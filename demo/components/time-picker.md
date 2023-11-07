---
title: 时间选择器 TimePicker
---

<b-back-top></b-back-top>

# 时间选择器 TimePicker

可以选择时间的picker

## 基础用法

使用 b-time-picker 标签，通过 `disabledHours` `disabledMinutes` 和 `disabledSeconds`限制可选时间范围。

提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。

<preview path="./demo/TimePicker/Basic.vue"></preview>

## 任意时间范围

添加`is-range`属性即可选择时间范围，同样支持`arrow-control`属性。

<preview path="./demo/TimePicker/Range.vue"></preview>

## 禁用状态和禁用时间

使用 b-time-picker 标签，通过 `disabledHours` `disabledMinutes` 和 `disabledSeconds`限制可选时间范围。

<preview path="./demo/TimePicker/Disabled.vue"></preview>

## 时间格式

设置属性 format 可以改变时间的显示格式

注意， format 只是改变显示的格式，并非改变 value 值

<preview path="./demo/TimePicker/Format.vue"></preview>

## 不同大小

可以设置不同的大小

<preview path="./demo/TimePicker/Size.vue"></preview>

## Props

| 参数              | 说明                             | 类型                                   | 可选值                                                | 默认值            |
| ----------------- | -------------------------------- | -------------------------------------- | ----------------------------------------------------- | ----------------- |
| value / v-model   | 绑定值                           | date                                   | —                                                     | —                 |
| readonly          | 完全只读                         | boolean                                | —                                                     | false             |
| disabled          | 禁用                             | boolean                                | —                                                     | false             |
| editable          | 文本框可输入                     | boolean                                | —                                                     | true              |
| clearable         | 是否显示清除按钮                 | boolean                                | —                                                     | true              |
| size              | 输入框尺寸                       | string                                 | medium / small / mini                                 | —                 |
| placeholder       | 非范围选择时的占位内容           | string                                 | —                                                     | —                 |
| start-placeholder | 范围选择时开始日期的占位内容     | string                                 | —                                                     | —                 |
| end-placeholder   | 范围选择时开始日期的占位内容     | string                                 | —                                                     | —                 |
| is-range          | 是否为时间范围选择               | boolean                                | —                                                     | false             |
| arrow-control     | 是否使用箭头进行时间选择         | boolean                                | —                                                     | false             |
| align             | 对齐方式                         | string                                 | left / center / right                                 | left              |
| popper-class      | TimePicker 下拉框的类名          | string                                 | —                                                     | —                 |
| range-separator   | 选择范围时的分隔符               | string                                 | -                                                     | '-'               |
| format            | 显示在输入框中的格式             | string                                 | -                                                     | HH:mm:ss          |
| default-value     | 可选，选择器打开时默认显示的时间 | Date(TimePicker) / string(TimeSelect)  | 可被`new Date()`解析(TimePicker) / 可选值(TimeSelect) | —                 |
| name              | 原生属性                         | string                                 | —                                                     | —                 |
| prefix-icon       | 自定义头部图标的类名             | string                                 | —                                                     | time-circle       |
| clear-icon        | 自定义清空图标的类名             | string                                 | —                                                     | close-circle-fill |
| disabledHours     | 禁止选择部分小时选项             | function                               | —                                                     | -                 |
| disabledMinutes   | 禁止选择部分分钟选项             | function(selectedHour)                 | —                                                     | -                 |
| disabledSeconds   | 禁止选择部分秒选项               | function(selectedHour, selectedMinute) | —                                                     | -                 |

## Events

| 事件名 | 说明                    | 参数       |
| ------ | ----------------------- | ---------- |
| change | 用户确认选定的值时触发  | 组件绑定值 |
| blur   | 当 input 失去焦点时触发 | 组件实例   |
| focus  | 当 input 获得焦点时触发 | 组件实例   |

## Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | -    |
