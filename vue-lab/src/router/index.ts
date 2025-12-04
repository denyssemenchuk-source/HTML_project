import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    // Ваші нові маршрути
    {
      path: '/auth',
      name: 'auth',
      // Тепер цей файл існує, помилка зникне
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      // І цей файл теж існує
      component: () => import('../views/OnboardingView.vue')
    }
  ],
})

export default router
