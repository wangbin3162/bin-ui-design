---
title: Dropdown
---

<b-back-top></b-back-top>

# Dropdown

Used for displaying empty data state.

## Basic Usage

<preview path="./demo/Dropdown/Basic.vue"></preview>

## Trigger mode

<preview path="./demo/Dropdown/Trigger.vue"></preview>

## Nesting用法

<preview path="./demo/Dropdown/Nest.vue"></preview>

## directiveevent

<preview path="./demo/Dropdown/Command.vue"></preview>

## Dropdown props

| Parameter          | Description                                                                                                                  | Type    | Options                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------ |
| trigger       | Trigger mode                                                                                                              | String  | hover / clickcontextMenu（右键）                                                             | click  |
| placement     | 下拉menuappear的position                                                                                                    | String  | top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end | bottom |
| appendToBody  | Whether to 放置于 body 内, 在 Tabs、带有 fixed 的 Table 列内use时，建议添加此property，它将不受父级style影响，从而达到更好的效果 | Boolean |                                                                                                           | true   |
| hide-on-click | Whether to clickmenu项后Hidemenu                                                                                            | Boolean | -                                                                                                         | true   |
| show-timeout  | expand下拉menu的延时（仅在 trigger 为 hover 时有效）                                                                    | Number  | -                                                                                                         | 150    |
| hide-timeout  | Whether to clickmenu项后Hidemenu                                                                                            | Number  | -                                                                                                         | 150    |
| tabindex      | Dropdown component的 tabindex                                                                                              | Number  | -                                                                                                         | 0      |

## Dropdown events

| Event Name         | Description                   | Return Value                                             |
| -------------- | ---------------------- | -------------------------------------------------- |
| command        | clickmenu项时Trigger       | DropdownItem 的 name 值,需要设置name才可以统一监听 |
| visible-change | menuShow状态改变时call | visible                                            |

## Dropdown Slot

| Name     | Description                                  |
| -------- | ------------------------------------- |
| default  | 主体Content                              |
| dropdown | 列表Content，一般由 b-dropdown-menu 填充 |

## Dropdown Item props

| Parameter     | Description               | Type                   | Options | Default |
| -------- | ------------------ | ---------------------- | ------ | ------ |
| name     | 用来标识这一项     | Object, String, Number | -      | -      |
| disabled | Disabled该项           | Boolean                | -      | false  |
| divided  | Showdivider         | Boolean                | -      | false  |
| selected | 标记该项为select状态 | Boolean                | -      | false  |
| icon     | icon               | String                 | -      | -      |
