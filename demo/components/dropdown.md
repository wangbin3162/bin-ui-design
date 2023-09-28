---
title: 下拉菜单 Dropdown
---

# 下拉菜单 Dropdown

空显示状态，用于给内部无数据情况的展示。十分简单

## 基础用法

<preview path="./demo/Dropdown/Basic.vue"></preview>

## 触发方式

<preview path="./demo/Dropdown/Trigger.vue"></preview>

## 嵌套用法

<preview path="./demo/Dropdown/Nest.vue"></preview>

## 指令事件

<preview path="./demo/Dropdown/Command.vue"></preview>

## Dropdown props

| 参数          | 说明                                                                                                                  | 类型    | 可选值                                                                                                    | 默认值 |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------ |
| trigger       | 触发方式                                                                                                              | string  | hover（悬停）click（点击）contextMenu（右键）                                                             | click  |
| placement     | 下拉菜单出现的位置                                                                                                    | String  | top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end | bottom |
| appendToBody  | 是否放置于 body 内, 在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean |                                                                                                           | true   |
| hide-on-click | 是否在点击菜单项后隐藏菜单                                                                                            | Boolean | -                                                                                                         | true   |
| show-timeout  | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）                                                                    | Number  | -                                                                                                         | 150    |
| hide-timeout  | 是否在点击菜单项后隐藏菜单                                                                                            | Number  | -                                                                                                         | 150    |
| tabindex      | Dropdown 组件的 tabindex                                                                                              | Number  | -                                                                                                         | 0      |

## Dropdown events

| 事件名         | 说明                   | 返回值                                             |
| -------------- | ---------------------- | -------------------------------------------------- |
| command        | 点击菜单项时触发       | DropdownItem 的 name 值,需要设置name才可以统一监听 |
| visible-change | 菜单显示状态改变时调用 | visible                                            |

## Dropdown Slot

| 名称     | 说明                                  |
| -------- | ------------------------------------- |
| default  | 主体内容                              |
| dropdown | 列表内容，一般由 b-dropdown-menu 填充 |

## Dropdown Item props

| 参数     | 说明               | 类型                   | 可选值 | 默认值 |
| -------- | ------------------ | ---------------------- | ------ | ------ |
| name     | 用来标识这一项     | Object, String, Number | -      | -      |
| disabled | 禁用该项           | Boolean                | -      | false  |
| divided  | 显示分割线         | Boolean                | -      | false  |
| selected | 标记该项为选中状态 | Boolean                | -      | false  |
| icon     | 图标               | String                 | -      | -      |
