import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Order from '../pages/order/Order'
import Profile from '../pages/profile/Profile'
import Search from '../pages/search/Search'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home', redirect: Home},
    {path: '/search', name: 'search', component: Search},
    {path: '/order', name: 'order', component: Order},
    {path: '/profile', name: 'profile', component: Profile},
  ]
})
