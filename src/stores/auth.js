import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userInfo: ''
  }),
  getters: {
    loggedIn: ({ userInfo }) => !!userInfo?.id,
  },
  actions: {
    updateUser(user) {
      this.userInfo = user;
    },
  },
})
