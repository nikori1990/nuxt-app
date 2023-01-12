<script setup>
import { ID_INJECTION_KEY } from 'element-plus'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})

watch(
  () => pageStore.layout,
  (layout) => {
    console.log('layout', layout)
    setPageLayout(layout)
  },
)
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
