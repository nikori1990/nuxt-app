<script setup>
function goGithub() {
  window.open('https://github.com/nikori1990/nuxt-app')
}
</script>

<template>
  <Icon name="mdi-github" size="20" style="cursor:pointer" @click="goGithub" />
</template>
