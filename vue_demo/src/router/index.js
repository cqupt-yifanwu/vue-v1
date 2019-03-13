import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      components: () => import('@/pages/main')
    },
    {
      path: '/album',
      name: 'album',
      components: () => import('@/pages/album')
    },
    {
      path: '/detail/:name',
      name: 'detail',
      components: detail
    }
  ]
})
