---
title: 数字输入 InputNumber
---

<b-back-top></b-back-top>

# 数字输入 InputNumber

用于输入数字

## 基础用法

<preview path="./demo/InputNumber/Basic.vue"></preview>

## 初始化值

默认控件初始化值为null，这时如果绑定的属性值为undefined，则会改变默认值为null（因为undefined转换为数字之后为NaN），
如果默认传输为字符串，则也会进行一次值的转换，如能转换为数字，则会根据最大最小值进行数字转换。否则也会置空。

<preview path="./demo/InputNumber/Init.vue"></preview>

## 小数

<preview path="./demo/InputNumber/Number.vue"></preview>

## 可以格式化

<preview path="./demo/InputNumber/Format.vue"></preview>

## 不同尺寸

提供三种额外不同尺寸

<preview path="./demo/InputNumber/Size.vue"></preview>

## 多种状态

禁用，只读和不可编辑三种状态

<preview path="./demo/InputNumber/Status.vue"></preview>

## Props

| 参数            | 说明                                                       | 类型     | 可选值                        | 默认值   |
| --------------- | ---------------------------------------------------------- | -------- | ----------------------------- | -------- |
| max             | 最大值                                                     | Number   | -                             | Infinity |
| min             | 最小值                                                     | Number   | -                             | Infinity |
| modelValue      | 当前值，可以使用 v-model 双向绑定数据                      | Number   | -                             | 1        |
| step            | 每次改变的步伐，可以是小数                                 | Number   | -                             | 1        |
| size            | 输入框尺寸                                                 | String   | large、small、default或者不填 | -        |
| disabled        | 设置禁用状态                                               | Boolean  | -                             | false    |
| placeholder     | 占位文本                                                   | String   | -                             | -        |
| formatter       | 指定输入框展示值的格式                                     | Function | -                             | -        |
| parser          | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | Function | -                             | -        |
| readonly        | 是否设置为只读                                             | Boolean  | -                             | false    |
| editable        | 是否可编辑                                                 | Boolean  |                               | true     |
| precision       | 数值精度                                                   | Number   |                               | -        |
| active-change   | 是否实时响应数据                                           | Boolean  |                               | true     |
| arrow-up-icon   | 普通模式下箭头图标                                         | String   |                               | up       |
| arrow-down-icon | 普通模式下箭头图标                                         | String   |                               | down     |
| always          | 是否始终显示控制器                                         | Boolean  | true                          | -        |

## Events

| 事件名 | 说明             | 返回值            |
| ------ | ---------------- | ----------------- |
| change | 数值改变时的回调 | 返回当前值 当前值 |
| focus  | 聚焦时触发       | event             |
| blur   | 失焦时触发       | -                 |
