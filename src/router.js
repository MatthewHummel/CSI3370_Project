import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import MainDesktop from './views/main-desktop'
import Menupage from './views/menupage'
import Menupage2 from './views/menupage2'
import MyCart from './views/my-cart'
import MyCart2 from './views/my-cart2'
import SignUp from './views/SignUp'
import Myaccount from './views/my-account'
import Myaccount2 from './views/my-account2'

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
      name: 'Menupage2',
      path: '/menu2',
      component: Menupage2,
    },
    {
      name: 'Myaccount',
      path: '/account',
      component: Myaccount,
    },
    {
      name: 'Myaccount2',
      path: '/account2',
      component: Myaccount2,
    },
    {
      name: 'MyCart',
      path: '/cart',
      component: MyCart,
    },
    {
      name: 'MyCart2',
      path: '/cart2',
      component: MyCart2,
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
