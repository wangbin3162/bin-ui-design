---
title: Radio
---

<b-back-top></b-back-top>

# Radio

Radio. Mainly used for single selection from a group of options, or used individually to toggle a selected state.

## Basic Usage

<preview path="./demo/Radio/Basic.vue"></preview>

## Combo Usage

<preview path="./demo/Radio/Group.vue"></preview>

## Disabled State

Set `disabled` to disable the radio group or a single radio option

<preview path="./demo/Radio/Disabled.vue"></preview>

## buttonType

Set `type="button"` to render radio as button type

<preview path="./demo/Radio/ButtonType.vue"></preview>

## Capsule Type

Set `type="capsule"` to render radio as capsule type

<preview path="./demo/Radio/CapsuleType.vue"></preview>

## Props

| Parameter     | Description                                                            | Type                  | Options | Default |
| -------- | --------------------------------------------------------------- | --------------------- | ------ | ------ |
| value    | Only effective when used alone. Use v-model for two-way binding               | Boolean               | —      | false  |
| label    | Effective when used in a group. Specifies the value of the current option; the group automatically determines whether it is selected | String/Number/Boolean | —      | —      |
| disabled | Disables the current item                                                  | Boolean               | —      | false  |

## Radio events

| Event Name | Description                                                                     | Return Value |
| ------ | ------------------------------------------------------------------------ | ------ |
| change | Triggers when option state changes, returns current status. Will not trigger when external data is modified | ...    |

## RadioGroup props

| Parameter     | Description                                              | Type           | Options                | Default |
| -------- | ------------------------------------------------- | -------------- | --------------------- | ------ |
| value    | Specifies the set of selected items; use v-model for two-way binding | String/ Number | —                     | ''     |
| disabled | Disables all options                                  | Boolean        | —                     | false  |
| type     | Enable button mode                                | String         | button /capsule       | —      |
| size     | Size of the radio group in button mode                              | String         | large、small、default | —      |

### RadioGroup events

| Event Name | Description                                                                         | Return Value |
| ------ | ---------------------------------------------------------------------------- | ------ |
| change | Triggers when option state changes, returns an array of selected items. Will not trigger when external data is modified | ...    |
