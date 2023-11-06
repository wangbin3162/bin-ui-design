---
title: 抽屉 Drawer
---

<b-back-top></b-back-top>

# 抽屉 Drawer

简易的抽屉用于展示或者快速弹出,可以根据是信息展示还是创建动态插入

## 基础用法

最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。

<preview path="./demo/Drawer/Basic.vue"></preview>

## 左侧打开

设置 `placement="left"`为左侧打开

<preview path="./demo/Drawer/Left.vue"></preview>

## inner 模式

可以设置inner模式在某个容器内打开

<preview path="./demo/Drawer/Inner.vue"></preview>

## 信息预览框

<preview path="./demo/Drawer/Preview.vue"></preview>

## 嵌套抽屉

抽屉可以互相嵌套，但一般不推荐这么使用避免层级过多影响用户交互

<preview path="./demo/Drawer/Qiantao.vue"></preview>

## 可拖拽宽度

可以设置拖拽抽屉

<preview path="./demo/Drawer/Dragable.vue"></preview>

## Props

| 参数           | 说明                                                                     | 类型     | 可选值     | 默认值 |
| -------------- | ------------------------------------------------------------------------ | -------- | ---------- | ------ |
| modelValue     | 是否显示，可使用 v-model 双向绑定数据。                                  | Boolean  | —          | false  |
| title          | 标题，如果使用 slot 自定义了页头，则 title 无效                          | String   | —          | —      |
| placement      | 方向                                                                     | String   | left/right | right  |
| append-to-body | 是否将对话框放置于 body 内                                               | Boolean  | —          | false  |
| width          | 抽屉宽度                                                                 | Number   | —          | 300    |
| min-width      | 抽屉最小宽度                                                             | Number   | —          | 300    |
| show-close     | 是否显示关闭按钮                                                         | Boolean  | —          | true   |
| mask-closable  | 是否允许点击遮罩层关闭                                                   | Boolean  | —          | true   |
| mask           | 是否有mask遮罩                                                           | Boolean  | —          | true   |
| styles         | 抽屉中间层的样式                                                         | Object   | —          | —      |
| inner          | 是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 append-to-body 属性 | Boolean  | —          | false  |
| draggable      | 是否开启拖拽调整宽度                                                     | Boolean  | —          | false  |
| before-close   | 关闭前事件,返回 Promise 可以阻止关闭                                     | Function |
| lock-scroll    | 是否锁定滚动                                                             | Boolean  | —          | true   |

## Events

| 事件名       | 说明         | 返回值 |
| ------------ | ------------ | ------ |
| close        | 关闭抽屉触发 | 无     |
| resize-width | 调整宽度     | 无     |

## Slot

| 名称    | 说明         |
| ------- | ------------ |
| header  | 自定义页头   |
| close   | 关闭按钮     |
| default | 抽屉主体内容 |
