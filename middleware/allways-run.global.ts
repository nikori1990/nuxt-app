import { usePageStore } from '@/stores/page'

export default defineNuxtRouteMiddleware((to) => {
  const pageStore = usePageStore()
  console.log('running global middleware')
  console.log('path', to.path)
  console.log('title', to.meta.title)
  pageStore.setTitle(to.meta.title)
})
