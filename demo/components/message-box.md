---
title: 弹框提示 MessageBox
---

<b-back-top></b-back-top>

# 弹框提示 MessageBox

空显示状态，用于给内部无数据情况的展示。十分简单

## 基础用法

直接用组件默认插槽插入即可

<preview path="./demo/MessageBox/Basic.vue"></preview>

## 模拟confirm

模拟confirm提交选择

<preview path="./demo/MessageBox/Confirm.vue"></preview>

## 自定义

可以自定义内容

<preview path="./demo/MessageBox/Custom.vue"></preview>

## API

vue3中引入Message并进行函数调用，同时Message入参可为`string`类型或者是 `CreateMessageProps`对象类型，同时，为方便调用，也扩展了四种 type 的调用

```ts
import { MessageBox } from 'bin-ui-next'

// options 可 直接传入字符串，如入参是字符串，则代表使用默认配置，入参填入message属性中进行调用
MessageBox(options)
Message.alert(options)
Message.confirm(options)
```

## Options

| 函数              | 说明                                                                                   | 类型                   | 默认值               |
| ----------------- | -------------------------------------------------------------------------------------- | ---------------------- | -------------------- |
| title             | 标题                                                                                   | String                 | —                    |
| message           | 内容                                                                                   | String /Element String | —                    |
| type              | 类别，用于显示图标,info,success,warning,error                                          | String                 | —                    |
| useHTML           | 是否使用html插入                                                                       | Boolean                | false                |
| iconClass         | 替换图表名称（不带前缀）                                                               | String                 | —                    |
| callback          | 回调函数，不实用promise，可以用参数指定，参数为action，值为'confirm','cancel'          | Function               | —                    |
| beforeClose       | 闭前的回调，会暂停实例的关闭(action, instance, done)，action 的值为'confirm', 'cancel' | String                 | 取消                 |
| showCancelButton  | 是否显示取消按钮                                                                       | Boolean                | false                |
| scrollable        | 页面是否可以滚动                                                                       | Boolean                | false                |
| showConfirmButton | 是否显示确定按钮                                                                       | Boolean                | true                 |
| cancelText        | 取消按钮文字                                                                           | String                 | 取消                 |
| confirmText       | 确定按钮文字                                                                           | String                 | 确定                 |
| maskClosable      | 是否可以点击遮罩关闭                                                                   | Boolean                | true ,alert时为false |
| escClosable       | esc按钮关闭                                                                            | Boolean                | true ,alert时为false |
