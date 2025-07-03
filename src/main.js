import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './scripts/routers'

createApp(App).use(Router).mount('#app')
