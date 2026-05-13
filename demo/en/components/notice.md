---
title: notice Notice
---

<b-back-top></b-back-top>

# notice Notice

component提供notice功能

## Basic Usage

<preview path="./demo/Notice/Basic.vue"></preview>

## 带icon

可以附带Tip性的icon进行use

<preview path="./demo/Notice/TypeIcon.vue"></preview>

## 4个方向

Can set 其他parameter控制noticeposition和Show

<preview path="./demo/Notice/Position.vue"></preview>

## 其他parameter

Can set 其他parameter控制noticeposition和Show

<preview path="./demo/Notice/Other.vue"></preview>

## API

vue3中import Notice 并进行函数call，同时 Notice 入参可为`string`Type or 者is `CreateNoticeProps`对象Type，同时，为方便call，也扩展了四种 type 的call

```ts
import { Notice } from 'bin-ui-design'

// Options can be passed as a string. If a string is provided, it uses the default configuration and fills the message property.
Notice(options)
Notice.info(options)
Notice.success(options)
Notice.warning(options)
Notice.error(options)
```

## Options

函数及parameterDescription如下：

| Function      | Description                                                         | Type     | Default    |
| --------- | ------------------------------------------------------------ | -------- | --------- |
| title     | notice提醒的Title                                               | String   | —         |
| message   | notice提醒的Content，为空 or 不填时，自动应用仅TitleMode下的style     | String   | —         |
| duration  | 自动Disable的延时，单位秒，不Disable可以写 0                       | Number   | 4.5       |
| position  | Openposition 可选top-right 、top-left、bottom-right、bottom-left | String   | top-right |
| onClose   | Disable时的Callback                                                 | Function | —         |
| showClose | Whether to show Disablebutton                                             | Boolean  | true      |
| useHTML   | Whether to 将message转换成HTML片段插入，此操作需谨慎                | Boolean  | false     |
| offset    | offset量                                                       | Number   | —         |
| zIndex    | Z-index level，Default2000以后追加                                       | Number   | —         |
