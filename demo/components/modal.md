---
title: 模态框 Modal
---

<b-back-top></b-back-top>

# 模态框 Modal

对话框/弹窗，在浮层中显示，引导用户进行相关操作。

## 基础用法

<preview path="./demo/Modal/Basic.vue"></preview>

## 自定义样式

Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。

<preview path="./demo/Modal/Custom.vue"></preview>

## 弹出动画

弹窗动画可以通过 `transition-name` 自定义，默认从点击位置弹出

<preview path="./demo/Modal/Animation.vue"></preview>

## 禁用关闭

可以禁用关闭和遮罩层关闭。

<preview path="./demo/Modal/DisableClose.vue"></preview>

## 嵌套

弹窗嵌套一般情况下不推荐嵌套，但也可以这么使用

<preview path="./demo/Modal/Qiantao.vue"></preview>

## 全屏

设置属性 `fullscreen` 可以全屏显示。并且可以设置不同的控制器来自定义控制

<preview path="./demo/Modal/Fullscreen.vue"></preview>

## 可拖拽

设置属性 `draggable` 对话框可以进行拖拽移动。

<preview path="./demo/Modal/Draggable.vue"></preview>

## Props

| 参数             | 说明                                            | 类型                                                                     | 可选值 | 默认值        |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------------ | ------ | ------------- |
| v-model          | 是否显示                                        | Boolean                                                                  | —      | false         |
| title            | 标题，如果使用 slot 自定义了页头，则 title 无效 | String                                                                   | —      | —             |
| width            | 对话框宽度                                      | String                                                                   | —      | 520px         |
| top              | 对话框距离顶部高度                              | String                                                                   | —      | 100px         |
| show-close       | 右上角的关闭按钮                                | Boolean                                                                  | —      | true          |
| mask-closable    | 是否允许点击遮罩层关闭                          | Boolean                                                                  | —      | true          |
| esc-closable     | 是否允许esc键盘关闭                             | Boolean                                                                  | —      | true          |
| fullscreen       | 是否全屏显示                                    | Boolean                                                                  | —      | false         |
| draggable        | 是否可以拖拽移动                                | Boolean                                                                  | —      | false         |
| mask             | 是否显示遮罩层                                  | Boolean                                                                  | —      | true          |
| custom-class     | 自定义类名                                      | String                                                                   | —      | —             |
| body-styles      | 自定body的样式style                             | Object                                                                   | —      | —             |
| z-index          | 层级                                            | Number，默认为2000，弹窗会自增，如设置了此值，则会从当前设置的值进行自增 | —      | 0             |
| append-to-body   | 是否将对话框放置于 body 内                      | Boolean                                                                  | —      | false         |
| lock-scroll      | 出现modal时锁定滚动                             | Boolean                                                                  | —      | true          |
| transition-name  | 弹窗动画                                        | String                                                                   | —      | 'dialog-fade' |
| open-delay       | 打开延时（毫秒）                                | Number                                                                   | —      | 0             |
| close-delay      | 关闭延时（毫秒）                                | Number                                                                   | —      | 0             |
| before-close     | 关闭前回调，会暂停关闭                          | Function(done) done用于关闭                                              | —      | —             |
| destroy-on-close | 关闭时销毁内部元素，多用于内部元素需要初始化    | Boolean                                                                  | —      | false         |

## Events

| 事件名 | 说明             | 返回值 |
| ------ | ---------------- | ------ |
| open   | modal打开回调    | 无     |
| opened | 打开动画完成回调 | 无     |
| close  | modal关闭回调    | 无     |
| closed | 关闭动画结束回调 | 无     |

## Slot

| 名称   | 说明               |
| ------ | ------------------ |
| title  | 自定义标题         |
| ctrl   | 关闭按钮左侧控制槽 |
| footer | 自定义页脚内容     |
