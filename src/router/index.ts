import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/video/list',
    },

    // 影视
    {
      path: '/video/list',
      name: 'videoList',
      component: () => import('~/components/views/video/List.vue')
    },
    {
      path: '/video/play/:id',
      name: 'videoPlay',
      props: true,
      component: () => import('~/components/views/video/play.vue')
    },

    // 统计
    {
      path: '/statics',
      name: 'statics',
      component: () => import('~/components/views/Statics.vue')
    },

    // 设置
    {
      path: '/setting',
      name: 'setting',
      component: () => import('~/components/views/Setting.vue')
    },

    // 用户
    {
      path: '/user',
      name: 'user',
      component: () => import('~/components/views/User.vue')
    },

    // 关于
    {
      path: '/about',
      name: 'about',
      component: () => import('~/components/views/About.vue')
    }
  ]
})

export default router
