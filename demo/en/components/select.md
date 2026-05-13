---
title: Select
---

<b-back-top></b-back-top>

# Select

## Basic Usage

Basic usage. Use `v-model` for two-way data binding.

In single-select mode, value only accepts strings and numbers. In multi-select mode, it only accepts arrays. The component automatically returns selected data based on the Option value.

You can add style to the Select, such as width.

<preview path="./demo/Select/Basic.vue"></preview>

## Disabled Options and Disabled State

Disabled state and individual option disabling can be configured.

<preview path="./demo/Select/Disabled.vue"></preview>

## Other States

Clearable, grouped, or custom template display.

<preview path="./demo/Select/Status.vue"></preview>

## Search Mode

Search and filter options.

<preview path="./demo/Select/Search.vue"></preview>

## Multi-Select and Collapse

Multi-selection is supported.

<preview path="./demo/Select/Multiple.vue"></preview>

## Prefix Mode

You can set a prefix for the dropdown.

<preview path="./demo/Select/Prefix.vue"></preview>

## Create New Item

Allows creating entries not in the list. Use `allow-create` to enable input and creation; `filterable` must be `true`.

<preview path="./demo/Select/Add.vue"></preview>

## Sizes

Four sizes are available:

<preview path="./demo/Select/Size.vue"></preview>

## Select props

| Parameter                 | Description                                                                 | Type                               | Options                                                    | Default            |
| -------------------- | -------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------- | ----------------- |
| v-model              | Specifies the value of the selected item. Supports v-model for two-way binding.        | String / Number / Boolean / Object | —                                                         | —                |
| multiple             | Multi-select                                                                 | Boolean                            | —                                                         | false             |
| disabled             | Disable d                                                             | Boolean                            | —                                                         | false             |
| clearable            | Clear options, only effective in single-select mode                                             | Boolean                            | —                                                         | false             |
| filterable           | Enable search                                                         | Boolean                            | —                                                         | false             |
| size                 | Select size                                                           | String                             | large / small / default / mini                               | default           |
| placeholder          | Placeholder text                                                       | String                             | —                                                         | —                 |
| value-key            | Key name used as the unique identifier for value. Required when the bound value is an object.                    | string                             | —                                                         | value             |
| no-match-text        | Text displayed when no search results match, can also use #empty slot to set                     | String                             | —                                                         | No matching data      |
| no-data-tex          | Text displayed when options are empty                                                 | String                             | —                                                         | No data          |
| allow-create         | Whether to allow creating new items not in the list. Must be used with filterable                         | Boolean                            | —                                                         | false             |
| filter-method        | Custom search method                                                       | Function                           | —                                                         | —                 |
| remote               | Whether to enable remote search                                                     | boolean                            | —                                                         | false             |
| loading              | Whether data is currently being fetched from remote                                               | boolean                            | —                                                         | false             |
| loading-text         | Text displayed during remote loading                                                         | boolean                            | —                                                         | Loading...            |
| placement            | Expansion direction of the dropdown                                                       | String                             | top / bottom / top-start / bottom-start / top-end / bottom-end | bottom-start      |
| append-to-body       | Append the overlay to body                                             | Boolean                            | —                                                         | true              |
| multiple-limit       | Maximum number of selections allowed in multi-select mode                                               | Number                             | —                                                         | —                 |
| collapse-tags        | Whether to collapse tags in multi-select mode                                                   | Boolean                            | —                                                         | false             |
| popper-class         | Custom class name for the popup                                                     | String                             | —                                                         | —                 |
| default-first-option | When pressing Enter in the input, select the first matching option. Must be used with filterable or remote | Boolean                            | —                                                         | false             |
| clear-icon           | Class name for the clear icon                                                       | String                             | —                                                         | close-circle-fill |

## Select events

| Event Name         | Description                                   | Return Value                        |
| -------------- | -------------------------------------- | ----------------------------- |
| change         | Triggered when the selected option changes, returns value by default | Currently selected item                    |
| clear          | Triggered when the clear button is clicked                     | —                            |
| visible-change | Triggered when the dropdown appears/hides                  | true when appearing, false when hiding |
| remove-tag     | Triggered when a tag is removed in multi-select mode                | Value of the removed tag                   |
| blur           | Triggered when focus is lost                           | (event: Event)                |
| focus          | Triggered when focus is gained                           | (event: Event)                |

## Select slot

| Name   | Description                     |
| ------ | ------------------------ |
| prefix | Custom prefix icon inside the Select |
| empty  | Content when no options are available           |

## Option props

| Parameter     | Description                                                                                        | Type          | Options | Default |
| -------- | ------------------------------------------------------------------------------------------- | ------------- | ------ | ------ |
| value    | Option value. Filtering is based on this property value by default. Required.                                                      | string/number | —      | —     |
| label    | Option display content. By default the slot content is read. If no slot, this label value is read first. If no label, the value is read. | String        | —      | —      |
| disabled | Disable the current item                                                                              | Boolean       | —      | false  |

## OptionGroup props

| Parameter     | Description                     | Type    | Options | Default |
| -------- | ------------------------ | ------- | ------ | ------ |
| label    | Group name                 | String  | —      | —      |
| disabled | Disable all options under this group | Boolean | —      | false  |
