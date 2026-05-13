---
title: JSX & TSX
---

<b-back-top></b-back-top>

# JSX & TSX

## Enabling JSX & TSX

To enable JSX and TSX, please refer to the documentation of your toolchain.

## Using Components

In JSX, we recommend using components via direct imports

```ts
import { defineComponent } from 'vue'
import { BButton } from 'bin-ui-design'

export default defineComponent({
  render() {
    return <BButton>{{ default: () => 'Star Kirby' }}</BButton>
  }
})
```
