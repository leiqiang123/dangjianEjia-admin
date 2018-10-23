import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login')
    },
    {
      path:'/layout',
      redirect:'/layout/index',
      component: () => import('../views/layout'),
      children:[
        {
          path:'index',
          name:'index',
          component: () => import('../views/index')
        },
        {
          path:'user',
          name:'user',
          component: () => import('../views/users/user')
        },
        {
          path:'addUser',
          component: () => import('../views/users/addUser')
        }
      ]
    }
  ]
})
