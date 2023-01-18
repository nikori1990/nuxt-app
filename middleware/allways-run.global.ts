import { usePageStore } from '@/stores/page'
import type { Tag } from '@/types/tag'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from', from, '>>>', 'to', to)

  const pageStore = usePageStore()
  console.log('running global middleware')
  // console.log('path', to.path.slice(1))

  const breadcrumbList = to.matched.map(match => match.path)
  // console.log('breadcrumbList', breadcrumbList)
  pageStore.setBreadcrumbList(breadcrumbList)

  console.log('meta', toRaw(to.meta))

  const { $i18n } = useNuxtApp()
  console.log('i18n', $i18n)
  if ($i18n) {
    const title = $i18n.t(to.meta.titleKey)
    console.log('title', title)
    pageStore.setTitle(title)
  }

  if (!['/login', '/en/login'].includes(to.path)) {
    const tag: Tag = {
      path: to.path,
      name: to.meta.titleKey as string,
      icon: to.meta.icon as string,
      closable: to.meta.closable as boolean,
    }
    pageStore.addTag(tag)
  }

  // const layout = useCookie<LayoutKey>('layout')
  // console.log('layout', layout)

  // setTimeout(() => {
  //   setPageLayout(pageStore.layout)
  // }, 1000)
  // setPageLayout(pageStore.layout)
})
