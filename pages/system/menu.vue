<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
  layout: 'console',
  titleKey: 'pages.system.menu',
  icon: 'menu',
  closable: true,
})
</script>

<template>
  <h1>Menu - 菜单管理</h1>
</template>
