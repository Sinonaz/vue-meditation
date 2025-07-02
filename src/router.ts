import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.ts'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: () => import('@/views/AppHome.vue'),
    },
    {
      path: '/auth',
      component: () => import('@/views/AuthView.vue'),
      meta: { layout: 'auth' },
      children: [
        {
          path: '',
          name: 'auth',
          component: () => import('@/components/InitialBlock.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/components/RegisterForm.vue'),
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/components/LoginForm.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (!authStore.getToken && to.meta.requiresAuth) {
    return { name: 'auth' }
  }
})
