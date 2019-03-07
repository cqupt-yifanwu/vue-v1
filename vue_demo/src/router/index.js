import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import album from '@/pages/album'
import detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/album',
      name: 'album',
      component: album
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: detail
    }
  ]
})
