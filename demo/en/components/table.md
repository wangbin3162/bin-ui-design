---
title: Table
---

<b-back-top></b-back-top>

# Table

A basic table component for displaying list data.

## Basic Usage

<preview path="./demo/Table/Basic.vue"></preview>

## Striped Rows

Set `stripe` to enable alternating row colors.

<preview path="./demo/Table/Stripe.vue"></preview>

## Border

Set `border` to enable vertical borders.

<preview path="./demo/Table/Border.vue"></preview>

## Text Overflow Tooltip

Set `tooltip` on columns to truncate text and show full content on hover. If only one table exists, you can also configure the `tooltip-theme` skin for optimized styles.
(Note: Since table cells have overflow:hidden, tooltip tags must be appended to the body element. Multiple table instances may create too many tags and cause performance issues, so enable this based on your needs.)

<preview path="./demo/Table/Tooltip.vue"></preview>

## Fixed Header

Use `height` and `maxHeight` to set a fixed table header.

<preview path="./demo/Table/FixedHeader.vue"></preview>

## Fixed Header and Columns

Both header and columns can be fixed simultaneously.

<preview path="./demo/Table/FixedColumn.vue"></preview>

## Auto Height

<preview path="./demo/Table/AutoHeight.vue"></preview>

## Single Selection

<preview path="./demo/Table/Select.vue"></preview>

## Multiple Selection

Enable multi-selection by adding a column with `type: 'selection'`.

Set the special key `_checked: true` on a data row to pre-select it.

Set the special key `_disabled: true` on a data row to disable its selection.

@select: triggers when a row is selected. Returns `selection` and `row` — the selected rows and the most recently selected row. @select-all: triggers when all items are selected. Returns `selection` — all selected rows.
@selection-change: triggers whenever the selection changes. Returns `selection` — all selected rows.

<preview path="./demo/Table/MultiplySelect.vue"></preview>

## Expandable Rows

Enable expandable rows by adding a column with `type: 'expand'`.

<preview path="./demo/Table/Expand.vue"></preview>

## Grouped Header

Use `children` in column definitions to group table headers. For merged headers and cells, the `border` mode is recommended.

<preview path="./demo/Table/GroupHeader.vue"></preview>

## Row & Column Merging

Configure `mergeMethod` to specify row/column merging logic.，methodparameter为四个对象`row`，`column`，`rowIndex`，`columnIndex`，
The method returns an array of two elements: the first is `rowspan`, the second is `colspan`. It is recommended to use `border` mode for merged cells.

<preview path="./demo/Table/Merge.vue"></preview>

## Sortable

<preview path="./demo/Table/Sort.vue"></preview>

## Inline Editing

<preview path="./demo/Table/Edit.vue"></preview>

## Edit Mode

Enable the edit table style to hide input borders, making inline table editing easier.

<preview path="./demo/Table/Edit2.vue"></preview>

## Drag to Reorder

Set `draggable` to enable drag sorting.

Note: When drag sorting is enabled, mouse drag also covers text selection. You can set `handle` to specify a drag handle element.

To update (Date) data, use `v-model:data` for two-way binding, or handle update (Date)s in the `@drag-drop` event.

<preview path="./demo/Table/Drag.vue"></preview>

## Loading State

<preview path="./demo/Table/Loading.vue"></preview>

## Sizes

Set `size` to `large` or `small` to adjust table size. The default is `default` (same as not specifying).

<preview path="./demo/Table/Size.vue"></preview>

## Empty Data

Set `noDataText` for the empty data state.

<preview path="./demo/Table/NoData.vue"></preview>

## Table props

