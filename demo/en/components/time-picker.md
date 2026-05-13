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
| popper-class      | Custom class name for TimePicker dropdown          | string                                 | —                                                     | —                 |
| range-separator   | Separator for range selection               | string                                 | -                                                     | '-'               |
| format            | Display format in the input             | string                                 | -                                                     | HH:mm:ss          |
| default-value     | Optional, default time displayed when the picker opens | Date(TimePicker) / string(TimeSelect)  | Parseable by `new Date()`(TimePicker) / Options(TimeSelect) | —                 |
| name              | Native attribute                         | string                                 | —                                                     | —                 |
| prefix-icon       | Custom prefix icon class name             | string                                 | —                                                     | time-circle       |
| clear-icon        | Custom clear icon class name             | string                                 | —                                                     | close-circle-fill |
| disabledHours     | Disable specific hour options             | function                               | —                                                     | -                 |
| disabledMinutes   | Disable specific minute options             | function(selectedHour)                 | —                                                     | -                 |
| disabledSeconds   | Disable specific second options               | function(selectedHour, selectedMinute) | —                                                     | -                 |

## Events

| Event Name | Description                    | Parameter       |
| ------ | ----------------------- | ---------- |
| change | Triggers when the user confirms the selected value  | Component bound value |
| blur   | Triggers when input loses focus | Component instance   |
| focus  | Triggers when input gains focus | Component instance   |

## Methods

| Method Name | Description              | Parameter |
| ------ | ----------------- | ---- |
| focus  | Make input gain focus | -    |
