---
title: 多选框 Checkbox
---

<b-back-top></b-back-top>

# 多选框 Checkbox

基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。

## 基础用法

<preview path="./demo/Checkbox/Basic.vue"></preview>

## 组合使用

<preview path="./demo/Checkbox/Group.vue"></preview>

## 禁用

<preview path="./demo/Checkbox/Disabled.vue"></preview>

## 全选

<preview path="./demo/Checkbox/All.vue"></preview>

## 限制数量

可以控制被勾选的数量限制

<preview path="./demo/Checkbox/Limit.vue"></preview>

## Checkbox props

| 参数          | 说明                                                            | 类型                  | 可选值 | 默认值 |
| ------------- | --------------------------------------------------------------- | --------------------- | ------ | ------ |
| modelValue    | 只在单独使用时有效。可以使用 v-model 双向绑定数据               | Boolean               | —      | false  |
| label         | 组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中 | String/Number/Boolean | —      | —      |
| disabled      | 是否禁用当前项                                                  | Boolean               | —      | false  |
| true-label    | 选中值                                                          | String、Number        | —      | —      |
| false-label   | 没选中的值                                                      | String、Number        | —      | —      |
| indeterminate | 设置 indeterminate 状态，只负责样式控制                         | Boolean               | —      | false  |

## Checkbox events

| 事件名 | 说明                                                                           | 返回值     |
| ------ | ------------------------------------------------------------------------------ | ---------- |
| change | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发 | true/false |

## CheckboxGroup props

| 参数     | 说明                                              | 类型           | 可选值 | 默认值 |
| -------- | ------------------------------------------------- | -------------- | ------ | ------ |
| value    | 指定选中项目的集合，可以使用 v-model 双向绑定数据 | String/ Number | —      | ''     |
| disabled | 是否禁用所有选项                                  | Boolean        | —      | false  |
| min      | 最小数量                                          | Number         | —      | —      |
| max      | 最大数量                                          | Number         | —      | —      |

## CheckboxGroup events

| 事件名 | 说明                                                                         | 返回值 |
| ------ | ---------------------------------------------------------------------------- | ------ |
| change | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 | [...]  |
