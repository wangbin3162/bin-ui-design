import { createApp } from 'vue'
import App from './App.vue'

import BinUI from '../src'
import '../src/_styles/index.css'
import './assets/main.css'

const app = createApp(App)
app.use(BinUI)

app.mount('#app')
