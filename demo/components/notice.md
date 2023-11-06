---
title: 通知 Notice
---

<b-back-top></b-back-top>

# 通知 Notice

组件提供通知功能

## 基础用法

<preview path="./demo/Notice/Basic.vue"></preview>

## 带图标

可以附带提示性的图标进行使用

<preview path="./demo/Notice/TypeIcon.vue"></preview>

## 4个方向

可以设置其他参数控制notice位置和显示

<preview path="./demo/Notice/Position.vue"></preview>

## 其他参数

可以设置其他参数控制notice位置和显示

<preview path="./demo/Notice/Other.vue"></preview>

## API

vue3中引入 Notice 并进行函数调用，同时 Notice 入参可为`string`类型或者是 `CreateNoticeProps`对象类型，同时，为方便调用，也扩展了四种 type 的调用

```ts
import { Notice } from 'bin-ui-design'

// options 可 直接传入字符串，如入参是字符串，则代表使用默认配置，入参填入message属性中进行调用
Notice(options)
Notice.info(options)
Notice.success(options)
Notice.warning(options)
Notice.error(options)
```

## Options

函数及参数说明如下：

| 函数      | 说明                                                         | 类型     | 默认值    |
| --------- | ------------------------------------------------------------ | -------- | --------- |
| title     | 通知提醒的标题                                               | String   | —         |
| message   | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式     | String   | —         |
| duration  | 自动关闭的延时，单位秒，不关闭可以写 0                       | Number   | 4.5       |
| position  | 弹出位置 可选top-right 、top-left、bottom-right、bottom-left | String   | top-right |
| onClose   | 关闭时的回调                                                 | Function | —         |
| showClose | 是否显示关闭按钮                                             | Boolean  | true      |
| useHTML   | 是否将message转换成HTML片段插入，此操作需谨慎                | Boolean  | false     |
| offset    | 偏移量                                                       | Number   | —         |
| zIndex    | 层级，默认2000以后追加                                       | Number   | —         |
