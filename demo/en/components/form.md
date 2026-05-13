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
| disabled                | Disables all components within the form. If set to true, the disabled property on individual components inside the form will no longer take effect       | boolean              | false                    |

## Form Methods

| Method Name        | Description                                                                                                                                                                 | Return Value                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| validate | Method to validate the entire form. The parameter is a callback function that is invoked after validation completes, receiving two parameters: whether validation succeeded and the fields that failed validation. If no callback is provided, it returns a promise | Function(callback: Function(boolean, object))                            |
| validateField | Method to validate specific form fields                                                                                                                                         | Function(props: array / string, callback: Function(errorMessage: string)) |
| resetFields   | Resets the entire form, restoring all field values to their initial values and removing validation results                                                                                                           | —                                                                        |
| clearValidate | Removes validation results for form items. Pass the prop property of the form item(s) or an array of props; if not passed, removes validation results for the entire form                                                             | Function(props: array / string)                                         |

## Form Events

| Method Name   | Description                   | Return Value                                                     |
| -------- | ---------------------- | ---------------------------------------------------------- |
| validate | Triggers after any form item is validated | The prop value of the validated form item, whether validation passed, and the error message (if any) |

## FormItem Props

| Parameter           | Description                                                                         | Type    | Options                          | Default |
| -------------- | ---------------------------------------------------------------------------- | ------- | ------------------------------- | ------ |
| prop           | Form item model field; required when using validate or resetFields methods | string  | Field in the model passed to the Form component | —      |
| label          | Label text                                                                     | string  | —                               | —      |
| label-width    | Width of form item label, e.g. `'80px'`. Supports `auto`.                                 | string  | —                               | —      |
| required       | Whether it is required. If not set, it will be auto-generated based on validation rules                                 | boolean | —                               | false  |
| rules          | Form validation rules                                                                 | object  | —                               | —      |
| error          | Form item validation error message. Setting this value will change the form validation state to error and display the error message      | string  | —                               | —      |
| show-message   | Show validation error message                                                         | boolean | —                               | true   |
| inline-message | Display validation messages inline                                                       | boolean | —                               | false  |
| size           | Controls the size of components under this form item                                                 | string  | large,default,small,mini        | —      |

## FormItem Slot

| Name    | Description           |
| ------- | -------------- |
| default | DefaultContent       |
| label   | Label text content |

## FormItem Scoped Slot

| Name  | Description                                           |
| ----- | ---------------------------------------------- |
| error | Custom display of form validation info, parameter is { error } |

## FormItem Methods

| Name          | Description                                                 |
| ------------- | ---------------------------------------------------- |
| resetField    | Resets this form item, restoring its value to the initial value and removing validation results |
| clearValidate | Removes the validation result for this form item                               |
