import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import useRequests from '@/composables/useRequests'
import type { TokenData } from '@/types/tokenData'

interface LoginData {
  user: User
  tokenData: TokenData
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    _user: null as User | null,
    _isAuthenticated: false,
    _tokenData: null as null | TokenData
  }),
  persist: true,
  getters: {
    user: (state) => state._user,
    isAuthenticated: (state) => state._isAuthenticated,
    token: (state) => state._tokenData
  },
  actions: {
    async login(email: string, password: string) {
      const { response, error } = await useRequests().post<LoginData>(
        'login',
        { email, password },
        false
      )
      if (error) {
        //handle error data
      }
      const loginData = response?.data
      // @ts-ignore
      this.setAuth(loginData?.user, loginData?.tokenData)
      return response?.data
    },
    logOut() {
      this.$state._user = null
      this.$state._isAuthenticated = false
      this.$state._tokenData = null
    },
    setAuth(user: User, token: TokenData) {
      this.$state._user = user
      this.$state._tokenData = token
      this.$state._isAuthenticated = true
    }
  }
})
