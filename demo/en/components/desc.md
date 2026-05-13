---
title: Desc
---

<b-back-top></b-back-top>

# Desc

Display descriptive details in a block layout.

## Basic Usage

A component for displaying list details in daily use.

<preview path="./demo/Desc/Basic.vue"></preview>

## Sizes

Can display information in different sizes

<preview path="./demo/Desc/Size.vue"></preview>

## Props

| Parameter        | Description                                 | Type    | Options                       | Default  |
| ----------- | ------------------------------------ | ------- | ---------------------------- | ------- |
| border      | Whether to show border                         | Boolean | —                            | false   |
| column      | Number of columns displayed per row                         | Number  | —                            | 3       |
| label-width | Label width (percentage)                    | Number  | —                            | —       |
| size        | Size                                 | String  | large ，default，small，mini | default |
| title       | Title text                             | String  | —                            | —       |
| extra       | Action area text, displayed in the upper right, can be inserted via slot | String  | —                            | —       |

## Slot

| Name  | Description         |
| ----- | ------------ |
| title | Title text slot |
| extra | Action area slot |

## ItemProps

| Parameter  | Description     | Type   | Options | Default |
| ----- | -------- | ------ | ------ | ------ |
| label | Label text | String | —      | —      |
| span  | Column count | Number | —      | —      |

## ItemSlot

| Name  | Description     |
| ----- | -------- |
| label | Text slot |
