import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import MainDesktop from './views/main-desktop'
import Menupage from './views/menupage'
import MyCart from './views/my-cart'
import SignUp from './views/SignUp'
import Myaccount from './views/my-account'

import SignUp2 from './views/SignUp2'

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
      name: 'Myaccount',
      path: '/account',
      component: Myaccount,
    },
    {
      name: 'MyCart',
      path: '/cart',
      component: MyCart,
    },
    {
      name: 'SignUp',
      path: '/signup',
      component: SignUp,
    },
    {
      name: 'SignUp2',
      path: '/signup2',
      component: SignUp2,
    }
  ],
})
