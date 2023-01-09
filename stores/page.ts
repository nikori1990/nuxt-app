import type { Tag } from '@/types/tag'

export const usePageStore = defineStore('page', {
  state: () => {
    // const { t } = useI18n()
    const homeTag: Tag = {
      name: 'console',
      // name: t('home', 'console'),
      path: '/',
      closable: false,
    }
    return {
      tagList: <Tag[]>[homeTag],
      title: '',
      breadcrumbList: <string[]>[],
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
