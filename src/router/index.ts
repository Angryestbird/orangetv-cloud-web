import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/video',
    },
    {
      path: '/video',
      name: 'home',
      component: () => import('~/components/views/Video.vue'),
      children: [
        {
          path: 'list',
          name: 'videoList',
          component: () => import('~/components/views/video/List.vue')
        },
        {
          path: 'play',
          name: 'videoPlay',
          component: () => import('~/components/views/video/play.vue')
        }
      ]
    },
    {
      path: '/statics',
      name: 'statics',
      component: () => import('~/components/views/Statics.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('~/components/views/Setting.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('~/components/views/User.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('~/components/views/About.vue')
    }
  ]
})

export default router
