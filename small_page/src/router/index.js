import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '系统首页',
      component: index,
      redirect:'/page',
      children:[
        {
          path:'/page',
          name:'page1',
          meta:{
            requireAuth:true
          },
          component: resolve => require(['@/views/mypage/page1'], resolve)
        }
      ]
    }
  ]
})
