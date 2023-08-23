import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import BinUI from 'bin-ui-design'

import '@vitepress-demo-preview/component/dist/style.css'
import 'bin-ui-design/_styles/index.css'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BinUI)
    app.component('demo-preview', ElementPlusContainer)
  }
}
