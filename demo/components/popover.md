---
title: 弹出信息 Popover
---

<b-back-top></b-back-top>

# 弹出信息 Popover

气泡类型的弹窗,用于放置更多信息或询问流程等

## 基础用法

<preview path="./demo/Popover/Basic.vue"></preview>

## 多种悬停位置

使用 `placement` 来设置不同的悬停位置

<preview path="./demo/Popover/Placement.vue"></preview>

## 浮层内关闭

<preview path="./demo/Popover/InnerClose.vue"></preview>

## 更多内容

<preview path="./demo/Popover/More.vue"></preview>

## 确认气泡框

通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

<preview path="./demo/Popover/Confirm.vue"></preview>

## Props

| 参数            | 说明                                             | 类型                                                                           | 可选值                                                                                                    | 默认值         |
| --------------- | ------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | -------------- |
| trigger         | 触发方式                                         | string                                                                         | hover（悬停）click（点击）focus（聚焦）                                                                   | click          |
| title           | 标题                                             | string                                                                         | —                                                                                                         | —              |
| content         | 显示的内容                                       | string                                                                         | —                                                                                                         | —              |
| width           | 宽度                                             | string/number                                                                  | —                                                                                                         | —              |
| placement       | 提示框出现的位置                                 | string                                                                         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | —              |
| disabled        | 是否禁用提示框                                   | Boolean                                                                        | —                                                                                                         | false          |
| v-model:visible | 状态是否可见                                     | Boolean                                                                        | —                                                                                                         | false          |
| placement       | 提示框出现的位置                                 | string                                                                         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | —              |
| transition      | 自定义渐变动画                                   | string                                                                         | —                                                                                                         | fade-in-linear |
| show-arrow      | 是否显示箭头                                     | Boolean                                                                        | —                                                                                                         | true           |
| popper-options  | popper.js 参数                                   | Object                                                                         | —                                                                                                         |                |
| show-after      | 延迟出现，单位毫秒                               | number                                                                         | —                                                                                                         | 0              |
| hide-after      | 延迟消失，单位毫秒                               | number                                                                         | —                                                                                                         | 0              |
| auto-close      | tooltip出现后自动隐藏演示，单位毫秒，为0时不隐藏 | number                                                                         | —                                                                                                         | 0              |
| manual          | 手动控制模式，true时鼠标进入移出事件不生效       | Boolean                                                                        | —                                                                                                         | false          |
| offset          | 出现位置的偏移量                                 | Number                                                                         | —                                                                                                         | 0              |
| appendToBody    | 是否将弹层放置于 body 内                         | Boolean                                                                        | —                                                                                                         | true           |
| options         | 自定义 popper.js 的配置项具体参考popper.js       | Object                                                                         | —                                                                                                         | —              |
| z-index         | 层级                                             | Number，默认为2000，弹窗会自增，如设置了此值，则会追加当前值后进行自增进行自增 | —                                                                                                         | 0              |

## Slot

| 名称    | 说明                                                 |
| ------- | ---------------------------------------------------- |
| content | 提示框的内容，定义此 slot 时，会覆盖 props content。 |
