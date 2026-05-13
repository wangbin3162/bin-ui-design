---
title: Grid
---

<b-back-top></b-back-top>

# Grid

Uses a 24-grid system, dividing the area into 24 equal parts.

## Basic Usage

<preview path="./demo/Grid/Basic.vue"></preview>

## Gutter

<preview path="./demo/Grid/Gutter.vue"></preview>

## Grid Order

<preview path="./demo/Grid/Order.vue"></preview>

## Grid Sequence

Use push and pull to change the grid order.

<preview path="./demo/Grid/Pull.vue"></preview>

## Offset

Offset can be used to set the offset amount.

<preview path="./demo/Grid/Offset.vue"></preview>

## Flex Layout

<preview path="./demo/Grid/Flex.vue"></preview>

## Responsive Layout

Six preset responsive sizes: xs, sm, md, lg, xl, xxl. See the API for details.

<preview path="./demo/Grid/Auto.vue"></preview>

## Row Props

| Parameter       | Description                         | Type          | Options                                          | Default |
| ---------- | ---------------------------- | ------------- | ----------------------------------------------- | ------ |
| gutter     | Grid spacing, in px            | Number/String | —                                               | 0      |
| type       | Layout mode, effective in modern browsers | String        | flex, or none                                      | —      |
| justify    | Horizontal alignment in flex layout     | String        | —                                               | —      |
| align      | Vertical alignment in flex layout    | String        | start / end / center / space-around / space-between | —      |
| class-name | Custom class name            | String        | —                                               | —      |

## Col Props

| Parameter       | Description                                      | Type          | Options | Default |
| ---------- | ----------------------------------------- | ------------- | ------ | ------ |
| span       | Number of grid cells to occupy. When 0, equivalent to display:none | Number/String | 0~24   | -      |
| order      | Grid order, effective in flex layout mode           | Number/String | -      | -      |
| offset     | Left offset of the grid                              | Number/String | -      | -      |
| push       | Number of cells to push the grid to the right                          | Number/String | -      | -      |
| pull       | Number of cells to pull the grid to the left                          | Number/String | -      | -      |
| class-name | Custom class                             | String        | -      | -      |
| xs         | <576px responsive grid                         | Number        | -      | -      |
| sm         | (>=576px < 768px) responsive grid         | Number        | -      | -      |
| md         | (>=768px < 992px) responsive grid               | Number        | -      | -      |
| lg         | (>=992px < 1200px) responsive grid              | Number        | -      | -      |
| xl         | (>=1200px < 1600px) responsive grid             | Number        | -      | -      |
| xxl        | >=1600px responsive grid                        | Number        | -      | -      |
