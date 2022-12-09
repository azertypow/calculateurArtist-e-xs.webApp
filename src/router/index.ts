import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/calculateur',
      name: 'calculator',
      component: () => import('../views/ViewCalculator.vue'),
    },
    {
      path: '/contrat',
      name: 'contract',
      component: () => import('../views/ViewContract.vue'),
    },
  ]
})

export default router
