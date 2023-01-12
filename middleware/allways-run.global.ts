import { usePageStore } from '@/stores/page'

export default defineNuxtRouteMiddleware((to) => {
  const pageStore = usePageStore()
  console.log('running global middleware')
  console.log('path', to.path.slice(1))

  const breadcrumbList = to.path.slice(1).split('/')
  console.log('breadcrumbList', breadcrumbList)
  pageStore.setBreadcrumbList(breadcrumbList)

  console.log('title', to.meta.title)
  pageStore.setTitle(to.meta.title)

  // const layout = useCookie<LayoutKey>('layout')
  // console.log('layout', layout)

  // setTimeout(() => {
  //   setPageLayout(pageStore.layout)
  // }, 1000)
  // setPageLayout(pageStore.layout)
})
