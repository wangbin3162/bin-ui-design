---
title: Usage in SFC
---

<b-back-top></b-back-top>

# Usage in SFC

To use Single File Component (SFC) style, you can either import components directly or install them globally in your Vue app.

## Direct Import (Recommended)

You can directly import and use components. In this case, only the imported components will be bundled.

If you want to know how to import themes and language packs on demand, see [On-Demand Imports](/en/docs/import-on-demand.html).

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

If you can use setup script, you can use components like this:

```vue
<template>
  <b-button>button</b-button>
</template>

<script lang="ts" setup>
import { BButton } from 'bin-ui-design'
</script>
```

Note: Since style imports depend on base styles, styles have been removed from components. When using on-demand imports, you can manually import the corresponding component styles or import all styles at once. Global styles and font styles still require a global import.

```js
// main.ts
import 'bin-ui-design/dist/styles/base.css'
import 'bin-ui-design/dist/styles/icon.css'
import 'bin-ui-design/dist/common/flex.css'
import 'bin-ui-design/components/_internal/empty/styles/index.css'
import 'bin-ui-design/components/button/styles/index.css'
import 'bin-ui-design/components/button-group/styles/index.css'
// or
import 'bin-ui-design/dist/styles/base.css'
import 'bin-ui-design/dist/styles/icon.css'
import 'bin-ui-design/dist/styles/common.css'
import 'bin-ui-design/dist/styles/components.css'
```

## Auto Import with unplugin-vue-components (Recommended)

If you're using Vite and TypeScript for your build, you can use the `unplugin-vue-components` plugin to automatically import components.

First, install the plugin:

```sh
pnpm add unplugin-vue-components -D
```

Then configure it in `vite.config.ts`:

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
        // Auto import components
        componentName => ({ name: componentName, from: 'bin-ui-design' })
      ]
    })
  ]
})
```

Once configured, you can directly use components in your templates. The plugin will automatically import them without any manual imports.

```vue
<template>
  <b-button>button</b-button>
  <BButton type="primary" size="large">Button</BButton>
</template>
```

## Full Import (Not Recommended)

Installing all components globally loses tree-shaking capability and results in redundant bundle code.

If you want to install globally without installing all components, see [On-Demand Imports](/en/docs/import-on-demand.html).

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
