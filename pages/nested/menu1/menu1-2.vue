<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
  layout: 'console',
  titleKey: 'pages.nested.menu1.menu1-2.index',
  icon: 'nested',
  closable: true,
})
</script>

<template>
  <NuxtPage />
</template>

<style scoped></style>
