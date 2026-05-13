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

## Nesting Usage

<preview path="./demo/Dropdown/Nest.vue"></preview>

## directiveevent

<preview path="./demo/Dropdown/Command.vue"></preview>

## Dropdown props

| Parameter          | Description                                                                                                                  | Type    | Options                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------ |
| trigger       | Trigger mode                                                                                                              | String  | hover / click / contextMenu (right click)                                                             | click  |
| placement     | Position where the dropdown menu appears                                                                                                    | String  | top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end | bottom |
| appendToBody  | Whether to place in body. Recommended when used in Tabs or fixed Table columns, as it won't be affected by parent styles for better results | Boolean |                                                                                                           | true   |
| hide-on-click | Whether to hide menu after clicking a menu item                                                                                            | Boolean | -                                                                                                         | true   |
| show-timeout  | Delay before expanding the dropdown menu (only effective when trigger is hover)                                                                    | Number  | -                                                                                                         | 150    |
| hide-timeout  | Delay before hiding the dropdown menu (only effective when trigger is hover)                                                                                            | Number  | -                                                                                                         | 150    |
| tabindex      | Tabindex of the dropdown component                                                                                              | Number  | -                                                                                                         | 0      |

## Dropdown events

| Event Name         | Description                   | Return Value                                             |
| -------------- | ---------------------- | -------------------------------------------------- |
| command        | Triggers when a menu item is clicked       | The name value of DropdownItem; name must be set for unified listening |
| visible-change | Called when menu visibility changes | visible                                            |

## Dropdown Slot

| Name     | Description                                  |
| -------- | ------------------------------------- |
| default  | Main content                              |
| dropdown | List content, typically filled by b-dropdown-menu |

## Dropdown Item props

| Parameter     | Description               | Type                   | Options | Default |
| -------- | ------------------ | ---------------------- | ------ | ------ |
| name     | Used to identify this item     | Object, String, Number | -      | -      |
| disabled | Disables this item           | Boolean                | -      | false  |
| divided  | Show divider         | Boolean                | -      | false  |
| selected | Mark this item as selected | Boolean                | -      | false  |
| icon     | icon               | String                 | -      | -      |
