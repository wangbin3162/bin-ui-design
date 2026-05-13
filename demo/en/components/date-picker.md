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

Default的起始结束时间

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
| format            | Show在input中的格式                                                    | string                                    | YYYY MM DD hh mm ss                                                                             | YYYY-MM-DD |
| value-format      | 实际Bound value的格式，Note这里必须is 国际标准化组织 8601 格式解析给定字符串 | string                                    | YYYY MM DD hh mm ss                                                                             | —          |
| popper-class      | DatePicker Dropdown的类名                                                 | string                                    | —                                                                                               | —          |
| range-separator   | Separator for range selection                                                      | string                                    | —                                                                                               | '-'        |
| default-value     | 可选，选择器open时DefaultShow的时间                                        | Date                                      | 可被`new Date()`解析                                                                            | —          |
| default-time      | 范围选择时select日期所use的当日内具体时刻                                | Date[]                                    | 数组，长度为 2，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会use时刻 `00:00:00` | —          |
| unlink-panels     | 在范围选择器里cancel两个日期面板之间的联动                                | boolean                                   | —                                                                                               | false      |
| prefix-icon       | 自定义Prefix icon的类名                                                    | string                                    | —                                                                                               | —          |
| clear-icon        | 自定义Clear icon class name                                                    | string                                    | —                                                                                               | —          |
| validate (Date)-event    | 输入时Whether to Triggerform的validation                                                | boolean                                   | -                                                                                               | true       |
| shortcuts         | 设置快捷option，需要传入数组对象                                          | object[{ text: string, value: Date }]     | —                                                                                               | —          |
| disabledDate      | 设置Disabled state，parameter为当前日期，要求返回 Boolean                          | Function                                  | —                                                                                               | —          |

## Events

| Event Name | Description                    | Callback Parameters   |
| -------- | ----------------------- | ---------- |
| change   | 用户confirm选定的值时Trigger  | componentBound value |
| blur     | 当 input 失去焦点时Trigger | component实例   |
| focus    | 当 input 获得焦点时Trigger | component实例   |

## Methods

| Method Name | Description              | Parameter |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | —    |
