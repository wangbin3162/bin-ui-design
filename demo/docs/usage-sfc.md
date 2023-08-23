---
title: 在 SFC 中使用
---

# 在 SFC 中使用

如果你想使用单文件组件风格（SFC - Single File Component），可以选择直接引入或全局安装在 Vue App 中。

## 直接引入 （推荐）

你可以直接导入组件并进行使用这种情况下，只有导入的组件才会被打包。

如果你想知道如何按需引入主题和语言包，请参考 [按需引入](/docs/import-on-demand.html)。

```vue
<template>
  <b-button>button</b-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BButton } from 'bin-ui-design'

export default defineComponent({
  components: {
    BButton
  }
})
</script>
```

如果你可以使用 setup script，你可以用下面的方式使用组件。

```vue
<template>
  <b-button>button</b-button>
</template>

<script lang="ts" setup>
import { BButton } from 'bin-ui-design'
</script>
```

注意：虽然组件样式已经默认进行了按需载入，但对于全局样式和字体样式，仍然需要进行全局引入。

```js
// main.ts
import 'bin-ui-design/dist/styles/base.css'
import 'bin-ui-design/dist/styles/icon.css'
```

## 使用 unplugin-vue-components 进行自动导入（推荐）

如果你使用vite和ts进行构建，那么你可以借助插件 `unplugin-vue-components` 来自动的进行组件的引入。

首先需要安装插件

```sh
pnpm add unplugin-vue-components -D
```

然后在 `vite.config.ts` 配置文件中进行使用

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        // 自动引入组件
        componentName => ({ name: componentName, from: 'bin-ui-design' })
      ]
    })
  ]
})
```

配置完毕之后，你可以直接在组件中进行使用，此时插件会自动进行导入。而无需任何手动引入。

```vue
<template>
  <b-button>button</b-button>
  <BButton type="primary" size="large">Button</BButton>
</template>
```

## 全量引入 （不推荐）

安装全局组件，会失去 tree-shaking 的能力，打包有冗余代码。

如果你想全局安装但是不想安装全部组件，请参考 [按需引入](/docs/import-on-demand.html)。

```javascript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import BinUI from 'bin-ui-design'
import 'bin-ui-design/dist/styles/index.css'

const app = createApp(App)
app.use(BinUI)
app.mount('#app')
```
