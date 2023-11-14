import { defineStore } from 'pinia'
import useRequests from '@/composables/useRequests'
import type { User } from '@/types/user'
import useGenerateUrl from '@/composables/useGenerateUrl'

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
    },
    async searchUser(key: string) {
      const endpoint = useGenerateUrl().generateQueryString({ search: key })
      const { response, error } = await useRequests().get<User | null>(`users?${endpoint}`)
      if (response) {
        return response.data
      }
      return null
    }
  }
})
