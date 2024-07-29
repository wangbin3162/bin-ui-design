---
title: 表格 Table
---

<b-back-top></b-back-top>

# 表格 Table

基础的表格组件，用于显示列表数据

## 基础用法

<preview path="./demo/Table/Basic.vue"></preview>

## 斑马纹

通过设置`stripe`来设置斑马纹显示

<preview path="./demo/Table/Stripe.vue"></preview>

## 边框

通过设置`border`来设置斑马纹显示

<preview path="./demo/Table/Border.vue"></preview>

## 超出隐藏

可以通过给`columns`设置属性`tooltip`来设置超出隐藏并悬停显示, 如仅有一张表格则可以设置`tooltip`皮肤`tooltip-theme`来开启优化样式
（注意：因表格单元格存在超出隐藏样式所以必须将tooltip标签插入至body元素，会成多余标签，如有多个表格缓存则会插入过多标签造成性能问题，所以是否开启需要根据需求确定）

<preview path="./demo/Table/Tooltip.vue"></preview>

## 固定表头

height 和 maxHeight 可以设置固定表头

<preview path="./demo/Table/FixedHeader.vue"></preview>

## 固定表头和列

可以同时固定表头和列

<preview path="./demo/Table/FixedColumn.vue"></preview>

## 流体高度

<preview path="./demo/Table/AutoHeight.vue"></preview>

## 单选表格

<preview path="./demo/Table/Select.vue"></preview>

## 多选表格

通过给 columns 数据设置一项，指定 type: 'selection'，即可自动开启多选功能。

给 data 项设置特殊 key \_checked: true 可以默认选中当前项。

给 data 项设置特殊 key \_disabled: true 可以禁止选择当前项。

@select，选中某一项触发，返回值为 selection 和 row，分别为已选项和刚选择的项。@select-all，点击全选时触发，返回值为 selection，已选项。
@selection-change，只要选中项发生变化时就会触发，返回值为 selection，已选项。

<preview path="./demo/Table/MultiplySelect.vue"></preview>

## 可展开

通过给`columns` 数据设置一项，指定 `type: 'expand'`，即可开启扩展功能。

<preview path="./demo/Table/Expand.vue"></preview>

## 表头分组

columns内容可以设置children来分组渲染表头,合并表头和行列时推荐使用border模式

<preview path="./demo/Table/GroupHeader.vue"></preview>

## 行列合并

可以设置属性`mergeMethod`制定合并行或者列的算法，方法参数为四个对象`row`，`column`，`rowIndex`，`columnIndex`，
该方法返回一个包含两个元素的数组，第一个表示rowspan，第二个为colspan，用于合并单元格 合并表格最好是使用border模式

<preview path="./demo/Table/Merge.vue"></preview>

## 排序表格

<preview path="./demo/Table/Sort.vue"></preview>

## 行内编辑

<preview path="./demo/Table/Edit.vue"></preview>

## 编辑表格

编辑表格，只需要开启编辑表格样式，即可开启一中隐藏输入边框的样式，方便进行表格编辑

<preview path="./demo/Table/Edit2.vue"></preview>

## 拖拽调整顺序

可以设置draggable开启拖拽排序

注意，设置拖拽排序后，且鼠标拖拽也覆盖了鼠标选中文字，此时可以额外设置也可以设置handle来指定拖拽某一个元素实现

如需要更新数据，则需使用v-model:data来更新,或配合@drag-drop函数来处理更新数据都可以

<preview path="./demo/Table/Drag.vue"></preview>

## loading状态

<preview path="./demo/Table/Loading.vue"></preview>

## 大小状态

通过设置属性 `size` 为 `large` 或 `small` 可以调整表格尺寸为大或小，默认不填或填写 default 。

<preview path="./demo/Table/Size.vue"></preview>

## 无数据

noDataText可以设置无数据状态

<preview path="./demo/Table/NoData.vue"></preview>

## Table props

