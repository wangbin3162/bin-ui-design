---
title: 导航菜单 Menu
---

<b-back-top></b-back-top>

# 导航菜单 Menu

为网站提供导航功能的菜单。

## 顶栏

导航菜单默认为垂直模式，通过`mode`属性可以使导航菜单变更为水平模式。另外，在菜单中通过`submenu`组件可以生成二级菜单。Menu 还提供了`background-color`、`text-color`
和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色

<preview path="./demo/Menu/Basic.vue"></preview>

## 侧栏

垂直菜单，可内嵌子菜单。通过`b-menu-item-group`组件可以实现菜单进行分组，分组名可以通过`title`属性直接设定，也可以通过具名 slot 来设定。

<preview path="./demo/Menu/Side.vue"></preview>

## 折叠

<preview path="./demo/Menu/Collapse.vue"></preview>

## Menu Props

| 参数              | 说明                                                                                | 类型    | 可选值                | 默认值          |
| ----------------- | ----------------------------------------------------------------------------------- | ------- | --------------------- | --------------- |
| mode              | 模式                                                                                | string  | horizontal / vertical | vertical        |
| collapse          | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                                | boolean | —                     | false           |
| background-color  | 菜单的背景色（仅支持 hex 格式）                                                     | string  | —                     | #ffffff         |
| text-color        | 菜单的文字颜色（仅支持 hex 格式）                                                   | string  | —                     | rgba(0,0,0,.65) |
| active-text-color | 当前激活菜单的文字颜色（仅支持 hex 格式）                                           | string  | —                     | #1089ff         |
| default-active    | 当前激活菜单的 index                                                                | string  | —                     | —               |
| default-openeds   | 当前打开的 sub-menu 的 index 的数组                                                 | Array   | —                     | —               |
| unique-opened     | 是否只保持一个子菜单的展开                                                          | boolean | —                     | false           |
| menu-trigger      | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)                                | string  | hover / click         | hover           |
| router            | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean | —                     | false           |

## Menu Methods

| 方法名称 | 说明                | 参数                                |
| -------- | ------------------- | ----------------------------------- |
| open     | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close    | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

## Menu Events

| 事件名称 | 说明                | 回调参数                                                                   |
| -------- | ------------------- | -------------------------------------------------------------------------- |
| select   | 菜单激活回调        | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path              |
| open     | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path |
| close    | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path |

## SubMenu Props

| 参数                  | 说明                                                                     | 类型        | 可选值 | 默认值                                 |
| --------------------- | ------------------------------------------------------------------------ | ----------- | ------ | -------------------------------------- |
| index                 | 唯一标志                                                                 | string/null | —      | null                                   |
| popper-class          | 弹出菜单的自定义类名                                                     | string      | —      | —                                      |
| show-timeout          | 展开 sub-menu 的延时                                                     | number      | —      | 300                                    |
| hide-timeout          | 收起 sub-menu 的延时                                                     | number      | —      | 300                                    |
| disabled              | 是否禁用                                                                 | boolean     | —      | false                                  |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 | boolean     | —      | 一级子菜单：true / 非一级子菜单：false |

## Menu-Item Props

| 参数     | 说明                | 类型    | 可选值 | 默认值 |
| -------- | ------------------- | ------- | ------ | ------ |
| index    | 唯一标志            | string  | —      | —      |
| route    | Vue Router 路径对象 | Object  | —      | —      |
| disabled | 是否禁用            | boolean | —      | false  |

## Menu-Group Props

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| title | 分组标题 | string | —      | —      |
