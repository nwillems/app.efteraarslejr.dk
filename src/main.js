import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import config from './assets/configuration.json'

const cookieValue = (cookies, key) => cookies.split("; ").find(row => row.startsWith(`${key}=`)).split("=")[1]

const team_id = cookieValue(document.cookie, "team_id"); // "fe1ce263-87d9-4f70-ad5b-a196360b43b6"
const team_config = config.teams[team_id]
const base_config = config.general

import Trade from './components/views/Trade.vue'
import Stats from './components/views/Stats.vue'
import Exchange from './components/views/Exchange.vue'
import Map from './components/views/Map.vue'

const routes = [
  {path: '/', component: Trade, props: { team_name: team_config.team_name }},
  {path: '/stats', component: Stats, props: {stats_url: team_config.stats_url}},
  {path: '/exchange', component: Exchange},
  {path: '/map', component: Map},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

console.log(team_config)
