---
title: Input Number
---

<b-back-top></b-back-top>

# Input Number

Used for entering numeric values.

## Basic Usage

<preview path="./demo/InputNumber/Basic.vue"></preview>

## Initial Value

The default initial value of the control is null. If the bound property value is undefined, the default value will be changed to null (because undefined converted to a number results in NaN).
If the default value is passed as a string, a value conversion will also be performed. If it can be converted to a number, the conversion will be based on the min/max range. Otherwise it will also be set to empty.

<preview path="./demo/InputNumber/Init.vue"></preview>

## Decimals

<preview path="./demo/InputNumber/Number.vue"></preview>

## Formattable

<preview path="./demo/InputNumber/Format.vue"></preview>

## Sizes

Provides three additional different sizes.

<preview path="./demo/InputNumber/Size.vue"></preview>

## Multiple States

Three states: disabled, readonly, and non-editable.

<preview path="./demo/InputNumber/Status.vue"></preview>

## Props

| Parameter            | Description                                                       | Type     | Options                        | Default   |
| --------------- | ---------------------------------------------------------- | -------- | ----------------------------- | -------- |
| max             | Maximum value                                                     | Number   | -                             | Infinity |
| min             | Minimum value                                                     | Number   | -                             | Infinity |
| modelValue      | Current value, supports v-model for two-way data binding                      | Number   | -                             | 1        |
| step            | Increment/decrement step, can be a decimal                                 | Number   | -                             | 1        |
| size            | Input size                                                 | String   | large / small / default, or none | -        |
| disabled        | Set disabled state                                               | Boolean  | -                             | false    |
| placeholder     | Placeholder text                                                   | String   | -                             | -        |
| formatter       | Specifies the format for the displayed input value                                     | Function | -                             | -        |
| parser          | Specifies how to convert back to a number from the formatter, used together with formatter | Function | -                             | -        |
| readonly        | Whether to set as readonly                                             | Boolean  | -                             | false    |
| editable        | Whether editable                                                 | Boolean  |                               | true     |
| precision       | Numeric precision                                                   | Number   |                               | -        |
| active-change   | Whether to respond to data in real time                                           | Boolean  |                               | true     |
| arrow-up-icon   | Arrow icon in normal mode                                         | String   |                               | up       |
| arrow-down-icon | Arrow icon in normal mode                                         | String   |                               | down     |
| always          | Whether to always show the controller                                         | Boolean  | true                          | -        |

## Events

| Event Name | Description             | Return Value            |
| ------ | ---------------- | ----------------- |
| change | Callback when the value changes | Returns the current value |
| focus  | Triggered on focus       | event             |
| blur   | Triggered on blur       | -                 |
