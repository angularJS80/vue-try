import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditHelloWorld from '@/components/EditHelloWorld'

import SignIn from '@/components/SignIn'
import Register from '@/components/Register'

import List from '@/components/List'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/editHellow',
      name: 'EditHelloWorld',
      component: EditHelloWorld
    },{
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    }
    ,{
      path: '/Register',
      name: 'SignIn',
      component: Register
    }
  ]
})
