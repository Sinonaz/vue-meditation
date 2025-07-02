import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MeditationInterface } from '@/interfaces/meditation.interface.ts'
import { API_ROUTES, http } from '@/api.ts'

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<MeditationInterface[]>([])

  async function fetchMeditations() {
    const { data } = await http().get(API_ROUTES.meditations)

    meditations.value = data.data.meditations
  }

  return { meditations, fetchMeditations }
})
