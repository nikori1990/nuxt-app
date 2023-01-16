<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
  layout: 'console',
  title: '加载',
})
</script>

<template>
  <div class="flex-col w-full">
    <h1>Loading</h1>
  </div>
</template>

<style scoped></style>
