---
title: Tree
---

<b-back-top></b-back-top>

# Tree

## Basic Usage

`lockSelect` locks the tree selection event, useful for controlling tree menu behavior in different scenarios.

<preview path="./demo/Tree/Basic.vue"></preview>

## Additional Parameters

You can configure additional parameters such as id, code, etc. You can also specify the display field name for title, which defaults to `title`.

<preview path="./demo/Tree/Param.vue"></preview>

## Other Properties

Set `show-checkbox` to enable checkboxes, and configure default checked state in the data format.

`expand`, `selected`, `checked`, and `disabled` control expansion, selection, check state, and disabled state. `multiple` enables multi-selection.

<preview path="./demo/Tree/Other.vue"></preview>

## Node Operations

The tree internally flattens all nodes into an array and assigns a unique `nodeKey` to each node, making it easy to get and set tree state.

<preview path="./demo/Tree/Ctrl.vue"></preview>

## Async Child Node Loading

<preview path="./demo/Tree/Load.vue"></preview>

## Filterable

If the tree has many levels, use a filter function to filter nodes.

<preview path="./demo/Tree/Filter.vue"></preview>

## Drag to Reorder

Set `draggable` to enable drag-and-drop for tree nodes. You will need to listen for several events to handle data update.

<preview path="./demo/Tree/Drag.vue"></preview>

## Render Function

Use the render function for more advanced custom effects.

<preview path="./demo/Tree/Render.vue"></preview>

## Tree Select

Due to the many tree selection scenarios, a separate tree-select component is also provided for use in forms.

<preview path="./demo/Tree/Select.vue"></preview>

## Tree Validation

Can be used with form validation.

<preview path="./demo/Tree/Valid.vue"></preview>

## Big-Tree (Large Data)

To render extremely large tree structures, use the extended component `<b-big-tree>`. It reuses all tree APIs and optimizes performance by filtering and operating on nodes within the visible viewport.
However, to maintain performance, some user experience trade-offs are necessary. Large data trees do not support animated expand/collapse effects.

DefaultNode height为`28px`，Use `visible-count` to specify the number of nodes shown in the visible area (default: 15, i.e., `420px`). Since this is optimized for viewport scrolling, you must specify the container height.

<preview path="./demo/Tree/Big.vue"></preview>

## Props

| Parameter               | Description                                                                                                                                                                                | Type                                   | Options | Default   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------ | -------- |
| data               | Nested array of node properties for generating tree data                                                                                                                                            | Array                                  | —      | []       |
| multiple           | Whether to support multi-select                                                                                                                                                                        | Boolean                                | —      | false    |
| show-checkbox      | Whether to show checkboxes                                                                                                                                                                      | Boolean                                | —      | false    |
| empty-text         | Text displayed when there is no data                                                                                                                                                                    | String                                 | —      | is not data |
| load-data          | Method for async loading data, see examples                                                                                                                                                          | Function                               | —      | —        |
| title-key          | Define the title key, defaults to `title`                                                                                                                                                            | String                                 | —      | title    |
| children-key       | Define the children key, defaults to `children`                                                                                                                                             | String                                 | —      | children |
| check-strictly     | In checkbox mode, whether to strictly maintain parent-child independence                                                                                                                                  | Boolean                                | —      | false    |
| check-directly     | When enabled, selection interaction in show-checkbox mode will also toggle checkboxes                                                                                                                        | Boolean                                | —      | false    |
| lock-select        | Lock tree selection. Commonly used in business scenarios, e.g., to disable tree selection when a modal is open                                                                                                                        | Boolean                                | —      | false    |
| title-ellipsis     | Enable title text ellipsis for overflow                                                                                                                                                                | Boolean                                | —      | true     |
| draggable          | Enable drag-and-drop for tree nodes                                                                                                                                                                | Boolean                                | —      | true     |
| allow-drag         | Determines whether a node can be dragged. Return `false` to prevent dragging                                                                                                                                  | Function(node)                         | —      | —        |
| allow-drop         | Determines whether the target can be a drop position. Return `false` to prevent. The `type` parameter has three values: 'prev', 'inner', and 'next' (before, inside, and after the target node) | Function(draggingNode, dropNode, type) | —      | —        |
| filter-node-method | Filter function for tree nodes                                                                                                                                                                  | Function                               | —      | —        |
| highlight-filter   | Highlight search keywords in text                                                                                                                                                                    | Boolean                                | —      | true     |
| timeout            | Refresh interval (`<b-big-tree>` extended component only)                                                                                                                                              | Number                                 | —      | 17       |
| itemHeight         | Node height (`<b-big-tree>` extended component only)                                                                                                                                             | Number                                 | —      | 28       |
| visibleCount       | Number of nodes shown in the visible area (`<b-big-tree>` extended component only)                                                                                                                                          | Number                                 | —      | 15       |

