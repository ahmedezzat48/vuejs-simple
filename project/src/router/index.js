import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import singleUser from '@/components/singleUser'
import about from '@/../about'
import users from '@/../users'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
    	path:'/users',
    	name: 'users',
    	component: users
    },
    {
      path:'/users/:id',
      name: 'singleUser',
      component: singleUser
    },
    {
      path:'*',
      redirect: '/'
    }
    
  ]
})