| Parameter                 | Description                                                                                                          | Type          | Options        | Default   |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ------------- | ------------- | -------- |
| data                 | Structured data to display. The field `cellClassName` is reserved for setting custom cell class names, so do not use it in your data. See examples for specific style usage. | Array         | —             | []       |
| columns              | Column configuration, see below for details                                                                                | Array         | —             | []       |
| stripe               | Show stripe rows alternately                                                                                                    | Boolean       | false/true    | false    |
| border               | Show vertical border                                                                                                      | Boolean       | false/true    | false    |
| show-header          | Whether to show Table header                                                                                                  | Boolean       | false/true    | false    |
| width                | Table width in px                                                                                             | Number/String | —             | auto     |
| height               | Table height in px; if content exceeds this value, the header becomes fixed                                                   | Number/String | —             | —        |
| max-height           | Max table height                                                                                                  | Number/String | —             | —        |
| loading              | Table loading state                                                                                                  | Boolean       | —             | false    |
| disabled-hover       | Disable hover highlight                                                                                                  | Boolean       | —             | false    |
| highlight-row        | Enable row highlight / single-selection mode.                                                                                  | Boolean       | —             | false    |
| highlight-row-cancel | 单选高亮Whether to 可以cancel，如果Yes则再次clickselect的行会cancelselect                                                      | Boolean       | —             | false    |
| size                 | Table size                                                                                                      | string        | large / small | default  |
| no-data-text         | Empty data placeholder text                                                                                                    | string        | —             | is not data |
| loading-text         | Loading text                                                                                                  | string        | —             | Loading... |
| draggable            | Enable drag to reorder rows，同步元数据需要usev-model:datause or 需配合 @drag-drop eventupdatedata都可以                  | Boolean       | —             | false    |
| drag-handle          | Drag handle icon                                                                                              | String        | —             | —        |
| row-key              | Whether to 强制use内置row-key刷新                                                                                   | Boolean       | —             | false    |
| merge-method         | Merge method for row/column spanning                                                                                        | Function      | —             | false    |

## Table events

| Event Name            | Description                                                        | Return Value                                                         |
| ----------------- | ----------------------------------------------------------- | -------------------------------------------------------------- |
| current-change    | Effective when highlight-row is enabled; triggers when the current row changes | currentRow, oldCurrentRow,index                                |
| select            | Effective in multi-select mode; triggers when an item is selected                          | selected items, recently selected                                                 |
| select-cancel     | Effective in multi-select mode; triggers when an item is deselected                      | selected items, deselected                                               |
| select-all        | Triggers when all items are selected                                                  | selected items                                                         |
| select-all-cancel | cancelTriggers when all items are selected                                              | selected items                                                         |
| selection-change  | Triggers when the selection changes                                    | selected items                                                         |
| sort-change       | Effective when sortable; triggers when sorting is clicked                                | column：当前列数据 key：sort依据的指标 order(值为 asc  or  desc) |
| row-click         | Triggers when a row is clicked                                            | 当前行的数据,index                                             |
| row-dblclick      | Triggers when a row is double-clicked                                            | 当前行的数据,index                                             |
| expand            | Triggers when a row is expanded or collapsed                                        | row：当前行的数据,status：当前的状态                           |
| drag-drop         | Triggers when drag sort is released                                          | 置换的两行数据索引和update后的数据 newData, newIndex, oldIndex   |

## Table slot

| Name    | Description               |
| ------- | ------------------ |
| header  | Table header               |
| footer  | Table footer               |
| loading | Loading content |

## Table methods

| Method Name          | Description                 | Parameter  |
| --------------- | -------------------- | ----- |
| clickCurrentRow | Select a row by index           | index |
| clearCurrentRow | Clear highlighted row | —    |
| handleResize    | Refresh table dimensions       | —    |
| getSelection    | Get selected rows     | —    |

## column

| Parameter        | Description                                                              | Type              | Options                                | Default |
| ----------- | ----------------------------------------------------------------- | ----------------- | ------------------------------------- | ------ |
| type        | Column type                                                            | String            | index、selection、expand、html String | -      |
| title       | Column header text                                                      | String            | -                                     | #      |
| key         | Field name for column data                                                | String            | -                                     | -      |
| width       | Column width                                                              | Number            | -                                     | -      |
| minWidth    | 最小Column width                                                          | Number            | -                                     | -      |
| maxWidth    | 最大Column width                                                          | Number            | -                                     | -      |
| align       | Alignment                                                          | String            | right,center                          | left   |
| className   | CSS class name for the column                                                      | String            | -                                     | -      |
| fixed       | 列Whether to 固定在左侧 or 者右侧                                          | String            | left,right                            | -      |
| ellipsis    | When enabled, text will not wrap                                              | Boolean           | -                                     | false  |
| tooltip     | When enabled, text will not wrap,并用 Tooltip componentShow完整Content                | Boolean           | -                                     | false  |
| render      | Custom render function for the column ,第一个is h，第二个为对象，包含 row、column 和 index | Function          | -                                     | -      |
| indexMethod | type 为 index 时可用，Custom index method ,parameter row 为当前行Content           | Function          | -                                     | -      |
| sortable    | 对应列Whether to 可以sort                                                | Boolean ,'custom' | -                                     | false  |
| sortMethod  | Custom sort method,三个parameter a 、 b 和 type                      | Function          | -                                     | -      |
| sortType    | Set initial sort order. Accepted values: asc, desc                                  | String            | -                                     | -      |
