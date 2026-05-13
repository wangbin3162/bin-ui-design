---
title: Form
---

<b-back-top></b-back-top>

# Form

Composed of inputs, selects, radios, checkboxes and other controls, for collecting, validating, and submitting data.

## Basic Usage

Basic form usage with form items such as inputs, selects, switches, radios, checkboxes etc.

<preview path="./demo/Form/Basic.vue"></preview>

## Inline Form

Use inline mode when there are few form items.

<preview path="./demo/Form/Inline.vue"></preview>

## Alignment and Size

Three label alignment options are available. Pure text labels need to be wrapped in a label tag.

<preview path="./demo/Form/Aline.vue"></preview>

## Without Label Display

<preview path="./demo/Form/NoLabel.vue"></preview>

## Form Validation

Provides basic validation rules. See [async-validator](https://github.com/yiminghe/async-validator) for reference.

<preview path="./demo/Form/Validator.vue"></preview>

## Custom Validation Rules

Custom validation functions can be used for more complex validation logic.

<preview path="./demo/Form/CustomValidator.vue"></preview>

## Dynamic Validation

Validation rules can be configured dynamically.
<preview path="./demo/Form/Add.vue"></preview>

## Form Props

| Parameter                    | Description                                                                                    | Type           | Options                   | Default |
| ----------------------- | --------------------------------------------------------------------------------------- | -------------- | ------------------------ | ------ |
| model                   | Form data object                                                                            | object         | —                        | —      |
| rules                   | Form validation rules                                                                            | object         | —                        | —      |
| inline                  | Inline form mode                                                                            | boolean        | —                        | false  |
| label-position          | Label position. When set to `left` or `right`, `label-width` must also be set.                         | right / left / top | —                        | right  |
| label-width             | Width of form item labels, e.g. `'50px'`. Direct form-item children of Form inherit this value. Supports `auto`. | —              | —                        | —      |
| label-suffix            | Suffix for form item labels                                                                        | string         | —                        | —      |
| hide-required-asterisk  | Hide the red asterisk next to required field labels\*                                                      | boolean        | —                        | false  |
| show-message            | Show validation error message                                                                    | boolean        | —                        | true   |
| inline-message          | Show validation messages inline. The right side must reserve space for the validation message.             | boolean        | —                        | false  |
| status-icon             | Whether to show validation result icon in the input                                                      | boolean        | —                        | false  |
| validate (Date)-on-rule-change | Whether to trigger validation immediately after rules change                                                 | boolean        | —                        | true   |
| size                    | Controls the size of components within this form                                                              | string         | large,default,small,mini | —      |
| disabled                | Disable d该form内的所有component。若设置为 true，则form内component上的 disabled property不再生效       | —              | false                    |

## Form Methods

| Method Name        | Description                                                                                                                                                                 | Return Value                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| validate (Date)      | 对整个form进行validation的method，parameter为一个Callback function。该Callback function会在validation结束后被call，并传入两个parameter：Whether to validation成功和未通过validation的字段。若不传入Callback function，则会返回一个 promise | Function(callback: Function(boolean, object))                            |
| validate (Date)Field | 对部分form字段进行validation的method                                                                                                                                         | Function(props: array、string, callback: Function(errorMessage: string)) |
| resetFields   | 对整个form进行reset，将所有字段值reset为Initial value并移除validation结果                                                                                                           | —                                                                        |
| clearValidate (Date) | 移除form项的validation结果。传入待移除的form项的 prop property or 者 prop 组成的数组，如不传则移除整个form的validation结果                                                             | Function(props: array 、 string)                                         |

## Form Events

| Method Name   | Description                   | Return Value                                                     |
| -------- | ---------------------- | ---------------------------------------------------------- |
| validate (Date) | 任一form项被validation后Trigger | 被validation的form项 prop 值，validationWhether to 通过，错误message（如果存在） |

## FormItem Props

| Parameter           | Description                                                                         | Type    | Options                          | Default |
| -------------- | ---------------------------------------------------------------------------- | ------- | ------------------------------- | ------ |
| prop           | form item model 字段，在use validate (Date)、resetFields method的情况下，该propertyYes必填的 | string  | 传入 Form component的 model 中的字段 | —      |
| label          | tag文本                                                                     | string  | —                               | —      |
| label-width    | form itemtag的的Width，e.g.  '80px'。支持 auto。                                 | string  | —                               | —      |
| required       | Whether to 必填，如不设置，则会根据validation规则自动生成                                 | boolean | —                               | false  |
| rules          | Form validation rules                                                                 | object  | —                               | —      |
| error          | form itemvalidate错误信息, 设置该值会使formvalidate状态变为error，并Show该错误信息      | string  | —                               | —      |
| show-message   | Show validation error message                                                         | boolean | —                               | true   |
| inline-message | 以行内形式展示validation信息                                                       | boolean | —                               | false  |
| size           | Controls 该form item下component的size                                                 | string  | large,default,small,mini        | —      |

## FormItem Slot

| Name    | Description           |
| ------- | -------------- |
| default | DefaultContent       |
| label   | tag文本的Content |

## FormItem Scoped Slot

| Name  | Description                                           |
| ----- | ---------------------------------------------- |
| error | 自定义formvalidation信息的Show方式，parameter为 { error } |

## FormItem Methods

| Name          | Description                                                 |
| ------------- | ---------------------------------------------------- |
| resetField    | 对该form项进行reset，将其值reset为Initial value并移除validation结果 |
| clearValidate (Date) | 移除该form项的validation结果                               |
