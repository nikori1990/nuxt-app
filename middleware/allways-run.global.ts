import { usePageStore } from '@/stores/page'
import type { Tag } from '@/types/tag'

export default defineNuxtRouteMiddleware((to) => {
  const pageStore = usePageStore()
  console.log('running global middleware')
  console.log('path', to.path.slice(1))

  const breadcrumbList = to.path.slice(1).split('/')
  console.log('breadcrumbList', breadcrumbList)
  pageStore.setBreadcrumbList(breadcrumbList)

  console.log('meta', to.meta)
  const tag: Tag = {
    path: to.path,
    name: to.meta.title as string,
    icon: to.meta.icon as string,
    closable: to.meta.closable as boolean,
  }
  pageStore.addTag(tag)

  // const layout = useCookie<LayoutKey>('layout')
  // console.log('layout', layout)

  // setTimeout(() => {
  //   setPageLayout(pageStore.layout)
  // }, 1000)
  // setPageLayout(pageStore.layout)
})
