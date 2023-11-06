---
title: 加载条 LoadingBar
---

<b-back-top></b-back-top>

# 加载条 LoadingBar

全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

## 说明

LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。 主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度， 当然也可以通过update()
方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。

## 在路由中使用

```ts
import { LoadingBar } from 'bin-ui-next'

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})
router.afterEach(() => {
  LoadingBar.finish()
})
```

## 基础用法

点击 Start 开始进度，点击 Done 结束。在调用start()方法后，组件会自动模拟进度，当调用done()或error()时，补全进度并自动消失。

点击 `Config` 之后再次查看配置项一般默认即可

<preview path="./demo/LoadingBar/Basic.vue"></preview>

## API

通过直接调用以下方法来使用组件：

```ts
import { LoadingBar } from 'bin-ui-next'

LoadingBar.start()

LoadingBar.finish()

LoadingBar.error()

LoadingBar.update(percent)

LoadingBar.config(cfg)

LoadingBar.resetConfig(cfg)
```

以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

## Options

| 函数        | 说明                             |
| ----------- | -------------------------------- |
| color       | 默认颜色 ，primary               |
| duration    | 动画执行时间 ，默认800           |
| failedColor | 错误颜色，默认error              |
| height      | 进度条高度，默认2                |
| icon        | 可以设置icon开启右侧loading icon |
