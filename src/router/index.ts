import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const elementToScroll = document.querySelector(to.hash)
      if(elementToScroll instanceof HTMLElement) document.querySelector('#app')!.scroll({
        top: elementToScroll.getBoundingClientRect().top + document.querySelector('#app')!.scrollTop - (window.innerHeight / 2),
        behavior: 'smooth',
      })
    }

    else {
      return {
        top: 0,
      }
    }
  },
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
