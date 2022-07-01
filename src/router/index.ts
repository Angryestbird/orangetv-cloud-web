import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/video',
    },
    {
      path: '/',
      alias: '/video',
      name: 'home',
      component: () => import('~/components/views/Videos.vue')
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
      path: '/about',
      name: 'about',
      component: () => import('~/components/views/about.vue')
    }
  ]
})

export default router
