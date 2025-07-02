import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, http } from '@/api.ts'
import type { ProfileInterface } from '@/interfaces/profile.interface.ts'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<ProfileInterface>()

  async function fetchProfile() {
    const {
      data: { data, status },
    } = await http().get<{ data: { user: ProfileInterface }; status: string }>(API_ROUTES.profile)

    profile.value = data.user
  }

  return { profile, fetchProfile }
})
