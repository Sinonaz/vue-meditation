import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { StatInterface } from '@/interfaces/stat.interface.ts'
import { API_ROUTES, http } from '@/api.ts'
import type { SummaryInterface } from '@/interfaces/summary.interface.ts'

export const useStatsStore = defineStore('stats', () => {
  const stats = ref<StatInterface[]>()
  const summary = ref<SummaryInterface>()

  async function saveFeelings(type: string, value: number) {
    const {
      data: { data },
    } = await http().post<{ data: { stat: StatInterface }; message: string; status: string }>(API_ROUTES.stats, {
      type,
      value,
    })

    return data
  }

  async function fetchStats() {
    const {
      data: { data },
    } = await http().get<{
      data: {
        stats: StatInterface[]
        summary: SummaryInterface
      }
      status: string
    }>(API_ROUTES.stats)

    stats.value = data.stats
    summary.value = data.summary
  }

  return { stats, summary, saveFeelings, fetchStats }
})
