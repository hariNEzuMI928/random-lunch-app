import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/random',
    name: 'RandomApp',
    component: () => import('../views/RandomApp.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
