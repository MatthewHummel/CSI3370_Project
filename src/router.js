import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import MainDesktop from './views/main-desktop'
import Menupage from './views/menupage'
import MyCart from './views/my-cart'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'MainDesktop',
      path: '/home',
      component: MainDesktop,
    },
    {
      name: 'Menupage',
      path: '/menu',
      component: Menupage,
    },
    {
      name: 'MyCart',
      path: '/cart',
      component: MyCart,
    },
  ],
})
