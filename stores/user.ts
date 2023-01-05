import type { LoginData } from '@/types/loginData'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
    }
  },
  actions: {
    async login(data: LoginData) {
      await $fetch('/api/api/v1/login', {
        method: 'POST',
        body: data,
      }).then((res: any) => {
        this.token = res.data
      })
    },
  },
  persist: process.client && {
    storage: localStorage,
  },
})
