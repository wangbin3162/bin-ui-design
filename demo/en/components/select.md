---
title: 选择器 Select
---

<b-back-top></b-back-top>

# 选择器 Select

## 基础用法

基本用法。可以使用 v-model 双向绑定数据。

单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据 Option 的 value 来返回选中的数据。

可以给 Select 添加 style 样式，比如宽度。

<preview path="./demo/Select/Basic.vue"></preview>

## 禁用选项和禁用状态

可以设置禁用状态和选项禁用

<preview path="./demo/Select/Disabled.vue"></preview>

## 其他状态

可以清空、分组或者自定义模板

<preview path="./demo/Select/Status.vue"></preview>

## 搜索模式

可以进行搜索查询

<preview path="./demo/Select/Search.vue"></preview>

## 多选和折叠

可以进行多选

<preview path="./demo/Select/Multiple.vue"></preview>

## 前缀模式

可以设置下拉框前缀

<preview path="./demo/Select/Prefix.vue"></preview>

## 创建新项

可以允许创建列表中不存在的条目，使用allow-create可以输入并创建，此时filterable必需为true，

<preview path="./demo/Select/Add.vue"></preview>

## 不同大小

四种默认大小

<preview path="./demo/Select/Size.vue"></preview>

## Select props

| 参数                 | 说明                                                                 | 类型                               | 可选值                                                    | 默认值            |
| -------------------- | -------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------- | ----------------- |
| v-model              | 指定选中项目的 modelValue 值，可以使用 v-model 双向绑定数据。        | String / Number / Boolean / Object | —                                                         | 无                |
| multiple             | 多选                                                                 | Boolean                            | —                                                         | false             |
| disabled             | 是否禁用                                                             | Boolean                            | —                                                         | false             |
| clearable            | 清空选项，只在单选时有效                                             | Boolean                            | —                                                         | false             |
| filterable           | 是否支持搜索                                                         | Boolean                            | —                                                         | false             |
| size                 | 选择框大小                                                           | String                             | large、small、default、mini                               | default           |
| placeholder          | 选择框默认文字                                                       | String                             | —                                                         | —                 |
| value-key            | 作为 value 唯一标识的键名，绑定值为对象类型时必填                    | string                             | —                                                         | value             |
| no-match-text        | 搜索条件无匹配时显示的文字，也可以使用#empty设置                     | String                             | —                                                         | 暂无匹配数据      |
| no-data-tex          | 选项为空时显示的文字                                                 | String                             | —                                                         | 暂无数据          |
| allow-create         | 是否允许创建没有的项，需配合 filterable 使用                         | Boolean                            | —                                                         | false             |
| filter-method        | 自定义搜索方法                                                       | Function                           | —                                                         | —                 |
| remote               | 是否启用远程搜索                                                     | boolean                            | —                                                         | false             |
| loading              | 是否正在从远程获取数据                                               | boolean                            | —                                                         | false             |
| loading-text         | 远程加载文字                                                         | boolean                            | —                                                         | 加载中            |
| placement            | 弹窗的展开方向                                                       | String                             | top、bottom、top-start、bottom-start、top-end、bottom-end | bottom-start      |
| append-to-body       | 是否将弹层放置于 body 内                                             | Boolean                            | —                                                         | true              |
| multiple-limit       | 多选时最多允许选择几个                                               | Number                             | —                                                         | —                 |
| collapse-tags        | 多选时是否折叠标签                                                   | Boolean                            | —                                                         | false             |
| popper-class         | 自定义弹出层类名                                                     | String                             | —                                                         | —                 |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用 | Boolean                            | —                                                         | false             |
| clear-icon           | 清空图标的类名                                                       | String                             | —                                                         | close-circle-fill |

## Select events

| 事件名         | 说明                                   | 返回值                        |
| -------------- | -------------------------------------- | ----------------------------- |
| change         | 选中的Option变化时触发，默认返回 value | 当前选中项                    |
| clear          | 点击清空按钮时触发                     | 无                            |
| visible-change | 下拉框出现/隐藏时触发                  | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除tag时触发                | 移除的tag值                   |
| blur           | 失去焦点触发                           | (event: Event)                |
| focus          | 获取焦点触发                           | (event: Event)                |

## Select slot

| 名称   | 说明                     |
| ------ | ------------------------ |
| prefix | 自定义 Select 内头部图标 |
| empty  | 无选项时的列表           |

## Option props

| 参数     | 说明                                                                                        | 类型          | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------------------------------------- | ------------- | ------ | ------ |
| value    | 选项值，默认根据此属性值进行筛选，必填                                                      | string/number | —      | 无     |
| label    | 选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。 | String        | —      | —      |
| disabled | 是否禁用当前项                                                                              | Boolean       | —      | false  |

## OptionGroup props

| 参数     | 说明                     | 类型    | 可选值 | 默认值 |
| -------- | ------------------------ | ------- | ------ | ------ |
| label    | 分组组名                 | String  | —      | —      |
| disabled | 该分组下所有选项置为禁用 | Boolean | —      | false  |
