---
title: 描述 Desc
---

<b-back-top></b-back-top>

# 描述 Desc

按照一个区块来展示一些描述详情

## Basic Usage

日常Show列表的Showcomponent

<preview path="./demo/Desc/Basic.vue"></preview>

## Sizes

Can display 不同size的信息

<preview path="./demo/Desc/Size.vue"></preview>

## Props

| Parameter        | Description                                 | Type    | Options                       | Default  |
| ----------- | ------------------------------------ | ------- | ---------------------------- | ------- |
| border      | Whether to 带有border                         | Boolean | —                            | false   |
| column      | 一行Show几个                         | Number  | —                            | 3       |
| label-width | labelWidth(percentage)                    | Number  | —                            | —       |
| size        | size                                 | String  | large ，default，small，mini | default |
| title       | Title文本                             | String  | —                            | —       |
| extra       | 操作区文本，Show在右上方，可slot插入 | String  | —                            | —       |

## Slot

| Name  | Description         |
| ----- | ------------ |
| title | Title文本slot |
| extra | 操作区域slot |

## ItemProps

| Parameter  | Description     | Type   | Options | Default |
| ----- | -------- | ------ | ------ | ------ |
| label | tag文本 | String | —      | —      |
| span  | 列的数量 | Number | —      | —      |

## ItemSlot

| Name  | Description     |
| ----- | -------- |
| label | 文本slot |
