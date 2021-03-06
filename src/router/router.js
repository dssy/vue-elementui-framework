import Vue from 'vue'
import VueRouter from 'vue-router'

// 仅供测试 各模块根据需要在modules文件夹中添加路由配置信息
// import Test1 from '../test/test1.vue'
// import Test2 from '../test/test2.vue'
// import TestHome from '../test/testhome.vue'

Vue.use(VueRouter)

export default () => {
  return new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      if(savedPosition)
        return savedPosition
      else
        return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/test1',
        component: () => import('../test/test1.vue')
      },
      {
        path: '/test2',
        component: () => import('../test/test2.vue')
      },
      {
        path: '/testhome',
        component: () => import('../test/testhome.vue')
      }
    ]
  })
}