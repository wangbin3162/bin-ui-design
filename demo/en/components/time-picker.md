---
title: TimePicker
---

<b-back-top></b-back-top>

# TimePicker

A time picker component.

## Basic Usage

Limit selectable time ranges via `disabledHours`, `disabledMinutes`, and `disabledSeconds`.

Two interaction modes are provided: by default, use the mouse wheel to select; with `arrow-control`, use the arrow buttons on the interface.

<preview path="./demo/TimePicker/Basic.vue"></preview>

## Time Range

Add `is-range` to enable time range selection. Also supports the `arrow-control` prop.

<preview path="./demo/TimePicker/Range.vue"></preview>

## Disabled State and Disabled Time

Limit selectable time ranges via `disabledHours`, `disabledMinutes`, and `disabledSeconds`.

<preview path="./demo/TimePicker/Disabled.vue"></preview>

## Time Format

Set the `format` prop to change the display format of the time.

Note: `format` only changes the display format, not the bound value.

<preview path="./demo/TimePicker/Format.vue"></preview>

## Sizes

Different sizes can be configured.

<preview path="./demo/TimePicker/Size.vue"></preview>

## Props

| Parameter              | Description                             | Type                                   | Options                                                | Default            |
| ----------------- | -------------------------------- | -------------------------------------- | ----------------------------------------------------- | ----------------- |
| value / v-model   | Bound value                           | date (Date)                                   | —                                                     | —                 |
| readonly          | Fully read-only                         | boolean                                | —                                                     | false             |
| disabled          | Disabled                             | boolean                                | —                                                     | false             |
| editable          | Text field is editable                     | boolean                                | —                                                     | true              |
| clearable         | Show clear button                 | boolean                                | —                                                     | true              |
| size              | Input size                       | string                                 | medium / small / mini                                 | —                 |
| placeholder       | Placeholder for non-range selection           | string                                 | —                                                     | —                 |
| start-placeholder | Placeholder for start date in range selection     | string                                 | —                                                     | —                 |
| end-placeholder   | Placeholder for start date in range selection     | string                                 | —                                                     | —                 |
| is-range          | Is a time range selection               | boolean                                | —                                                     | false             |
| arrow-control     | Use arrow buttons for time selection         | boolean                                | —                                                     | false             |
| align             | Alignment                         | string                                 | left / center / right                                 | left              |
| popper-class      | TimePicker Dropdown的类名          | string                                 | —                                                     | —                 |
| range-separator   | Separator for range selection               | string                                 | -                                                     | '-'               |
| format            | Show在input中的格式             | string                                 | -                                                     | HH:mm:ss          |
| default-value     | 可选，选择器open时DefaultShow的时间 | Date(TimePicker) / string(TimeSelect)  | 可被`new Date()`解析(TimePicker) / Options(TimeSelect) | —                 |
| name              | Native attribute                         | string                                 | —                                                     | —                 |
| prefix-icon       | 自定义Prefix icon的类名             | string                                 | —                                                     | time-circle       |
| clear-icon        | 自定义Clear icon class name             | string                                 | —                                                     | close-circle-fill |
| disabledHours     | 禁止选择部分小时option             | function                               | —                                                     | -                 |
| disabledMinutes   | 禁止选择部分分钟option             | function(selectedHour)                 | —                                                     | -                 |
| disabledSeconds   | 禁止选择部分秒option               | function(selectedHour, selectedMinute) | —                                                     | -                 |

## Events

| Event Name | Description                    | Parameter       |
| ------ | ----------------------- | ---------- |
| change | 用户confirm选定的值时Trigger  | componentBound value |
| blur   | 当 input 失去焦点时Trigger | component实例   |
| focus  | 当 input 获得焦点时Trigger | component实例   |

## Methods

| Method Name | Description              | Parameter |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | -    |
