---
title: 树结构 Tree
---

<b-back-top></b-back-top>

# 树结构 Tree

## 基础用法

`lockSelect` 设置可以锁定树的选中事件，这个可以用来控制树菜单在不同情况下的操作

<preview path="./demo/Tree/Basic.vue"></preview>

## 额外参数配置

可以配置额外参数设置，比如附加 id，code 等业务参数，也可以指定 title 显示的字段名称，默认为`title`

<preview path="./demo/Tree/Param.vue"></preview>

## 其他属性

可以设置 show-checkbox 开启勾选，并可以设置数据格式中的默认选中

expand、selected、checked 和 disabled 可以设置展开，选中，勾选和禁用。multiple 开启多选

<preview path="./demo/Tree/Other.vue"></preview>

## 树节点的操作

树结构默认拍平了所有节点数组，并塞入了唯一的 nodeKey 值用于索引节点，这样可以方便快捷的获取和设置树的状态

<preview path="./demo/Tree/Ctrl.vue"></preview>

## 异步加载子节点

<preview path="./demo/Tree/Load.vue"></preview>

## 可以筛选

如果树结构层级较多，可配合过滤函数进行过滤筛选

<preview path="./demo/Tree/Filter.vue"></preview>

## 拖拽排序

开启`draggable`可以开启树节点的拖拽功能，此时需要监听几个事件来进行数据处理

<preview path="./demo/Tree/Drag.vue"></preview>

## render 函数

使用 render 函数可以设置更多自定义的效果

<preview path="./demo/Tree/Render.vue"></preview>

## 树选择

由于树选择场景较多，这里也额外封装了一个树形选择器以供表单进行节点选择

<preview path="./demo/Tree/Select.vue"></preview>

## 树校验

可以结合form表单进行校验提示。

<preview path="./demo/Tree/Valid.vue"></preview>

## Big-Tree 超大数据

如果需要渲染超大数据量的属性结构，需要使用扩展组件`<b-big-tree>`,组件内部 api 基本复用树结构所有属性，对树形结构进行优化，利用可视区域位置来进行过滤筛选节点并进行操作，
但为了性能的提示必然要牺牲部分体验，因此大数据量的树结构不提供动画展开缩放效果

默认节点高度为`28px`，可通过`visible-count`指定树可是区域显示的节点个数，默认为 15 个 即`420px`因为是针对可视区域的滚动优化，因此必须指定容器高度

<preview path="./demo/Tree/Big.vue"></preview>

## Props

| 参数               | 说明                                                                                                                                                                                | 类型                                   | 可选值 | 默认值   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------ | -------- |
| data               | 可嵌套的节点属性的数组，生成 tree 的数据                                                                                                                                            | Array                                  | —      | []       |
| multiple           | 是否支持多选                                                                                                                                                                        | Boolean                                | —      | false    |
| show-checkbox      | 是否显示多选框                                                                                                                                                                      | Boolean                                | —      | false    |
| empty-text         | 没有数据时的提示                                                                                                                                                                    | String                                 | —      | 暂无数据 |
| load-data          | 异步加载数据的方法，见示例                                                                                                                                                          | Function                               | —      | —        |
| title-key          | 定义 title 键,默认 title                                                                                                                                                            | String                                 | —      | title    |
| children-key       | 定义子节点键,默认 children 为子节点 key                                                                                                                                             | String                                 | —      | children |
| check-strictly     | 复选框的情况下，是否严格的遵循父子不互相关联的做法                                                                                                                                  | Boolean                                | —      | false    |
| check-directly     | 开启后，在 show-checkbox 模式下，select 的交互也将转为 check                                                                                                                        | Boolean                                | —      | false    |
| lock-select        | 锁定树选择，再部分业务中常用，比如开启弹窗后禁用树的选中操作                                                                                                                        | Boolean                                | —      | false    |
| title-ellipsis     | 是否开启标题超长省略                                                                                                                                                                | Boolean                                | —      | true     |
| draggable          | 是否开启拖拽节点功能                                                                                                                                                                | Boolean                                | —      | true     |
| allow-drag         | 判断节点能否被拖拽 如果返回 false ，节点不能被拖动                                                                                                                                  | Function(node)                         | —      | —        |
| allow-drop         | 拖拽时判定目标节点能否成为拖动目标位置。 返回false拖动节点不能被拖放到目标节点。type 参数有三种情况：'prev'、'inner'和 'next'，表示放置在目标节点前、插入目标节点和放置在目标节点后 | Function(draggingNode, dropNode, type) | —      | —        |
| filter-node-method | 筛选过滤树节点函数                                                                                                                                                                  | Function                               | —      | —        |
| highlight-filter   | 高亮搜索条件文字                                                                                                                                                                    | Boolean                                | —      | true     |
| timeout            | 刷新频率（`<b-big-tree>`扩展组件可用）                                                                                                                                              | Number                                 | —      | 17       |
| itemHeight         | 节点高度 （`<b-big-tree>`扩展组件可用）                                                                                                                                             | Number                                 | —      | 28       |
| visibleCount       | 显示区域个数（`<b-big-tree>`扩展组件可用）                                                                                                                                          | Number                                 | —      | 15       |

