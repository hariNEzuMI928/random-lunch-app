import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import firebase from 'firebase'

const routes = [
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
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/Login')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('@/components/Success')
  },
  {
    path: '/fileUpload',
    name: 'fileUpload',
    component: () => import('../views/FileUpload.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/Todo.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 未認証の場合はログイン画面へ
router.beforeResolve((to, from, next) => {
  console.log(to)
  if (to.path == '/') {
    next()
  } else {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        // alert('ログインしてください');
        console.log('not authorized')
        next({ path: '/' })
      }
    })
  }
})

export default router
