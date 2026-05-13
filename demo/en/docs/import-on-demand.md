---
title: On-Demand Imports
---

<b-back-top></b-back-top>

# On-Demand Imports (Tree Shaking)

Bin UI Design supports tree shaking. Components, languages, and themes can all be tree-shaken.

Learn more about theme configuration at [Customizing Themes](/en/docs/custom-theme.html).

## Manual Import

```vue
<script setup lang="ts">
import { BButton } from 'bin-ui-design'
</script>

<template>
  <div class="card">
    <b-button type="primary">Primary Button</b-button>
    <BButton type="primary">Primary Button</BButton>
  </div>
</template>
```

## Auto Import

You can use the `unplugin-vue-components` plugin to automatically import components.

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

## On-Demand Global Component Installation (Manual)

The component library exports all components, directives, and utility functions. You can combine them with auto imports to bring in common directives and helper functions for easier management.

```ts
// main.ts
import { createApp } from 'vue'
import {
  // create UI global component and directive installer
  create,
  // directives
  ClickOutside,
  // components
  BButton,
  // utilities
  Utils
} from 'bin-ui-design'

const UI = create({
  components: [BButton],
  directives: [
    {
      name: 'ClickOutside',
      directive: ClickOutside
    }
  ]
})

const app = createApp()
app.use(UI)
app.mount('#app')
```

Now you can happily use the components!

```vue
<template>
  <div class="card">
    <b-button type="primary">Primary Button</b-button>
    <BButton type="primary">Primary Button</BButton>
  </div>
</template>
```
