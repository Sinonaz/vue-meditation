import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { API_ROUTES, http } from '@/api.ts'
import type { AuthInterface } from '@/interfaces/auth.interface.ts'

const TOKEN_STORE_KEY = 'token-store'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()
  const getToken = computed(() => token.value)

  const localStoredToken = localStorage.getItem(TOKEN_STORE_KEY)

  if (localStoredToken) {
    token.value = localStoredToken
  }

  function clearToken(): void {
    token.value = undefined
    localStorage.removeItem(TOKEN_STORE_KEY)
  }

  function setToken(newToken: string): void {
    token.value = newToken
    localStorage.setItem(TOKEN_STORE_KEY, newToken)
  }

  async function login(username: string, password: string) {
    const { data } = await http.post<{ data: AuthInterface; message: string; status: string }>(
      API_ROUTES.auth.login,
      { username, password },
    )

    setToken(data.data.token)
  }

  return { getToken, setToken, clearToken, login }
})
