---
title: DatePicker
---

<b-back-top></b-back-top>

# DatePicker

A date (Date) picker component.

## Basic Usage

Set `type` to `date (Date)` for single date (Date) selection or `date (Date)range` for date (Date) range selection.

Set `placement` to control the direction in which the picker appears.

<preview path="./demo/DatePicker/Basic.vue"></preview>

## Different Picker Types

Different date (Date) formats can be selected.

<preview path="./demo/DatePicker/Value.vue"></preview>

## Date Range

Set `type` to `date (Date)range` for range mode.

<preview path="./demo/DatePicker/Range.vue"></preview>

## Month Range

Conveniently select a month range in a single picker.

<preview path="./demo/DatePicker/Range2.vue"></preview>

## Default Value

If the user has not selected a date (Date), the current month is shown by default. Use `default-value` to set a different default date (Date).

<preview path="./demo/DatePicker/Default.vue"></preview>

## Disabled State

<preview path="./demo/DatePicker/Disabled.vue"></preview>

## Date Format

Use `format` to specify the input display format. By default, the component accepts and returns Date objects. See dayjs for supported format parameters.

Use `value-format` to specify the format of the bound value. By default, the component binds a Date object. The format of the bound value will match the return value format.

<preview path="./demo/DatePicker/Format.vue"></preview>

## Sizes

Like other form controls, four sizes are available.

<preview path="./demo/DatePicker/Size.vue"></preview>

## Date & Time

Date and time can be selected together.

<preview path="./demo/DatePicker/Time.vue"></preview>

## Date & Time Range

Date and time range configuration.

<preview path="./demo/DatePicker/TimeRange.vue"></preview>

## Default Start and End Time

Default start and end time

<preview path="./demo/DatePicker/DefaultTime.vue"></preview>

## Props

| Parameter              | Description                                                                    | Type                                      | Options                                                                                          | Default     |
| ----------------- | ----------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| value / v-model   | Bound value                                                                  | date (Date)(DatePicker) / array(DateRangePicker) | —                                                                                               | —          |
| readonly          | Fully read-only                                                                | boolean                                   | —                                                                                               | false      |
| disabled          | Disabled                                                                    | boolean                                   | —                                                                                               | false      |
| editable          | Text field is editable                                                            | boolean                                   | —                                                                                               | true       |
| clearable         | Show clear button                                                        | boolean                                   | —                                                                                               | true       |
| size              | Input size                                                              | string                                    | large/medium/small/mini                                                                         | large      |
| placeholder       | Placeholder for non-range selection                                                  | string                                    | —                                                                                               | —          |
| start-placeholder | Placeholder for start date in range selection                                            | string                                    | —                                                                                               | —          |
| end-placeholder   | Placeholder for end date in range selection                                            | string                                    | —                                                                                               | —          |
| type              | Picker type                                                                | string                                    | year/month/date (Date)/date (Date)s/ week/date (Date)time/date (Date)timerange/ date (Date)range/monthrange                        | date (Date)       |
| format            | Display format in the input                                                    | string                                    | YYYY MM DD hh mm ss                                                                             | YYYY-MM-DD |
| value-format      | Format of the actual bound value. Note: must follow ISO 8601 format for parsing the given string | string                                    | YYYY MM DD hh mm ss                                                                             | —          |
| popper-class      | Custom class name for DatePicker dropdown                                                 | string                                    | —                                                                                               | —          |
| range-separator   | Separator for range selection                                                      | string                                    | —                                                                                               | '-'        |
| default-value     | Optional, default date displayed when the picker opens                                        | Date                                      | Parseable by `new Date()`                                                                            | —          |
| default-time      | The specific time of day used when selecting a date in range selection                                | Date[]                                    | Array of length 2, the first specifies the start time, the second specifies the end time. Defaults to `00:00:00` if not specified | —          |
| unlink-panels     | Unlink the two date panels in the range picker                                | boolean                                   | —                                                                                               | false      |
| prefix-icon       | Custom prefix icon class name                                                    | string                                    | —                                                                                               | —          |
| clear-icon        | Custom clear icon class name                                                    | string                                    | —                                                                                               | —          |
| validate-event    | Whether to trigger form validation on input                                                | boolean                                   | -                                                                                               | true       |
| shortcuts         | Set shortcut options, requires an array of objects                                          | object[{ text: string, value: Date }]     | —                                                                                               | —          |
| disabledDate      | Set disabled state. Parameter is the current date, must return a Boolean                          | Function                                  | —                                                                                               | —          |

## Events

| Event Name | Description                    | Callback Parameters   |
| -------- | ----------------------- | ---------- |
| change   | Triggers when the user confirms the selected value  | Component bound value |
| blur     | Triggers when input loses focus | Component instance   |
| focus    | Triggers when input gains focus | Component instance   |

## Methods

| Method Name | Description              | Parameter |
| ------ | ----------------- | ---- |
| focus  | Make input gain focus | —    |
