import { createApp } from 'vue'
import App from './App.vue'
import lazyload from './directive/lazyload'

const app = createApp(App);

app.directive('lazyload', lazyload)

app.mount('#app')
