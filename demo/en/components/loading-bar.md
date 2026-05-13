---
title: loading条 LoadingBar
---

<b-back-top></b-back-top>

# loading条 LoadingBar

globalcreate一个Show页面loading、异步请求、文件上传等的loadingprogress bar。

## Description

LoadingBar 只会在globalcreate一个，因此在任何positioncall的method都会控制这同一个component。 主要use场景Yes路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度， 当然也Can be set via update (Date)()
method来传入一个精确的进度，比如在文件上传时会很有用，具体见API。

## 在路由中use

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

click Start 开始进度，click Done 结束。在callstart()method后，component会自动模拟进度，当calldone() or error()时，补全进度并自动消失。

click `Config` 之后再次查看configuration项一般Default即可

<preview path="./demo/LoadingBar/Basic.vue"></preview>

## API

通过直接call以下method来usecomponent：

```ts
import { LoadingBar } from 'bin-ui-design'

LoadingBar.start()

LoadingBar.finish()

LoadingBar.error()

LoadingBar.update (Date)(percent)

LoadingBar.config(cfg)

LoadingBar.resetConfig(cfg)
```

以上method隐式的create及维护Vuecomponent。函数及parameterDescription如下：

## Options

| Function        | Description                             |
| ----------- | -------------------------------- |
| color       | Defaultcolor ，primary               |
| duration    | animation执行时间 ，Default800           |
| failedColor | 错误color，Defaulterror              |
| height      | progress barHeight，Default2                |
| icon        | Can set iconEnable右侧loading icon |
