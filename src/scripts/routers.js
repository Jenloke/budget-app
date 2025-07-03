import { createRouter, createWebHistory } from 'vue-router'
import { getSession } from './auth'

import LoginPage from '@/routes/LoginPage.vue'
import HomePage from '@/routes/HomePage.vue'
// import { meta } from 'eslint-plugin-vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LoginPage },
]

const Router = createRouter({
  history: createWebHistory(),
  routes,
})

Router.beforeEach(async (to) => {
  if ((await getSession()) !== true && to.name !== 'login') {
    return { path: '/login' }
  }
})

export default Router
