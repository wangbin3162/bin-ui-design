import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import BinUI from 'bin-ui-design'
import 'bin-ui-design/_styles/index.css'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BinUI)
    app.component('demo-preview', ElementPlusContainer)
  }
}
