import { defineStore } from 'pinia'
import useRequests from '@/composables/useRequests'
import type { User } from '@/types/user'

export const useUserStore = defineStore('userStore', {
  state: () => ({}),
  getters: {},
  actions: {
    async getUserProfile(userName: string) {
      const { response, error } = await useRequests().get<User>(`users/${userName}/profile`)
      if (response) {
        return response.data
      }
      return []
    }
  }
})
