---
title: Cascader
---

<b-back-top></b-back-top>

# Cascader

A general-purpose cascading selector.

## Basic Usage

<preview path="./demo/Cascader/Basic.vue"></preview>

## Disabled State

Use `disabled` to disable the cascader.

<preview path="./demo/Cascader/Disabled.vue"></preview>

## Clearable

The selection can be cleared.

<preview path="./demo/Cascader/Clear.vue"></preview>

## Show Last Level Only

The input can be configured to show only the last level label.

<preview path="./demo/Cascader/Last.vue"></preview>

## Multiple Selection

Set `props.multiple` to enable multi-selection.

<preview path="./demo/Cascader/Multiple.vue"></preview>

## Select Any Level

In single mode, only leaf nodes can be selected. In multi mode, checking a parent node selects its leaf nodes. Enable this feature to decouple parent-child selection and allow selecting any level.

Set `props.checkStrictly = true` to decouple parent-child selection, allowing independent selection at any level.

<preview path="./demo/Cascader/Any.vue"></preview>

## Dynamic Loading

Dynamically load child options when a level is selected. Enable with `lazy` and configure the data source method via `lazyload`.

The `lazyload` method has two parameters: the first parameter `node` is the currently clicked node, the second `resolve` is the callback that must be called when data loading is complete. For more accurate display of node status, you can also mark node data with a leaf indicator (the default field is `leaf`, which can be modified via `props.leaf`). Otherwise, it simply checks whether the node has children to determine whether it is a leaf node.

<preview path="./demo/Cascader/Lazy.vue"></preview>

## Searchable

Quickly search and select options. Set `filterable` to `true` to enable search. By default, it matches options whose label (or all ancestor labels, depending on `show-all-levels`) contains the search text.

You can also use `filter-method` to customize the search logic. It accepts a function with two parameters: the node and the search keyword, and returns a boolean to indicate whether it matches.

<preview path="./demo/Cascader/Search.vue"></preview>

## Custom Options

Option content can be customized. The scoped slot receives two props: `node` (the current Node object) and `data` (the node data).

<preview path="./demo/Cascader/Custom.vue"></preview>

## Sizes

<preview path="./demo/Cascader/Size.vue"></preview>

## Cascader Panel

You can use a panel display instead of the popper dialog. Usage is the same as cascader.

<preview path="./demo/Cascader/Panel.vue"></preview>

## Cascader Props

| Parameter            | Description                                                                                                | Type                    | Options                | Default    |
| --------------- | --------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- | --------- |
| value / v-model | Binding value of the selected item                                                                        | -                       | —                     | —         |
| options         | Data source for options. Key names can be configured via the `Props` property                              | array                   | —                     | —         |
| props           | Configuration options, see the table below                                                                | object                  | —                     | —         |
| size            | Size                                                                                                     | string                  | medium / small / mini | —         |
| placeholder     | Input placeholder text                                                                                   | string                  | —                     | Please select |
| disabled        | Disabled                                                                                                 | boolean                 | —                     | false     |
| clearable       | Whether to support clearing options                                                                       | boolean                 | —                     | false     |
| show-all-levels | Whether to show the full path of the selected value in the input                                          | boolean                 | —                     | true      |
| collapse-tags   | Whether to collapse tags in multi-select mode                                                             | boolean                 | -                     | false     |
| separator       | Option separator                                                                                         | string                  | —                     | ' / '     |
| filterable      | Whether options are searchable                                                                            | boolean                 | —                     | —         |
| filter-method   | Custom search logic. The first parameter is the node `node`, the second is the search keyword `keyword`. Returns a boolean indicating whether it matches | function(node, keyword) | -                     | -         |
| debounce        | Debounce delay for search keyword input, in milliseconds                                                  | number                  | —                     | 300       |
| before-filter   | Hook before filtering. The parameter is the input value. If it returns false or a rejected Promise, filtering stops | function(value)         | —                     | —         |
| popper-class    | Custom class name for the overlay                                                                         | string                  | —                     | —         |