## Events

| Event Name          | Description                   | Return Value                                                                       |
| --------------- | ---------------------- | ---------------------------------------------------------------------------- |
| select-change   | Triggers when a tree node is clicked       | Array of currently selected nodes, current item, flatState                                      |
| check-change    | Triggers when a checkbox is clicked       | Array of currently checked nodes, current item, array including half-checked nodes, flatState                  |
| toggle-expand   | Triggers when expanding or collapsing child list | Data of the current node                                                               |
| node-drag-start | Triggers when node drag starts       | Node being dragged, event                                                 |
| node-drag-enter | Triggers when dragged node enters       | Node being dragged, Node being entered, event                        |
| node-drag-leave | Triggers when dragged node leaves       | Node being dragged, Node being left, event                          |
| node-drag-over  | Triggers on dragover event     | Node being dragged, Node being entered, event                        |
| node-drag-end   | Triggers when node drag ends       | Node being dragged, target Node, drop type, event |
| node-drag       | Triggers when node drag ends       | Node being dragged, target Node, drop type, event |

## Methods

| Event Name                          | Description                                                                                                             | Return Value |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------ |
| getFlatState                    | Flattened array buffer containing hierarchy and indices                                                                         |
| getCheckedNodes                 | Get checked nodes                                                                                                 | —     |
| getSelectedNodes                | Get selected nodes                                                                                                 | —     |
| getCheckedAndIndeterminateNodes | Get selected and half-checked nodes                                                                                               | —     |
| filter                          | Tree node filter function; requires filter-node-method to be set                                                         | —     |
| setChecked                      | Set node checked state. Parameters: keys (array of nodeKeys), flag (checked state, default: true)                                            | —     |
| setSelected                     | Set node selected state. Parameters: keys (array of nodeKeys), flag (selected state, default: true), expandParent (whether to expand ancestor nodes, default: true) | —     |
| setExpand                       | Set node expanded state. Parameters: keys (array of nodeKeys), flag (expanded state, default: true)                                            | —     |
| expandAll                       | Expand all                                                                                                         | —     |
| collapseAll                     | Collapse all                                                                                                         | —     |
| checkAll                        | Check all                                                                                                         | —     |
| unselectAll                     | Deselect all                                                                                                     | —     |
| uncheckAll                      | Uncheck all                                                                                                     | —     |

## Children

| Property            | Description                                                         | Type    | Default |
| --------------- | ------------------------------------------------------------ | ------- | ------ |
| icon            | Node icon                                                | String  | —      |
| title           | Node title                                                 | String  | —      |
| expand          | Whether to expand direct child nodes                                             | Boolean | false  |
| disabled        | Disabled                                                         | Boolean | false  |
| disableCheckbox | Disable checkbox                                                   | Boolean | false  |
| selected        | Whether to select child nodes                                               | Boolean | false  |
| checked         | Whether to check (if checked, all child nodes will also be checked)                       | Boolean | false  |
| visible         | Whether to show the node (nodes can be hidden by setting visible to false)            | Boolean | false  |
| children        | Array of child node properties. Use the children-key prop on the tree component to customize. | Array   | —      |
| loading         | Can be set for async loading. Requires loadData to be configured.           | Boolean | —      |
| isLeaf          | Whether it is a leaf node. Controls whether to show the arrow. Can be used with async loading.       | Boolean | —      |
