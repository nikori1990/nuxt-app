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
  <h1>I am the Menu 1-2 page</h1>
</template>

<style scoped></style>
