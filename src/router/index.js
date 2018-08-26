import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditHelloWorld from '@/components/EditHelloWorld'

import SignIn from '@/components/SignIn'
import Register from '@/components/Register'

import List from '@/components/List'
import CallJspInVue from '@/components/CallJspInVue.vue'
import Chat from '@/components/Chat.vue'

import Talk from '@/components/board/Talk.vue'


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
    ,{
      path: '/List',
      name: 'List',
      component: List
    }
    ,{
      path: '/CallJspInVue',
      name: 'CallJspInVue',
      component: CallJspInVue
    }
    ,{
      path: '/Chat',
      name: 'Chat',
      component: Chat
    }
    ,{
      path: '/Talk',
      name: 'Talk',
      component: Talk
    }





  ]
})
