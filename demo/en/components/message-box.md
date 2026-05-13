---
title: MessageBox
---

<b-back-top></b-back-top>

# MessageBox

Used for displaying empty data state.

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/MessageBox/Basic.vue"></preview>

## Confirm Dialog

Simulate a confirm dialog for submit actions.

<preview path="./demo/MessageBox/Confirm.vue"></preview>

## Custom

Content can be customized.

<preview path="./demo/MessageBox/Custom.vue"></preview>

## API

In Vue 3, import the Message function and call it. The parameter can be a `string` or a `CreateMessageProps` object. For convenience, four type-specific call methods are also provided.

```ts
import { MessageBox } from 'bin-ui-design'

// Options can be passed as a string. If a string is provided, it uses the default configuration and fills the message property.
MessageBox(options)
Message.alert(options)
Message.confirm(options)
```

## Options

| Function              | Description                                                                                   | Type                   | Default               |
| ----------------- | -------------------------------------------------------------------------------------- | ---------------------- | -------------------- |
| title             | Title                                                                                   | String                 | —                    |
| message           | Content                                                                                   | String /Element String | —                    |
| type              | Type, used to show icons: info, success, warning, error                                          | String                 | —                    |
| useHTML           | Whether to use HTML content                                                                       | Boolean                | false                |
| iconClass         | Replace icon name (without prefix)                                                               | String                 | —                    |
| callback          | Callback function. If not using Promise, it can be specified via the parameter. The parameter is `action`, with values 'confirm' or 'cancel'          | Function               | —                    |
| beforeClose       | Callback before closing. Pauses the instance. `action` can be 'confirm' or 'cancel' | String                 | cancel                 |
| showCancelButton  | Whether to show cancelbutton                                                                       | Boolean                | false                |
| scrollable        | Whether the page can scroll                                                                       | Boolean                | false                |
| showConfirmButton | Whether to show the confirm button                                                                       | Boolean                | true                 |
| cancelText        | Cancel button text                                                                           | String                 | cancel                 |
| confirmText       | Confirm button text                                                                           | String                 | Confirm                 |
| maskClosable      | Whether clicking the mask closes the dialog                                                                   | Boolean                | true ,alert时为false |
| escClosable       | Whether pressing ESC closes the dialog                                                                            | Boolean                | true ,alert时为false |
