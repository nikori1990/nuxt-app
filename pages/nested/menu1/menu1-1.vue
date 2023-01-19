<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
  layout: 'console',
  titleKey: 'pages.nested.menu1.menu1-1',
  icon: 'nested',
  closable: true,
})
</script>

<template>
  <div class="flex-col w-full">
    <h1>Menu 1-1</h1>
  </div>
</template>

<style scoped></style>
