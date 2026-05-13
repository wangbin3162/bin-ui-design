---
title: Menu
---

<b-back-top></b-back-top>

# Menu

A navigation menu for websites.

## Top Bar

By default, the menu is in vertical mode. Use the `mode` prop to switch to horizontal mode. Use the `submenu` component for nested sub-menus. Menu also provides `background-color`, `text-color`, 
and `active-text-color` to set the menu's background color, text color, and active item text color respectively.

<preview path="./demo/Menu/Basic.vue"></preview>

## Sidebar

Vertical menu with nested sub-menus. Use the `b-menu-item-group` component to group menu items. The group name can be set directly via the `title` property or through a named slot.

<preview path="./demo/Menu/Side.vue"></preview>

## collapse

<preview path="./demo/Menu/Collapse.vue"></preview>

## Menu Props

| Parameter              | Description                                                                                | Type    | Options                | Default          |
| ----------------- | ----------------------------------------------------------------------------------- | ------- | --------------------- | --------------- |
| mode              | Mode                                                                                | string  | horizontal / vertical | vertical        |
| collapse          | Whether to horizontally collapse the menu (only available when mode is vertical)                                | boolean | —                     | false           |
| background-color  | Menu background color (hex format only)                                                     | string  | —                     | #ffffff         |
| text-color        | Menu text color (hex format only)                                                   | string  | —                     | rgba(0,0,0,.65) |
| active-text-color | Text color of the currently active menu item (hex format only)                                           | string  | —                     | #1089ff         |
| default-active    | Index of the currently active menu item                                                                | string  | —                     | —               |
| default-openeds   | Array of indices of currently opened sub-menus                                                 | Array   | —                     | —               |
| unique-opened     | Whether to keep only one sub-menu expanded at a time                                                          | boolean | —                     | false           |
| menu-trigger      | Trigger mode for opening sub-menus (only effective when mode is horizontal)                                | string  | hover / click         | hover           |
| router            | Whether to use vue-router mode. Enabling this mode will use the index as the path for route navigation when activating a menu item | boolean | —                     | false           |

## Menu Methods

| Method Name | Description                | Parameter                                |
| -------- | ------------------- | ----------------------------------- |
| open     | Expand the specified sub-menu | index: index of the sub-menu to open |
| close    | Collapse the specified sub-menu | index: index of the sub-menu to collapse |

## Menu Events

| Event Name | Description                | Callback Parameters                                                                   |
| -------- | ------------------- | -------------------------------------------------------------------------- |
| select   | Menu activation callback        | index: index of the selected menu item, indexPath: index path of the selected menu item              |
| open     | Sub-menu expand callback | index: index of the opened sub-menu, indexPath: index path of the opened sub-menu |
| close    | Sub-menu collapse callback | index: index of the collapsed sub-menu, indexPath: index path of the collapsed sub-menu |

## SubMenu Props

| Parameter                  | Description                                                                     | Type        | Options | Default                                 |
| --------------------- | ------------------------------------------------------------------------ | ----------- | ------ | -------------------------------------- |
| index                 | Unique identifier                                                                 | string/null | —      | null                                   |
| popper-class          | Custom class name for the opened menu                                                     | string      | —      | —                                      |
| show-timeout          | Delay before expanding a sub-menu                                                     | number      | —      | 300                                    |
| hide-timeout          | Delay before collapsing a sub-menu                                                     | number      | —      | 300                                    |
| disabled              | Disabled                                                                 | boolean     | —      | false                                  |
| popper-append-to-body | Whether to append the opened menu to the body element. If the menu positioning has issues, try modifying this property | boolean     | —      | First-level sub-menu: true / Non-first-level sub-menu: false |

## Menu-Item Props

| Parameter     | Description                | Type    | Options | Default |
| -------- | ------------------- | ------- | ------ | ------ |
| index    | Unique identifier            | string  | —      | —      |
| route    | Vue Router path object | Object  | —      | —      |
| disabled | Disabled            | boolean | —      | false  |

## Menu-Group Props

| Parameter  | Description     | Type   | Options | Default |
| ----- | -------- | ------ | ------ | ------ |
| title | Group title | string | —      | —      |
