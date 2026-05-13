---
title: notice Notice
---

<b-back-top></b-back-top>

# notice Notice

Component for displaying notification messages.

## Basic Usage

<preview path="./demo/Notice/Basic.vue"></preview>

## With Icon

Can be used with a tip icon.

<preview path="./demo/Notice/TypeIcon.vue"></preview>

## 4 Directions

Can set other parameters to control notice position and display.

<preview path="./demo/Notice/Position.vue"></preview>

## Other Parameters

Set other parameters to control notice position and display.

<preview path="./demo/Notice/Other.vue"></preview>

## API

In Vue 3, import Notice and call it as a function. The parameter can be a `string` type or a `CreateNoticeProps` object. For convenience, four type-specific call methods are also provided.

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

The function and parameter descriptions are as follows:

| Function      | Description                                                         | Type     | Default    |
| --------- | ------------------------------------------------------------ | -------- | --------- |
| title     | Notice title                                               | String   | —         |
| message   | Notice content. When empty or not set, the title-only mode style is applied automatically     | String   | —         |
| duration  | Auto-close delay in seconds. Set to 0 to disable auto-close                       | Number   | 4.5       |
| position  | Open position, options: top-right, top-left, bottom-right, bottom-left | String   | top-right |
| onClose   | Callback when closed                                                 | Function | —         |
| showClose | Whether to show close button                                             | Boolean  | true      |
| useHTML   | Whether to insert the message as an HTML fragment. Use with caution                | Boolean  | false     |
| offset    | Offset amount                                                       | Number   | —         |
| zIndex    | Z-index level, incrementing from 2000 by default                                       | Number   | —         |
