---
title: 日期选择器 DatePicker
---

<b-back-top></b-back-top>

# 日期选择器 DatePicker

可以选择日期的picker

## 基础用法

设置type 为 date 或 daterange 分别显示选择单日和选择范围类型。

设置属性 placement 可以更改选择器出现的方向

<preview path="./demo/DatePicker/Basic.vue"></preview>

## 不同选择

可以选择不同的格式选择

<preview path="./demo/DatePicker/Value.vue"></preview>

## 日期范围

设置type 为 daterange 设置范围类型。

<preview path="./demo/DatePicker/Range.vue"></preview>

## 月份范围

可在一个选择器中便捷地选择一个月份范围

<preview path="./demo/DatePicker/Range2.vue"></preview>

## 默认值

如果用户没有选择日期，那默认展示当前日的月份。你可以使用 default-value 来设置成其他的日期

<preview path="./demo/DatePicker/Default.vue"></preview>

## 禁用状态

<preview path="./demo/DatePicker/Disabled.vue"></preview>

## 日期格式

使用format指定输入框的格式。 默认情况下，组件接受并返回Date对象。可以参考dayjs支持的format参数

<preview path="./demo/DatePicker/Format.vue"></preview>

## 不同尺寸

和其他控件一样，拥有四种尺寸

<preview path="./demo/DatePicker/Size.vue"></preview>

## 日期时间

可以设置日期时间同时选择

<preview path="./demo/DatePicker/Time.vue"></preview>

## 日期时间范围

日期时间范围设置

<preview path="./demo/DatePicker/TimeRange.vue"></preview>

## 默认的起始结束时间

默认的起始结束时间

<preview path="./demo/DatePicker/DefaultTime.vue"></preview>

## Props

| 参数              | 说明                                           | 类型                                      | 可选值                                                                                          | 默认值     |
| ----------------- | ---------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| value / v-model   | 绑定值                                         | date(DatePicker) / array(DateRangePicker) | —                                                                                               | —          |
| readonly          | 完全只读                                       | boolean                                   | —                                                                                               | false      |
| disabled          | 禁用                                           | boolean                                   | —                                                                                               | false      |
| editable          | 文本框可输入                                   | boolean                                   | —                                                                                               | true       |
| clearable         | 是否显示清除按钮                               | boolean                                   | —                                                                                               | true       |
| size              | 输入框尺寸                                     | string                                    | large/medium/small/mini                                                                         | large      |
| placeholder       | 非范围选择时的占位内容                         | string                                    | —                                                                                               | —          |
| start-placeholder | 范围选择时开始日期的占位内容                   | string                                    | —                                                                                               | —          |
| end-placeholder   | 范围选择时结束日期的占位内容                   | string                                    | —                                                                                               | —          |
| type              | 显示类型                                       | string                                    | year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange                        | date       |
| format            | 显示在输入框中的格式                           | string                                    | YYYY MM DD hh mm ss                                                                             | YYYY-MM-DD |
| popper-class      | DatePicker 下拉框的类名                        | string                                    | —                                                                                               | —          |
| range-separator   | 选择范围时的分隔符                             | string                                    | —                                                                                               | '-'        |
| default-value     | 可选，选择器打开时默认显示的时间               | Date                                      | 可被`new Date()`解析                                                                            | —          |
| default-time      | 范围选择时选中日期所使用的当日内具体时刻       | Date[]                                    | 数组，长度为 2，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00` | —          |
| unlink-panels     | 在范围选择器里取消两个日期面板之间的联动       | boolean                                   | —                                                                                               | false      |
| prefix-icon       | 自定义头部图标的类名                           | string                                    | —                                                                                               | —          |
| clear-icon        | 自定义清空图标的类名                           | string                                    | —                                                                                               | —          |
| validate-event    | 输入时是否触发表单的校验                       | boolean                                   | -                                                                                               | true       |
| shortcuts         | 设置快捷选项，需要传入数组对象                 | object[{ text: string, value: Date }]     | —                                                                                               | —          |
| disabledDate      | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function                                  | —                                                                                               | —          |

## Events

| 事件名称 | 说明                    | 回调参数   |
| -------- | ----------------------- | ---------- |
| change   | 用户确认选定的值时触发  | 组件绑定值 |
| blur     | 当 input 失去焦点时触发 | 组件实例   |
| focus    | 当 input 获得焦点时触发 | 组件实例   |

## Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | —    |
