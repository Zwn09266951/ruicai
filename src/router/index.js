import Vue from 'vue'
import VueRouter from 'vue-router'

//文件路径
import Index from '../view/home'

Vue.use(VueRouter)

const router = new VueRouter({
  mede: 'history',
  routes: [
    {
      name: 'index',
      path: '/home',
      component: Index
    },
    {
      path: '*',
      redirect: '/home'

    }
  ]
})

export default router
