---
title: Checkbox
---

<b-back-top></b-back-top>

# Checkbox

Basic checkboxes. Mainly used for multiple selection from a group of options, or used individually to toggle a state.

## Basic Usage

<preview path="./demo/Checkbox/Basic.vue"></preview>

## Combo Usage

<preview path="./demo/Checkbox/Group.vue"></preview>

## Disabled

<preview path="./demo/Checkbox/Disabled.vue"></preview>

## Select All

<preview path="./demo/Checkbox/All.vue"></preview>

## Limit Count

Control the limit on the number of checked items

<preview path="./demo/Checkbox/Limit.vue"></preview>

## Checkbox props

| Parameter          | Description                                                            | Type                  | Options | Default |
| ------------- | --------------------------------------------------------------- | --------------------- | ------ | ------ |
| modelValue    | Only effective when used alone. Use v-model for two-way binding               | Boolean               | —      | false  |
| label         | Effective when used in a group. Specifies the value of the current option; the group automatically determines whether it is selected | String/Number/Boolean | —      | —      |
| disabled      | Disables the current item                                                  | Boolean               | —      | false  |
| true-label    | Selected value                                                          | String、Number        | —      | —      |
| false-label   | Unselected value                                                      | String、Number        | —      | —      |
| indeterminate | Set indeterminate state, only responsible for style control                         | Boolean               | —      | false  |

## Checkbox events

| Event Name | Description                                                                           | Return Value     |
| ------ | ------------------------------------------------------------------------------ | ---------- |
| change | Only effective when used alone. Triggers when option state changes; will not trigger when external data is modified | true/false |

## CheckboxGroup props

| Parameter     | Description                                              | Type           | Options | Default |
| -------- | ------------------------------------------------- | -------------- | ------ | ------ |
| value    | Specifies the set of selected items; use v-model for two-way binding | String/ Number | —      | ''     |
| disabled | Disables all options                                  | Boolean        | —      | false  |
| min      | Minimum count                                          | Number         | —      | —      |
| max      | Maximum count                                          | Number         | —      | —      |

## CheckboxGroup events

| Event Name | Description                                                                         | Return Value |
| ------ | ---------------------------------------------------------------------------- | ------ |
| change | Triggers when option state changes, returns an array of selected items. Will not trigger when external data is modified | [...]  |