| 参数           | 说明                                                                                                          | 类型          | 可选值        | 默认值   |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------------- | ------------- | -------- |
| data           | 显示的结构化数据，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例特定样式。 | Array         | —             | []       |
| columns        | 表格列的配置描述，具体项见后文                                                                                | Array         | —             | []       |
| stripe         | 间隔斑马纹                                                                                                    | Boolean       | false/true    | false    |
| border         | 纵向边框                                                                                                      | Boolean       | false/true    | false    |
| show-header    | 是否显示表头                                                                                                  | Boolean       | false/true    | false    |
| width          | 表格宽度，单位 px                                                                                             | Number/String | —             | auto     |
| height         | 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头                                                   | Number/String | —             | —        |
| max-height     | 最大表格高度                                                                                                  | Number/String | —             | —        |
| loading        | 表格加载状态                                                                                                  | Boolean       | —             | false    |
| disabled-hover | 禁用悬停高亮                                                                                                  | Boolean       | —             | false    |
| highlight-row  | 是否支持高亮选中的行，即单选                                                                                  | Boolean       | —             | false    |
| size           | 表格尺寸                                                                                                      | string        | large / small | default  |
| no-data-text   | 空数据内容                                                                                                    | string        | —             | 暂无数据 |
| loading-text   | 加载数据文字                                                                                                  | string        | —             | 正在加载 |
| draggable      | 开启拖拽调整行顺序，同步元数据需要使用v-model:data使用或需配合 @drag-drop 事件更新data都可以                  | Boolean       | —             | false    |
| drag-handle    | 拖拽的handle图标                                                                                              | String        | —             | —        |
| row-key        | 是否强制使用内置row-key刷新                                                                                   | Boolean       | —             | false    |
| merge-method   | 表格合并行列的方法函数                                                                                        | Function      | —             | false    |

## Table events

| 事件名            | 说明                                                        | 返回值                                                         |
| ----------------- | ----------------------------------------------------------- | -------------------------------------------------------------- |
| current-change    | 开启 highlight-row 后有效，当表格的当前行发生变化的时候会触 | currentRow, oldCurrentRow,index                                |
| select            | 在多选模式下有效，选中某一项时触发                          | 已选项, 刚选择                                                 |
| select-cancel     | 在多选模式下有效，取消选中某一项时触发                      | 已选项, 取消选择                                               |
| select-all        | 全选时触发                                                  | 已选项                                                         |
| select-all-cancel | 取消全选时触发                                              | 已选项                                                         |
| selection-change  | 选中项发生变化时就会触发                                    | 已选项                                                         |
| sort-change       | 排序时有效，当点击排序时触发                                | column：当前列数据 key：排序依据的指标 order(值为 asc 或 desc) |
| row-click         | 单击某一行时触发                                            | 当前行的数据,index                                             |
| row-dblclick      | 双击某一行时触发                                            | 当前行的数据,index                                             |
| expand            | 展开或收起某一行时触                                        | row：当前行的数据,status：当前的状态                           |
| drag-drop         | 拖拽排序松开时触发                                          | 置换的两行数据索引和更新后的数据 newData, newIndex, oldIndex   |

## Table slot

| 名称    | 说明               |
| ------- | ------------------ |
| header  | 表头               |
| footer  | 页脚               |
| loading | 警告提加载中示内容 |

## Table methods

| 方法名          | 说明                 | 参数  |
| --------------- | -------------------- | ----- |
| clickCurrentRow | 选中某一项           | index |
| clearCurrentRow | 清除高亮项，仅在开启 | 无    |
| handleResize    | 刷新表格的宽高       | 无    |
| getSelection    | 获取已经选中的行     | 无    |

## column

| 参数        | 说明                                                              | 类型              | 可选值                                | 默认值 |
| ----------- | ----------------------------------------------------------------- | ----------------- | ------------------------------------- | ------ |
| type        | 列类型                                                            | String            | index、selection、expand、html String | -      |
| title       | 列头显示文字                                                      | String            | -                                     | #      |
| key         | 对应列内容的字段名                                                | String            | -                                     | -      |
| width       | 列宽                                                              | Number            | -                                     | -      |
| minWidth    | 最小列宽                                                          | Number            | -                                     | -      |
| maxWidth    | 最大列宽                                                          | Number            | -                                     | -      |
| align       | 对齐方式                                                          | String            | right,center                          | left   |
| className   | 列的样式名称                                                      | String            | -                                     | -      |
| fixed       | 列是否固定在左侧或者右侧                                          | String            | left,right                            | -      |
| ellipsis    | 开启后，文本将不换行                                              | Boolean           | -                                     | false  |
| tooltip     | 开启后，文本将不换行,并用 Tooltip 组件显示完整内容                | Boolean           | -                                     | false  |
| render      | 自定义渲染列 ,第一个是 h，第二个为对象，包含 row、column 和 index | Function          | -                                     | -      |
| indexMethod | type 为 index 时可用，自定义序号 ,参数 row 为当前行内容           | Function          | -                                     | -      |
| sortable    | 对应列是否可以排序                                                | Boolean ,'custom' | -                                     | false  |
| sortMethod  | 自定义排序使用的方法,三个参数 a 、 b 和 type                      | Function          | -                                     | -      |
| sortType    | 设置初始化排序。值为 asc 和 desc                                  | String            | -                                     | -      |
