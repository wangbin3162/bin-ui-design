import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import BinUI from 'bin-ui-design'
import ThemeSync from '../src/ThemeSync.vue'

import '@vitepress-demo-preview/component/dist/style.css'
import './index.css'
import 'bin-ui-design/_styles/index.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ThemeSync)
    })
  },
  enhanceApp({ app }) {
    app.use(BinUI)
    app.component('demo-preview', ElementPlusContainer)
  }
}
