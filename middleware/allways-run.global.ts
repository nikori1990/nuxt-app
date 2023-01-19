import { usePageStore } from '@/stores/page'
import type { Tag } from '@/types/tag'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from', from, '>>>', 'to', to)

  const pageStore = usePageStore()
  console.log('running global middleware')
  // console.log('path', to.path.slice(1))

  let breadcrumbList = []
  // const breadcrumbList = to.matched.map(match => match.path)
  // console.log('breadcrumbList', breadcrumbList)

  console.log(to.meta.titleKey)
  if (to.meta.titleKey && to.meta.titleKey.includes('index'))
    breadcrumbList = to.matched.filter(match => match.children.length > 0).map(match => match.path)
  else
    breadcrumbList = to.matched.map(match => match.path)

  pageStore.setBreadcrumbList(breadcrumbList)

  console.log('meta', toRaw(to.meta))

  const { $i18n } = useNuxtApp()
  const title = $i18n.t(to.meta.titleKey)
  pageStore.setTitle(title)

  if (!['/login', '/en/login'].includes(to.path) && to.path !== '/') {
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
