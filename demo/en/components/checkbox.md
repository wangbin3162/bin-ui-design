---
title: Checkbox
---

<b-back-top></b-back-top>

# Checkbox

基本component-checkboxes。主要Used for 一组可option多项选择， or 者单独Used for 标记切换某种状态。

## Basic Usage

<preview path="./demo/Checkbox/Basic.vue"></preview>

## Combo Usage

<preview path="./demo/Checkbox/Group.vue"></preview>

## Disabled

<preview path="./demo/Checkbox/Disabled.vue"></preview>

## Select All

<preview path="./demo/Checkbox/All.vue"></preview>

## Restrictions数量

可以控制被check的数量限制

<preview path="./demo/Checkbox/Limit.vue"></preview>

## Checkbox props

| Parameter          | Description                                                            | Type                  | Options | Default |
| ------------- | --------------------------------------------------------------- | --------------------- | ------ | ------ |
| modelValue    | 只在单独use时有效。可以use v-model 双向绑定数据               | Boolean               | —      | false  |
| label         | 组合use时有效。指定当前option的 value 值，组合会自动判断Whether to select | String/Number/Boolean | —      | —      |
| disabled      | Disable d当前项                                                  | Boolean               | —      | false  |
| true-label    | select值                                                          | String、Number        | —      | —      |
| false-label   | 没select的值                                                      | String、Number        | —      | —      |
| indeterminate | 设置 indeterminate 状态，只负责style控制                         | Boolean               | —      | false  |

## Checkbox events

| Event Name | Description                                                                           | Return Value     |
| ------ | ------------------------------------------------------------------------------ | ---------- |
| change | 只在单独use时有效。在option状态发生改变时Trigger，通过modify外部的数据改变时不会Trigger | true/false |

## CheckboxGroup props

| Parameter     | Description                                              | Type           | Options | Default |
| -------- | ------------------------------------------------- | -------------- | ------ | ------ |
| value    | 指定select项目的集合，可以use v-model 双向绑定数据 | String/ Number | —      | ''     |
| disabled | Disable d所有option                                  | Boolean        | —      | false  |
| min      | 最小数量                                          | Number         | —      | —      |
| max      | 最大数量                                          | Number         | —      | —      |

## CheckboxGroup events

| Event Name | Description                                                                         | Return Value |
| ------ | ---------------------------------------------------------------------------- | ------ |
| change | 在option状态发生改变时Trigger，返回已select的数组。通过modify外部的数据改变时不会Trigger | [...]  |
