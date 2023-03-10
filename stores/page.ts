import type { Tag } from '@/types/tag'
import type { LayoutKey } from '~~/.nuxt/types/layouts'

const homeTag: Tag = {
  name: 'pages.dashboard',
  icon: 'dashboard',
  path: '/dashboard',
  closable: false,
}

export const usePageStore = defineStore('page', {
  state: () => {
    // const { t } = useI18n()
    return {
      tagList: <Tag[]>[homeTag],
      titleKey: '',
      breadcrumbList: <string[]>[],
      layout: <LayoutKey>'console',
      title: '',
    }
  },
  actions: {
    addTag(tag: Tag): void {
      console.log('tag', tag)
      if (this.tagList.every(item => item.name !== tag.name))
        this.tagList.push(tag)
      this.titleKey = tag.name
    },
    removeTag(tagName: string | number): string {
      let newPath = ''
      this.tagList.forEach((item, index) => {
        let _tag
        if (item.name === tagName) {
          if (index > 0)
            _tag = this.tagList[index - 1]

          this.tagList.splice(index, 1)
          if (this.tagList.length === 0) {
            this.tagList = <Tag[]>[homeTag]
            newPath = homeTag.path
          }

          if (_tag && this.titleKey === item.name) {
            this.titleKey = _tag.name
            newPath = _tag.path
          }
        }
      })
      return newPath
    },
    closeOthers(path: string): void {
      const list = this.tagList.filter(tag => tag.path === path)
      this.tagList = list
    },
    closeAll(): void {
      this.tagList = <Tag[]>[homeTag]
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
