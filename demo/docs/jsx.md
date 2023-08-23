---
title: JSX & TSX
---

# JSX & TSX

## 启用 JSX & TSX

关于启用 JSX 和 TSX，请参考你使用的工具链的相关文档。

## 使用组件

在JSX中，推荐直接引入的形式使用组件

```ts
import { defineComponent } from 'vue'
import { BButton } from 'bin-ui-design'

export default defineComponent({
  render() {
    return <BButton>{{ default: () => 'Star Kirby' }}</BButton>
  }
})
```
