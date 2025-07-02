import axios from 'axios'
import { useAuthStore } from '@/stores/auth.store.ts'

export const API_BASE = 'http://localhost:3000/api'
export const API_ROUTES = {
  meditations: '/meditations',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  profile: '/profile',
  stats: '/stats',
}

export function http() {
  const authStore = useAuthStore()

  return axios.create({
    baseURL: API_BASE,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  })
}
