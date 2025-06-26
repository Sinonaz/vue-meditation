export const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/AppHome.vue')
  }
]
