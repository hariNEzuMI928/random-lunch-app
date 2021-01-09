import { createRouter, createWebHashHistory } from 'vue-router'
import firebase from 'firebase'

const routes = [
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
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/random',
    name: 'RandomApp',
    component: () => import('@/views/RandomApp')
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
