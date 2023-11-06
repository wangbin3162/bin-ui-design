---
title: 描述 Desc
---

<b-back-top></b-back-top>

# 描述 Desc

按照一个区块来展示一些描述详情

## 基础用法

日常显示列表的显示组件

<preview path="./demo/Desc/Basic.vue"></preview>

## 不同尺寸

可以显示不同尺寸的信息

<preview path="./demo/Desc/Size.vue"></preview>

## Props

| 参数        | 说明                                 | 类型    | 可选值                       | 默认值  |
| ----------- | ------------------------------------ | ------- | ---------------------------- | ------- |
| border      | 是否带有边框                         | Boolean | —                            | false   |
| column      | 一行显示几个                         | Number  | —                            | 3       |
| label-width | label宽度(百分比)                    | Number  | —                            | —       |
| size        | 尺寸                                 | String  | large ，default，small，mini | default |
| title       | 标题文本                             | String  | —                            | —       |
| extra       | 操作区文本，显示在右上方，可插槽插入 | String  | —                            | —       |

## Slot

| 名称  | 说明         |
| ----- | ------------ |
| title | 标题文本插槽 |
| extra | 操作区域插槽 |

## ItemProps

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| label | 标签文本 | String | —      | —      |
| span  | 列的数量 | Number | —      | —      |

## ItemSlot

| 名称  | 说明     |
| ----- | -------- |
| label | 文本插槽 |
