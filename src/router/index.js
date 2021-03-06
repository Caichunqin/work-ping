import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabs from '../views/Tabs.vue'

Vue.use(VueRouter)

// const lazyload = component => () => import(`./views/${component}.vue`)

const routes = [
  {
    path: '/',
    component: Tabs,
    redirect: 'index',
    children: [{
      path: 'index',
      component: () => import(/* webpackChunkName: "index" */ '../views/index.vue')
    },
    {
      path: 'order',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "myOrder" */ '../views/outPrice.vue')
    },
    {
      path: 'outPrice',
      component: () => import(/* webpackChunkName: "outPrice" */ '../views/myOrder.vue')
    }
    ]
  },
  {
    path: '/pigList',
    component: () => import(/* webpackChunkName: "pigList" */ '../views/pigList.vue')
  },
  {
    path: '/pinPig',
    component: () => import(/* webpackChunkName: "pinPig" */ '../views/pinPig.vue')
  },
  {
    path: '/guide',
    component: () => import(/* webpackChunkName: "guide" */ '../views/guide.vue')
  },
  {
    path: '/miaoPig',
    component: () => import(/* webpackChunkName: "miaoPig" */ '../views/miaoPig.vue')
  },
  {
    path: '/weixin_auth',
    component: () => import(/* webpackChunkName: "weixin_auth" */ '../views/weixin_auth.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
