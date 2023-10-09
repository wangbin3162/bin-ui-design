---
title: 消息提示 Message
---

# 消息提示 Message

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

## 基础用法

基本用法，默认在 3 秒后关闭

<preview path="./demo/Message/Basic.vue"></preview>

## 不同类别

用来显示「成功、警告、消息、错误」类的操作反馈。

<preview path="./demo/Message/Types.vue"></preview>

## 其他参数

可以设置配置参数来渲染

<preview path="./demo/Message/Options.vue"></preview>

## 手动关闭

可以调用Message模块的 `closeAll()` 函数来手动关闭

<preview path="./demo/Message/Close.vue"></preview>

## API

vue3中引入Message并进行函数调用，同时Message入参可为`string`类型或者是 `CreateMessageProps`对象类型，同时，为方便调用，也扩展了四种 type 的调用

```ts
import { Message } from 'bin-ui-next'

// options 可 直接传入字符串，如入参是字符串，则代表使用默认配置，入参填入message属性中进行调用
Message(options)
Message.info(options)
Message.success(options)
Message.warning(options)
Message.error(options)
```

## Options 对象

| 函数      | 说明                                                                         | 类型     | 默认值 |
| --------- | ---------------------------------------------------------------------------- | -------- | ------ |
| message   | 通知提醒的内容                                                               | String   | —      |
| duration  | 自动关闭的延时，单位秒，不关闭可以写 0                                       | Number   | 3      |
| onClose   | 关闭时的回调                                                                 | Function | —      |
| showClose | 是否显示关闭按钮                                                             | Boolean  | true   |
| useHTML   | 是否将message转换成HTML片段插入，此操作需谨慎                                | Boolean  | false  |
| offset    | 距离顶部的偏移量，设置后可以固定某个消息距离窗口顶部的位置（不进行向下追加） | Number   | —      |
| zIndex    | 层级，默认2000以后追加                                                       | Number   | —      |
