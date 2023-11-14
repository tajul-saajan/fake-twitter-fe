import { defineStore } from 'pinia'
import useRequests from '@/composables/useRequests'
import type { PaginatedData } from '@/types/paginatedData'
import type { Tweet } from '@/types/tweet'

export const useTweetStore = defineStore('tweetStore', {
  state: () => ({}),
  getters: {},
  actions: {
    async getTimelineData() {
      const { response, error } = await useRequests().get<PaginatedData<Tweet>>('timeline')
      if (response) {
        return response.data
      }
      return []
    },

    async reactTweet(id: number) {
      const { response, error } = await useRequests().post(`tweets/${id}/react`, [])
      if (response) {
        return response.data
      }
      return []
    }
  }
})
