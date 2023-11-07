---
title: 表单 Form
---

<b-back-top></b-back-top>

# 表单 Form

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

## 基础用法

基础的表单使用，表单项，比如输入框、选择器、开关、单选框、多选框等。

<preview path="./demo/Form/Basic.vue"></preview>

## 行内表单

表单内容项比较少的情况可以使用行内模式

<preview path="./demo/Form/Inline.vue"></preview>

## 对齐和尺寸

可以有三种不同的标签对齐方式,纯文字需要包裹label标签

<preview path="./demo/Form/Aline.vue"></preview>

## 没有label显示

<preview path="./demo/Form/NoLabel.vue"></preview>

## 表单校验

提供基础的校验规则，校验规则参考 [async-validator](https://github.com/yiminghe/async-validator)

<preview path="./demo/Form/Validator.vue"></preview>

## 自定义校验规则

可以自定义校验函数来实现更多的校验判定

<preview path="./demo/Form/CustomValidator.vue"></preview>

## 动态增加校验

可以动态的配置校验规则
<preview path="./demo/Form/Add.vue"></preview>

## Form Props

| 参数                    | 说明                                                                                    | 类型           | 可选值                   | 默认值 |
| ----------------------- | --------------------------------------------------------------------------------------- | -------------- | ------------------------ | ------ |
| model                   | 表单数据对象                                                                            | object         | —                        | —      |
| rules                   | 表单验证规则                                                                            | object         | —                        | —      |
| inline                  | 行内表单模式                                                                            | boolean        | —                        | false  |
| label-position          | 标签的位置，如果值为 left 或者 right 时，则需要设置 label-width                         | right/left/top | —                        | right  |
| label-width             | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | —              | —                        | —      |
| label-suffix            | 表单域标签的后缀                                                                        | string         | —                        | —      |
| hide-required-asterisk  | 是否隐藏必填字段的标签旁边的红色\*                                                      | boolean        | —                        | false  |
| show-message            | 是否显示校验错误信息                                                                    | boolean        | —                        | true   |
| inline-message          | 是否以行内形式展示校验信息,此时右侧需要留出校验信息的显示宽度才可以正常使用             | boolean        | —                        | false  |
| status-icon             | 是否在输入框中显示校验结果反馈图标                                                      | boolean        | —                        | false  |
| validate-on-rule-change | 是否在 rules 属性改变后立即触发一次验证                                                 | boolean        | —                        | true   |
| size                    | 用于控制该表单内组件的尺寸                                                              | string         | large,default,small,mini | —      |
| disabled                | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效       | —              | false                    |

## Form Methods

| 方法名        | 说明                                                                                                                                                                 | 返回值                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                            |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | Function(props: array、string, callback: Function(errorMessage: string)) |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | —                                                                        |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | Function(props: array 、 string)                                         |

## Form Events

| 方法名   | 说明                   | 返回值                                                     |
| -------- | ---------------------- | ---------------------------------------------------------- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

## FormItem Props

| 参数           | 说明                                                                         | 类型    | 可选值                          | 默认值 |
| -------------- | ---------------------------------------------------------------------------- | ------- | ------------------------------- | ------ |
| prop           | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string  | 传入 Form 组件的 model 中的字段 | —      |
| label          | 标签文本                                                                     | string  | —                               | —      |
| label-width    | 表单域标签的的宽度，例如 '80px'。支持 auto。                                 | string  | —                               | —      |
| required       | 是否必填，如不设置，则会根据校验规则自动生成                                 | boolean | —                               | false  |
| rules          | 表单验证规则                                                                 | object  | —                               | —      |
| error          | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息      | string  | —                               | —      |
| show-message   | 是否显示校验错误信息                                                         | boolean | —                               | true   |
| inline-message | 以行内形式展示校验信息                                                       | boolean | —                               | false  |
| size           | 用于控制该表单域下组件的尺寸                                                 | string  | large,default,small,mini        | —      |

## FormItem Slot

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认内容       |
| label   | 标签文本的内容 |

## FormItem Scoped Slot

| 名称  | 说明                                           |
| ----- | ---------------------------------------------- |
| error | 自定义表单校验信息的显示方式，参数为 { error } |

## FormItem Methods

| 名称          | 说明                                                 |
| ------------- | ---------------------------------------------------- |
| resetField    | 对该表单项进行重置，将其值重置为初始值并移除校验结果 |
| clearValidate | 移除该表单项的校验结果                               |
