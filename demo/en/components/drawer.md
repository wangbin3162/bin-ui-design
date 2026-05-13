---
title: Drawer
---

<b-back-top></b-back-top>

# Drawer

简易的drawerUsed for 展示 or 者快速Open,可以根据Yes信息展示还Yescreate动态插入

## Basic Usage

最简单的usemethod，通过控制propertyvalue来Show / Hidedialog。

<preview path="./demo/Drawer/Basic.vue"></preview>

## 左侧open

设置 `placement="left"`为左侧open

<preview path="./demo/Drawer/Left.vue"></preview>

## inner Mode

Can set innerMode在某个容器内open

<preview path="./demo/Drawer/Inner.vue"></preview>

## 信息预览框

<preview path="./demo/Drawer/Preview.vue"></preview>

## Nestingdrawer

drawer可以互相嵌套，但一般不推荐这么use避免Z-index level过多影响用户交互

<preview path="./demo/Drawer/Qiantao.vue"></preview>

## DraggableWidth

Can set dragdrawer

<preview path="./demo/Drawer/Dragable.vue"></preview>

## Props

| Parameter           | Description                                                                     | Type     | Options     | Default |
| -------------- | ------------------------------------------------------------------------ | -------- | ---------- | ------ |
| modelValue     | Whether to show ，可use v-model 双向绑定数据。                                  | Boolean  | —          | false  |
| title          | Title. If a custom header slot is used, the title prop is ignored.                          | String   | —          | —      |
| placement      | 方向                                                                     | String   | left/right | right  |
| append-to-body | Whether to 将dialog放置于 body 内                                               | Boolean  | —          | false  |
| width          | drawerWidth                                                                 | Number   | —          | 300    |
| min-width      | drawer最小Width                                                             | Number   | —          | 300    |
| show-close     | Whether to show Disablebutton                                                         | Boolean  | —          | true   |
| mask-closable  | Allow clicking the mask to close                                                   | Boolean  | —          | true   |
| mask           | Whether to 有maskmask                                                           | Boolean  | —          | true   |
| styles         | drawer中间层的style                                                         | Object   | —          | —      |
| inner          | Whether to 设置drawer在某个元素内open，Enable此property时，应当Disable append-to-body property | Boolean  | —          | false  |
| draggable      | Enable drag调整Width                                                     | Boolean  | —          | false  |
| before-close   | Disable前event,返回 Promise 可以阻止Disable                                     | Function |
| lock-scroll    | Whether to 锁定滚动                                                             | Boolean  | —          | true   |

## Events

| Event Name       | Description         | Return Value |
| ------------ | ------------ | ------ |
| close        | DisabledrawerTrigger | —     |
| resize-width | 调整Width     | —     |

## Slot

| Name    | Description         |
| ------- | ------------ |
| header  | 自定义页头   |
| close   | Disablebutton     |
| default | drawer主体Content |
