import type { Tag } from '@/types/tag'
import type { LayoutKey } from '~~/.nuxt/types/layouts'

export const usePageStore = defineStore('page', {
  state: () => {
    // const { t } = useI18n()
    const homeTag: Tag = {
      name: 'console',
      icon: 'ep-house',
      path: '/',
      closable: false,
    }
    return {
      tagList: <Tag[]>[homeTag],
      title: '',
      breadcrumbList: <string[]>[],
      layout: <LayoutKey>'console',
    }
  },
  actions: {
    addTag(tag: Tag): void {
      if (this.tagList.every(item => item.name !== tag.name))
        this.tagList.push(tag)
    },
    removeTag(tagName: string | number): void {
      this.tagList.forEach((item, index) => {
        if (item.name === tagName) {
          this.tagList.splice(index, 1)
          if (this.title === tagName)
            this.title = this.tagList[index - 1].name
        }
      })
    },
    setLayout(layout: LayoutKey) {
      this.layout = layout
    },
    setTitle(title: any): void {
      this.title = title
    },
    setBreadcrumbList(list: any) {
      this.breadcrumbList = list
    },
  },
  persist: process.client && {
    storage: localStorage,
  },
})
