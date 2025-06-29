export const routes = [
  {
    path: '/',
    name: 'auth',
    component: () => import('@/views/AuthView.vue'),
    children: [
      {
        path: '',
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
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/AppHome.vue'),
  },
]
