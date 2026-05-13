---
title: Radio
---

<b-back-top></b-back-top>

# Radio

radio。主要Used for 一组可option单项选择， or 者单独Used for 切换到Selected状态。

## Basic Usage

<preview path="./demo/Radio/Basic.vue"></preview>

## Combo Usage

<preview path="./demo/Radio/Group.vue"></preview>

## Disabled State

设置 `disabled` Can disable d单选组 or 者某个单选值

<preview path="./demo/Radio/Disabled.vue"></preview>

## buttonType

设置 `type="button"` Can set radioasbuttonType

<preview path="./demo/Radio/ButtonType.vue"></preview>

## 胶囊Type

设置 `type="capsule"` Can set radioas胶囊Type

<preview path="./demo/Radio/CapsuleType.vue"></preview>

## Props

| Parameter     | Description                                                            | Type                  | Options | Default |
| -------- | --------------------------------------------------------------- | --------------------- | ------ | ------ |
| value    | 只在单独use时有效。可以use v-model 双向绑定数据               | Boolean               | —      | false  |
| label    | 组合use时有效。指定当前option的 value 值，组合会自动判断Whether to Selected | String/Number/Boolean | —      | —      |
| disabled | Disable d当前项                                                  | Boolean               | —      | false  |

## Radio events

| Event Name | Description                                                                     | Return Value |
| ------ | ------------------------------------------------------------------------ | ------ |
| change | 在option状态发生改变时Trigger，返回Current status。Will not trigger when external data is modified | ...    |

## RadioGroup props

| Parameter     | Description                                              | Type           | Options                | Default |
| -------- | ------------------------------------------------- | -------------- | --------------------- | ------ |
| value    | 指定Selected项目的集合，可以use v-model 双向绑定数据 | String/ Number | —                     | ''     |
| disabled | Disable d所有option                                  | Boolean        | —                     | false  |
| type     | Enable buttonMode                                | String         | button /capsule       | —      |
| size     | buttonMode单选组的size                              | String         | large、small、default | —      |

### RadioGroup events

| Event Name | Description                                                                         | Return Value |
| ------ | ---------------------------------------------------------------------------- | ------ |
| change | 在option状态发生改变时Trigger，返回已Selected的数组。Will not trigger when external data is modified | ...    |
