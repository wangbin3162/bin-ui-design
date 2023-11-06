---
title: 标签页 Tabs
---

<b-back-top></b-back-top>

# 标签页 Tabs

显示标签,由于标签内容定制化比较多，这里就预留给后续内容判定，这里只做标签的切换功能。内容可根据实际需求自行实现。

## 基础用法

基础的简洁的标签页

<preview path="./demo/Tabs/Basic.vue"></preview>

## 卡片模式

可以设置基本的卡片模式

<preview path="./demo/Tabs/Card.vue"></preview>

## 增加和移除

可以关闭，同时可以通过自定义事件来增加标签页，关闭按钮只能在card和tag模式下使用,默认超出宽度，可以滚动移动

`tabs`中的项设置noClose可以排除关闭按钮，主要是为了部分可固定标签设置使用

<preview path="./demo/Tabs/Add.vue"></preview>

## 右键菜单

配合 `ContextMenu` 可以关闭，可以开启右键菜单实现更多的配置信息，开启右键菜单需要手动插入右键菜单的按钮列表标签为`<li>`,并需要配合`tab-select`事件

<preview path="./demo/Tabs/ContextMenu.vue"></preview>

## 标签模式

除了卡片模式也可以设置成tag标签模式，这种模式更独立也更像标签导航。根据需求选择使用

<preview path="./demo/Tabs/TagType.vue"></preview>

## Props

| 参数     | 说明                                                                                                        | 类型    | 可选值                 | 默认值  |
| -------- | ----------------------------------------------------------------------------------------------------------- | ------- | ---------------------- | ------- |
| data     | tabs数组结构,必传，切结构遵循{key:'',title:''} key为唯一标识，title为标签生成名称，切可以设置icon来扩展图标 | Array   | —                      | []      |
| closable | 是否可关闭                                                                                                  | boolean | —                      | false   |
| type     | tab类型                                                                                                     | string  | 'default','card','tag' | default |

## Events

| 事件名     | 说明                                            | 返回值        |
| ---------- | ----------------------------------------------- | ------------- |
| change     | 绑定事件改变事件                                | 当前选中的tab |
| tab-close  | 关闭一个tab事件                                 | 当前关闭的tab |
| tab-select | 右键选中事件回调，用于配合右键系统缓存点击的tag | 右键选中的tab |
