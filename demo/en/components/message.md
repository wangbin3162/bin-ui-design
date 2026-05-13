---
title: messageTip Message
---

<b-back-top></b-back-top>

# messageTip Message

A lightweight information feedback component that appears centered at the top and disappears automatically. Multiple tip states are available.

## Basic Usage

Basic usage, closes automatically after 3 seconds by default.

<preview path="./demo/Message/Basic.vue"></preview>

## Different Types

Used to show operation feedback for "success, warning, info, error" categories.

<preview path="./demo/Message/Types.vue"></preview>

## Other Parameters

Can set configuration parameters for rendering

<preview path="./demo/Message/Options.vue"></preview>

## Manual Close

You can call the `closeAll()` function from the Message module to manually close all messages.

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

## Options Object

| Function      | Description                                                                         | Type     | Default |
| --------- | ---------------------------------------------------------------------------- | -------- | ------ |
| message   | Notice content                                                               | String   | —      |
| duration  | Auto-close delay in seconds. Set to 0 to disable auto-close                                       | Number   | 3      |
| onClose   | Callback when closed                                                                 | Function | —      |
| showClose | Whether to show close button                                                             | Boolean  | true   |
| useHTML   | Whether to insert the message as an HTML fragment. Use with caution                                | Boolean  | false  |
| offset    | Offset from the top. Setting this fixes a message at a specific position from the window top (no downward stacking) | Number   | —      |
| zIndex    | Z-index level, incrementing from 2000 by default                                                       | Number   | —      |
