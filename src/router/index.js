import Vue from 'vue'
import Router from 'vue-router'
import Load from '@/components/Load'
import Login from '@/components/Login'
import LoginUp from '@/components/LoginUp'
import Register from '@/components/Register'
import Home from '@/components/Home'
import SelectSalad from '@/components/SelectSalad'
import Check from '@/components/Check'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Load',
      component: Load
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/loginUp',
      name: 'LoginUp',
      component: LoginUp
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/selectSalad',
      name: 'SelectSalad',
      component: SelectSalad
    },
    {
      path: '/check',
      name: 'Check',
      component: Check
    },
  ]
})
