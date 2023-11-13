import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import useRequests from '@/composables/useRequests'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    _user: null as User | null,
    _isAuthenticated: false,
    _token: null as null | string
  }),
  persist: true,
  getters: {
    user: (state) => state._user,
    isAuthenticated: (state) => state._isAuthenticated,
    token: (state) => state._token
  },
  actions: {
    async login(email: string, password: string) {
      const { response, error } = await useRequests().post<User>('login', { email, password })
      if (error) {
        //handle error data
      }
      return response.data
    },
    logOut() {
      this.$state._user = null
      this.$state._isAuthenticated = false
      this.$state._token = null
    }
  }
})
