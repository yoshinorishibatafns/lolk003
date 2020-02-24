import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page2 from '@/components/Page2'
import SignUp from '@/components/SignUp'
import SignUpSendPin from '@/components/SignUpSendPin'
import SignUpSendComplete from '@/components/SignUpSendComplete'
import LoginView from '@/components/LoginView'
import { authorizeToken } from './guards'

Vue.use(Router)

// export default new Router({
const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/SignUpSendPin',
      name: 'SignUpSendPin',
      component: SignUpSendPin
    },
    {
      path: '/SignUpSendComplete',
      name: 'SignUpSendComplete',
      component: SignUpSendComplete
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView
    }
  ]
})

router.beforeEach(authorizeToken)

export default router
