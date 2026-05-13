---
title: LoadingBar
---

<b-back-top></b-back-top>

# LoadingBar

Global progress bar for showing page loading, async requests, file uploads, etc.

## Description

LoadingBar creates only one global instance, so calling methods from any position controls the same component. The main use cases are route switching and Ajax requests, where precise progress cannot be obtained—LoadingBar simulates progress. You can also pass an exact progress value via the `update()` method, which is useful for file uploads. See the API for details.

## Usage in Routing

```ts
import { LoadingBar } from 'bin-ui-design'

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})
router.afterEach(() => {
  LoadingBar.done()
})
```

## Basic Usage

Click Start to begin progress, click Done to finish. After calling the `start()` method, the component automatically simulates progress. When `done()` or `error()` is called, the progress is completed and the bar disappears.

After clicking `Config`, you can review the configuration; the defaults are generally sufficient.

<preview path="./demo/LoadingBar/Basic.vue"></preview>

## API

Use the component by directly calling the following methods:

```ts
import { LoadingBar } from 'bin-ui-design'

LoadingBar.start()

LoadingBar.finish()

LoadingBar.error()

LoadingBar.update (Date)(percent)

LoadingBar.config(cfg)

LoadingBar.resetConfig(cfg)
```

The above methods implicitly create and maintain the Vue component. The function and parameter descriptions are as follows:

## Options

| Function        | Description                             |
| ----------- | -------------------------------- |
| color       | Default color, primary               |
| duration    | Animation duration, default 800           |
| failedColor | Error color, default error              |
| height      | Progress bar height, default 2                |
| icon        | Set icon to enable right-side loading icon |
