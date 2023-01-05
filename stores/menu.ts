import { useUserStore } from './user'
import type { Menu } from '@/types/menu'

interface MenuState {
  menuList: Menu[]
}

export const useMenuStore = defineStore('menu', {
  state(): MenuState {
    return {
      menuList: [],
    }
  },
  actions: {
    async getMenuList() {
      const userStore = useUserStore()
      const headers = {
        Authorization: `bearer ${userStore.token}`,
      }
      await $fetch('/api/api/v1/menus', {
        method: 'GET',
        headers,
      }).then((res: any) => {
        this.menuList = res.data
      })
    },
  },
})
