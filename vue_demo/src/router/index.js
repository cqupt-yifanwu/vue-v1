import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/main'),
      meta: {
        module: 'main'
      }
    },
    {
      path: '/album',
      name: 'album',
      component: () => import('@/pages/album'),
      meta: {
        module: 'album'
      }
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: detail,
      meta: {
        module: 'detail'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about')
    }
  ]
})
