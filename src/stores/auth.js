import { defineStore } from 'pinia'
import { USER_INFO } from '@utils/constants'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userInfo: useStorage(USER_INFO, '')
  }),
  getters: {
    loggedIn: ({ userInfo }) => !!userInfo,
  },
  actions: {
    updateUser(user) {
      this.userInfo = user;
    },
  },
})
