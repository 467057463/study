import { createApp } from 'vue'
import App from './App.vue'
import Loading from './plugins/loading'

const app = createApp(App)
app.use(Loading)
app.mount('#app')
