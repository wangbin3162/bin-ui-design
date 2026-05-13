---
title: messageTip Message
---

<b-back-top></b-back-top>

# messageTip Message

轻量级的信息反馈component，在顶部centerShow，并自动消失。有多种不同的Tip状态可选择。

## Basic Usage

基本用法，Default在 3 秒后Disable

<preview path="./demo/Message/Basic.vue"></preview>

## 不同类别

用来Show「成功、Warning、message、错误」类的操作反馈。

<preview path="./demo/Message/Types.vue"></preview>

## 其他parameter

Can set configurationparameter来render

<preview path="./demo/Message/Options.vue"></preview>

## 手动Disable

可以callMessage模块的 `closeAll()` 函数来手动Disable

<preview path="./demo/Message/Close.vue"></preview>

## API

In Vue 3, import the Message function and call it. The parameter can be a `string` or a `CreateMessageProps` object. For convenience, four type-specific call methods are also provided.

```ts
import { Message } from 'bin-ui-design'

// Options can be passed as a string. If a string is provided, it uses the default configuration and fills the message property.
Message(options)
Message.info(options)
Message.success(options)
Message.warning(options)
Message.error(options)
```

## Options 对象

| Function      | Description                                                                         | Type     | Default |
| --------- | ---------------------------------------------------------------------------- | -------- | ------ |
| message   | notice提醒的Content                                                               | String   | —      |
| duration  | 自动Disable的延时，单位秒，不Disable可以写 0                                       | Number   | 3      |
| onClose   | Disable时的Callback                                                                 | Function | —      |
| showClose | Whether to show Disablebutton                                                             | Boolean  | true   |
| useHTML   | Whether to 将message转换成HTML片段插入，此操作需谨慎                                | Boolean  | false  |
| offset    | 距离顶部的offset量，设置后可以固定某个message距离窗口顶部的position（不进行向下追加） | Number   | —      |
| zIndex    | Z-index level，Default2000以后追加                                                       | Number   | —      |
