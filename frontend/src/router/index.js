import Vue from 'vue'
import Router from 'vue-router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

// Views
import Login from '@/views/login/login'
import Home from '@/views/home/home'
import Me from '@/views/me/me'
import Chat from '@/views/chat/chat'
import About from '@/views/about/about'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(route => {
  NProgress.done()
})

export default router
