import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/homeView/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/aboutView/AboutView.vue')
    }
  ]
})

export default router
