import { useUserStore } from './user'
import type { Menu } from '@/types/menu'

// import Http from '@/utils/request'

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

      await $fetch('/api/v1/menus', {
        method: 'GET',
        headers,
      }).then((res: any) => {
        console.log('res', res)
        this.menuList = res.data
      }).catch((err) => {
        console.log('err', err)
      })
    },
  },
})
