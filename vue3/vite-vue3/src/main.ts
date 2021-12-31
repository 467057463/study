import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import Loading from './plugins/loading'

const app = createApp(App)
app.use(ElementPlus)
app.use(Loading)
app.mount('#app')
