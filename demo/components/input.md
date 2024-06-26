---
title: 输入框 Input
---

<b-back-top></b-back-top>

# 输入框 Input

基本表单组件，支持 input 和 textarea

## 基础用法

<preview path="./demo/Input/Basic.vue"></preview>

## 图标和清空

设置 `clearable` 可以开启清空按钮,icon设置icon图标名称

<preview path="./demo/Input/Icon.vue"></preview>

## 禁用和只读

设置 `disabled` 可以禁用，设置 `readonly` 可以只读

<preview path="./demo/Input/Disabled.vue"></preview>

## 组合使用

提供两种方式来进行插入图标

<preview path="./demo/Input/Group.vue"></preview>

## 设置search

可以设置查询状态

<preview path="./demo/Input/Search.vue"></preview>

## 密码框

输入密码的时候默认需要隐藏显示，这里会开启图标提示

<preview path="./demo/Input/Password.vue"></preview>

## 不同尺寸

提供额外3种尺寸进行配置 `large` `small` 或 `mini`三种尺寸

<preview path="./demo/Input/Size.vue"></preview>

## 设置textarea

可以设置 `type="textarea"`开启文本域模式

<preview path="./demo/Input/Text.vue"></preview>

## 字数统计

可以设置 `show-word-count`开启字数统计

<preview path="./demo/Input/Count.vue"></preview>

## Props

| 参数            | 说明                                                                                  | 类型                        | 可选值                                                  | 默认值  |
| --------------- | ------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------- | ------- |
| type            | 输入框类型                                                                            | string                      | text、password、textarea、url、email、date、number、tel | —       |
| value           | 绑定的值，可使用 v-model 双向绑定                                                     | String / Number             | —                                                       | —       |
| size            | 输入框尺寸                                                                            | large、small、default、mini | —                                                       | default |
| placeholder     | 占位文本                                                                              | String                      | —                                                       | —       |
| clearable       | 是否显示清空按钮                                                                      | Boolean                     | —                                                       | false   |
| disabled        | 禁用状态                                                                              | Boolean                     | —                                                       | false   |
| readonly        | 只读模式                                                                              | Boolean                     | —                                                       | false   |
| maxlength       | 最大输入长度                                                                          | Number                      | —                                                       | —       |
| icon            | 输入框尾部图标，仅在 text 类型下有效                                                  | String                      | —                                                       | —       |
| prefix          | 输入框头部图标                                                                        | String                      | —                                                       | —       |
| suffix          | 输入框尾部图标                                                                        | String                      | —                                                       | —       |
| search          | 是否显示为搜索型输入框                                                                | Boolean                     | —                                                       | false   |
| rows            | 文本域默认行数，仅在 textarea 类型下有效                                              | Number                      | —                                                       | 2       |
| autosize        | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 \{ minRows: 2, maxRows: 6 \} | Boolean/Object              | —                                                       | false   |
| number          | 将用户的输入转换为 Number 类型                                                        | Boolean                     | —                                                       | false   |
| autofocus       | 自动获取焦点                                                                          | Boolean                     | —                                                       | false   |
| autocomplete    | 原生的自动完成功能，可选值为 off 和 on                                                | String                      | —                                                       | off     |
| element-id      | 给表单元素设置 id，详见 Form 用法。                                                   | String                      | —                                                       | —       |
| wrap            | 原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效                         | String                      | —                                                       | soft    |
| no-resize       | 禁用文本域resize ，仅在 textarea 下生效                                               | Boolean                     | —                                                       | false   |
| show-word-count | 显示文本字数统计，仅在 textarea 下生效                                                | Boolean                     | —                                                       | false   |
| validateEvent   | 是否触发校验，主要为form表单使用，选择框等也使用到input的内部设置为false              | Boolean                     | —                                                       | true    |

## Input events

| 方法名   | 说明                                           | 返回值 |
| -------- | ---------------------------------------------- | ------ |
| enter    | 按下回车键时触发                               | 无     |
| click    | 设置 icon 属性后，点击图标时触发               | 无     |
| change   | 数据改变时触发                                 | event  |
| focus    | 输入框聚焦时触发                               | 无     |
| blur     | 输入框失去焦点时触发                           | 无     |
| keyup    | 原生的 keyup 事件                              | event  |
| keydown  | 原生的 keydown 事件                            | event  |
| keypress | 原生的 keypress 事件                           | event  |
| search   | 开启 search 时可用，点击搜索或按下回车键时触发 | value  |
| clear    | 开启 clearable 时可用，点击清空按钮时触发      | 无     |

## Input slot

| 名称    | 说明                           |
| ------- | ------------------------------ |
| prepend | 前置内容，仅在 text 类型下有效 |
| append  | 后置内容，仅在 text 类型下有效 |
| prefix  | 输入框头部图标                 |
| suffix  | 输入框尾部图标                 |

## Input methods

| 方法名 | 说明           | 返回值 |
| ------ | -------------- | ------ |
| focus  | 手动聚焦输入框 | 无     |
