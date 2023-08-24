import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import BinUI from 'bin-ui-design'
import DocTable from '../src/DocTable.vue'

import '@vitepress-demo-preview/component/dist/style.css'
import 'bin-ui-design/_styles/index.css'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BinUI)
    app.component(DocTable.name, DocTable)
    app.component('demo-preview', ElementPlusContainer)
  }
}
