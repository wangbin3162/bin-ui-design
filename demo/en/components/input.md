---
title: Input
---

<b-back-top></b-back-top>

# Input

Basic form input component, supports both `input` and `textarea`.

## Basic Usage

<preview path="./demo/Input/Basic.vue"></preview>

## Icon and Clearable

Set `clearable` to show a clear button. Use `icon` to set an icon.

<preview path="./demo/Input/Icon.vue"></preview>

## Disabled and Readonly

Set `disabled` to disable the input. Set `readonly` for read-only mode.

<preview path="./demo/Input/Disabled.vue"></preview>

## Combo Usage

Two methods are provided for inserting icons.

<preview path="./demo/Input/Group.vue"></preview>

## Search

Search state can be configured.

<preview path="./demo/Input/Search.vue"></preview>

## Password Input

When entering a password, show/hide toggle is usually needed. An icon toggle will be displayed.

<preview path="./demo/Input/Password.vue"></preview>

## Sizes

Three additional sizes are available: `large`, `small`, and `mini`.

<preview path="./demo/Input/Size.vue"></preview>

## Textarea

Set `type="textarea"` to enable textarea mode.

<preview path="./demo/Input/Text.vue"></preview>

## Word Count

Set `show-word-count` to enable the word count display.

<preview path="./demo/Input/Count.vue"></preview>

## Props

| Parameter            | Description                                                                                  | Type                        | Options                                                  | Default  |
| --------------- | ------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------- | ------- |
| type            | Input type                                                                            | string                      | text / password / textarea / url / email / date (Date) / number / tel | —       |
| value           | Bound value, supports v-model two-way binding                                                     | String / Number             | —                                                       | —       |
| size            | Input size                                                                            | large / small / default / mini | —                                                       | default |
| placeholder     | Placeholder text                                                                              | String                      | —                                                       | —       |
| clearable       | Show clear button                                                                      | Boolean                     | —                                                       | false   |
| disabled        | Disabled state                                                                              | Boolean                     | —                                                       | false   |
| readonly        | Read-only mode                                                                              | Boolean                     | —                                                       | false   |
| maxlength       | Maximum input length                                                                          | Number                      | —                                                       | —       |
| icon            | Suffix icon, only effective in text type                                                  | String                      | —                                                       | —       |
| prefix          | inputPrefix icon                                                                        | String                      | —                                                       | —       |
| suffix          | inputSuffix icon                                                                        | String                      | —                                                       | —       |
| search          | Whether to show as a search input                                                                | Boolean                     | —                                                       | false   |
| rows            | Default number of rows for textarea. Only effective in textarea mode                                              | Number                      | —                                                       | 2       |
| autosize        | Auto-resize height based on content. Only effective in textarea mode. Can pass an object, e.g., { minRows: 2, maxRows: 6 } | Boolean/Object              | —                                                       | false   |
| number          | Convert user input to Number type                                                        | Boolean                     | —                                                       | false   |
| autofocus       | Auto focus                                                                          | Boolean                     | —                                                       | false   |
| autocomplete    | Native autocomplete attribute. Accepted values: off, on                                                | String                      | —                                                       | off     |
| element-id      | Set an id on the form element. See Form usage.                                                   | String                      | —                                                       | —       |
| wrap            | Native wrap attribute. Accepted values: hard, soft. Only effective in textarea mode                         | String                      | —                                                       | soft    |
| no-resize       | Disable textarea resize. Only effective in textarea mode                                               | Boolean                     | —                                                       | false   |
| show-word-count | Show word count. Only effective in textarea mode                                                | Boolean                     | —                                                       | false   |
| validate (Date)Event   | Whether to trigger validation. Mainly for form usage. Select and other components also use this internally, set to false              | Boolean                     | —                                                       | true    |

## Input events

| Method Name   | Description                                           | Return Value |
| -------- | ---------------------------------------------- | ------ |
| enter    | Triggers when Enter key is pressed                               | —     |
| click    | Triggers when the icon is clicked (requires icon prop)               | —     |
| change   | Triggers when data changes                                 | event  |
| focus    | Triggers when input gains focus                               | —     |
| blur     | Triggers when input loses focus                           | —     |
| keyup    | Native keyup event                              | event  |
| keydown  | Native keydown event                            | event  |
| keypress | Native keypress event                           | event  |
| search   | Available when search is enabled. Triggers on search icon click or Enter key press | value  |
| clear    | Available when clearable is enabled. Triggers when the clear button is clicked      | —     |

## Input slot

| Name    | Description                           |
| ------- | ------------------------------ |
| prepend | Prepend content. Only effective in text type |
| append  | Append content. Only effective in text type |
| prefix  | inputPrefix icon                 |
| suffix  | inputSuffix icon                 |

## Input methods

| Method Name | Description           | Return Value |
| ------ | -------------- | ------ |
| focus  | Manually focus the input | —     |