## Cascader Events

| Event Name      | Description                        | Callback Parameters                      |
| -------------- | --------------------------- | ----------------------------- |
| change         | Triggered when the selected node changes        | Value of the selected node                  |
| expand-change  | Triggered when the expanded node changes    | Array of parent option values        |
| blur           | Triggered when focus is lost            | (event: Event)                |
| focus          | Triggered when focus is gained            | (event: Event)                |
| visible-change | Triggered when the dropdown appears/hides       | true when appearing, false when hiding |
| remove-tag     | Triggered when a tag is removed in multi-select mode | Value of the node corresponding to the removed tag       |

## Cascader Methods

| Method Name          | Description           | Parameter                                          |
| --------------- | -------------- | --------------------------------------------- |
| getCheckedNodes | Get the selected nodes | (leafOnly) Whether to only return leaf nodes, default is `false` |

## Cascader Slots

| Name  | Description                                                                            |
| ----- | ------------------------------------------------------------------------------- |
| -     | Custom content for option nodes. Parameters are { node, data }, the Node object and data of the current node respectively |
| empty | Content when no matching options are found                                                              |

## CascaderPanel Attributes

| Parameter            | Description                                      | Type   | Options | Default |
| --------------- | ----------------------------------------- | ------ | ------ | ------ |
| value / v-model | Binding value of the selected item                              | -      | —      | —      |
| options         | Data source for options. Key names can be configured via the `Props` property | array  | —      | —      |
| props           | Configuration options, see the table below                      | object | —      | —      |

## CascaderPanel Events

| Event Name      | Description                     | Callback Parameters               |
| ------------- | ------------------------ | ---------------------- |
| change        | Triggered when the selected node changes     | Value of the selected node           |
| expand-change | Triggered when the expanded node changes | Array of parent option values |

## CascaderPanel Methods

| Method Name            | Description               | Parameter                                          |
| ----------------- | ------------------ | --------------------------------------------- |
| getCheckedNodes   | Get the array of selected nodes | (leafOnly) Whether to only return leaf nodes, default is `false` |
| clearCheckedNodes | Clear the selected nodes     | -                                             |

## CascaderPanel Slots

| Name | Description                                                                            |
| ---- | ------------------------------------------------------------------------------- |
| -    | Custom content for option nodes. Parameters are { node, data }, the Node object and data of the current node respectively |

## Props

| Parameter          | Description                                                                                               | Type                                                                                     | Options        | Default     |
| ------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------- | ---------- |
| expandTrigger | Trigger mode for sub-menus to expand                                                                 | string                                                                                   | click / hover | 'click'    |
| multiple      | Whether to support multi-select                                                                                           | boolean                                                                                  | -             | false      |
| checkStrictly | Whether to strictly enforce parent-child node independence                                                                   | boolean                                                                                  | -             | false      |
| emitPath      | When the selected node changes, whether to return an array composed of values from each menu level where the node is located. If set to false, only the value of that node is returned | boolean                                                                                  | -             | true       |
| lazy          | Whether to dynamically load child nodes. Must be used with the `lazyLoad` method                                                     | boolean                                                                                  | -             | false      |
| lazyLoad      | Method for loading dynamic data, only effective when `lazy` is true                                                       | function(node, resolve), `node` is the currently clicked node, `resolve` is the callback that must be called when data loading is complete | -             | -          |
| value         | Specifies which property of the option object to use as the option value                                                                 | string                                                                                   | —             | 'value'    |
| label         | Specifies which property of the option object to use as the option label                                                                 | string                                                                                   | —             | 'label'    |
| children      | Specifies which property of the option object to use as the option's children                                                             | string                                                                                   | —             | 'children' |
| disabled      | Specifies which property of the option object to use as the option's disabled state                                                               | string                                                                                   | —             | 'disabled' |
| leaf          | Specifies which property of the option object to use as the leaf node indicator                                                   | string                                                                                   | —             | 'leaf'     |
