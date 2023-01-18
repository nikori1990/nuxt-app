<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { usePageStore } from '@/stores/page'
const pageStore = usePageStore()

const { breadcrumbList } = storeToRefs(pageStore)
const { getLocaleMenuName } = useMenu()
</script>

<template>
  <ElBreadcrumb separator="/">
    <ElBreadcrumbItem v-for="(item, i) in breadcrumbList" :key="i">
      {{ getLocaleMenuName(item) }}
    </ElBreadcrumbItem>
  </ElBreadcrumb>
</template>

<style scoped></style>
