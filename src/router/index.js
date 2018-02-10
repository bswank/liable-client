import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Privacy from '@/components/Privacy'
import Account from '@/components/user/Account'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import Reset from '@/components/user/Reset'
import CreateGoal from '@/components/goal/CreateGoal'
import Goals from '@/components/goal/Goals'
import Checkin from '@/components/goal/Checkin'
import store from '@/store/store'

Vue.use(Router)

const authorizeUser = (to, from, next) => {
  if (!store.state.isUserLoggedIn) {
    next('/login')
  } else {
    next()
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/account',
      beforeEnter: authorizeUser,
      name: 'Account',
      component: Account
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account/reset/:token',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/goals',
      beforeEnter: authorizeUser,
      name: 'Goals',
      component: Goals
    },
    {
      path: '/goals/create',
      beforeEnter: authorizeUser,
      name: 'CreateGoal',
      component: CreateGoal
    },
    {
      path: '/checkin/:token',
      name: 'Checkin',
      component: Checkin
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // ...
// })

export default router
