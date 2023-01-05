<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { storeToRefs } from 'pinia'

import { usePageStore } from '@/stores/page'
const pageStore = usePageStore()

const { breadcrumbList } = storeToRefs(pageStore)
</script>

<template>
  <ElBreadcrumb separator="/">
    <ElBreadcrumbItem :to="{ path: '/' }">
      首页
    </ElBreadcrumbItem>
    <ElBreadcrumbItem v-for="(item, i) in breadcrumbList" :key="i">
      {{ item }}
    </ElBreadcrumbItem>
  </ElBreadcrumb>
</template>

<style scoped></style>
