import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page2 from '@/components/Page2'
import SignUp from '@/components/SignUp'
import SignUpSendPin from '@/components/SignUpSendPin'
import SignUpSendComplete from '@/components/SignUpSendComplete'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
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
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