## Events

| 事件名          | 说明                   | 返回值                                                                       |
| --------------- | ---------------------- | ---------------------------------------------------------------------------- |
| select-change   | 点击树节点时触发       | 当前已选中的节点数组、当前项、flatState                                      |
| check-change    | 点击复选框时触发       | 当前已勾选节点的数组、当前项、包含半选的节点数组、flatState                  |
| toggle-expand   | 展开和收起子列表时触发 | 当前节点的数据                                                               |
| node-drag-start | 拖拽节点开始事件       | 被拖拽节点对应的 Node、event                                                 |
| node-drag-enter | 拖拽节点进入事件       | 被拖拽节点对应的 Node、当前进入节点对应的 Node、event                        |
| node-drag-leave | 拖拽节点移除事件       | 被拖拽节点对应的 Node、所离开节点对应的 Node、event                          |
| node-drag-over  | 拖拽节点 over 事件     | 被拖拽节点对应的 Node、当前进入节点对应的 Node、event                        |
| node-drag-end   | 拖拽节点结束事件       | 被拖拽节点对应的 Node、当前进入节点对应的 Node、放置节点类型 dropType、event |
| node-drag       | 拖拽节点结束事件       | 被拖拽节点对应的 Node、当前进入节点对应的 Node、放置节点类型 dropType、event |

## Methods

| 事件名                          | 说明                                                                                                             | 返回值 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------ |
| getFlatState                    | 拍平的数组 buffer，包含层级关系及索引 无                                                                         |
| getCheckedNodes                 | 获取被勾选的节点                                                                                                 | 无     |
| getSelectedNodes                | 获取被选中的节点                                                                                                 | 无     |
| getCheckedAndIndeterminateNodes | 获取选中及半选节点                                                                                               | 无     |
| filter                          | 树节点过滤函数，必须设置 filter-node-method 过滤匹配函数                                                         | 无     |
| setChecked                      | 设置 node 勾选 ，参数为 keys：nodeKey 数组, flag：勾选状态，默认 true                                            | 无     |
| setSelected                     | 设置 node 单选 ，参数为 keys：nodeKey 数组, flag：勾选状态，默认 true，expandParent：是否展开祖先节点，默认 true | 无     |
| setExpand                       | 设置 node 展开 ，参数为 keys：nodeKey 数组, flag：勾选状态，默认 true                                            | 无     |
| expandAll                       | 展开所有                                                                                                         | 无     |
| collapseAll                     | 收起所有                                                                                                         | 无     |
| checkAll                        | 勾选所有                                                                                                         | 无     |
| unselectAll                     | 取消所有单选                                                                                                     | 无     |
| uncheckAll                      | 取消全部勾选                                                                                                     | 无     |

## Children

| 属性            | 说明                                                         | 类型    | 默认值 |
| --------------- | ------------------------------------------------------------ | ------- | ------ |
| icon            | 节点显示 icon                                                | String  | —      |
| title           | 节点显示标题                                                 | String  | —      |
| expand          | 是否展开直子节点                                             | Boolean | false  |
| disabled        | 禁用                                                         | Boolean | false  |
| disableCheckbox | 禁用单选框                                                   | Boolean | false  |
| selected        | 是否选中子节点                                               | Boolean | false  |
| checked         | 是否勾选(如果勾选，子节点也会全部勾选)                       | Boolean | false  |
| visible         | 是否显示节点(可通过操作节点 visible 属性隐藏节点)            | Boolean | false  |
| children        | 子节点属性数组，可以设置 tree 组件 children-key 属性来自定义 | Array   | —      |
| loading         | 可设置为异步加载节点，需配合 loadData 设置加载函数           | Boolean | —      |
| isLeaf          | 是否为叶子节点，可控制是否显示箭头，可配合异步加载实现       | Boolean | —      |
