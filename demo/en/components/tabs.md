---
title: Tabs
---

<b-back-top></b-back-top>

# Tabs

Showtag,由于tagContent定制化比较多，这里就预留给后续Content判定，这里只做tag的切换功能。Content可根据实际需求自行实现。

## Basic Usage

基础的简洁的tabs

<preview path="./demo/Tabs/Basic.vue"></preview>

## cardMode

Can set 基本的cardMode

<preview path="./demo/Tabs/Card.vue"></preview>

## 增加和移除

Can disable ，同时Can be set via 自定义event来增加tabs，Disablebutton只能在card和tagMode下use,Default超出Width，可以滚动移动

`tabs`中的项设置noClose可以排除Disablebutton，主要Yes为了部分可固定tag设置use

<preview path="./demo/Tabs/Add.vue"></preview>

## context menu

配合 `ContextMenu` Can disable ，Can enable context menu实现更多的configuration信息，Enablecontext menu需要手动插入context menu的button列表tag为`<li>`,并需要配合`tab-select`event

<preview path="./demo/Tabs/ContextMenu.vue"></preview>

## tagMode

除了cardMode也Can set 成tagtagMode，这种Mode更独立也更像tagnavigation。根据需求选择use

<preview path="./demo/Tabs/TagType.vue"></preview>

## Props

| Parameter     | Description                                                                                                        | Type    | Options                 | Default  |
| -------- | ----------------------------------------------------------------------------------------------------------- | ------- | ---------------------- | ------- |
| data     | tabs数组结构,必传，切结构遵循{key:'',title:''} key为唯一标识，title为tag生成Name，切Can set icon来扩展icon | Array   | —                      | []      |
| closable | Whether to 可Disable                                                                                                  | boolean | —                      | false   |
| type     | tabType                                                                                                     | string  | 'default','card','tag' | default |

## Events

| Event Name     | Description                                            | Return Value        |
| ---------- | ----------------------------------------------- | ------------- |
| change     | 绑定event改变event                                | 当前select的tab |
| tab-close  | Disable一个tabevent                                 | 当前Disable的tab |
| tab-select | 右键selecteventCallback，Used for 配合右键系统缓存click的tag | 右键select的tab |
