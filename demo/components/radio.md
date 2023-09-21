---
title: 单选框 Radio
---

# 单选框 Radio

单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

## 基础用法

<preview path="./demo/Radio/Basic.vue"></preview>

## 组合使用

<preview path="./demo/Radio/Group.vue"></preview>

## 禁用状态

设置 `disabled` 可以禁用单选组或者某个单选值

<preview path="./demo/Radio/Disabled.vue"></preview>

## 按钮类型

设置 `type="button"` 可以设置单选框为按钮类型

<preview path="./demo/Radio/ButtonType.vue"></preview>

## 胶囊类型

设置 `type="capsule"` 可以设置单选框为胶囊类型

<preview path="./demo/Radio/CapsuleType.vue"></preview>

## Props

| 参数     | 说明                                                            | 类型                  | 可选值 | 默认值 |
| -------- | --------------------------------------------------------------- | --------------------- | ------ | ------ |
| value    | 只在单独使用时有效。可以使用 v-model 双向绑定数据               | Boolean               | —      | false  |
| label    | 组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中 | String/Number/Boolean | —      | —      |
| disabled | 是否禁用当前项                                                  | Boolean               | —      | false  |

## Radio events

| 事件名 | 说明                                                                     | 返回值 |
| ------ | ------------------------------------------------------------------------ | ------ |
| change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 | ...    |

## RadioGroup props

| 参数     | 说明                                              | 类型           | 可选值                | 默认值 |
| -------- | ------------------------------------------------- | -------------- | --------------------- | ------ |
| value    | 指定选中项目的集合，可以使用 v-model 双向绑定数据 | String/ Number | —                     | ''     |
| disabled | 是否禁用所有选项                                  | Boolean        | —                     | false  |
| type     | 是否开启button模式                                | String         | button /capsule       | —      |
| size     | 按钮模式单选组的尺寸                              | String         | large、small、default | —      |

### RadioGroup events

| 事件名 | 说明                                                                         | 返回值 |
| ------ | ---------------------------------------------------------------------------- | ------ |
| change | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 | ...    |
