import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

import Trade from './components/views/Trade.vue'
import Stats from './components/views/Stats.vue'
import Exchange from './components/views/Exchange.vue'

const routes = [
  {path: '/', component: Trade},
  {path: '/stats', component: Stats},
  {path: '/exchange', component: Exchange}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
