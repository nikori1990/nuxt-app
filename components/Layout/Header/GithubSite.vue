<script setup>
function goGithub() {
  window.open('https://github.com/nikori1990/nuxt-app')
}
</script>

<template>
  <div class="flex items-center">
    <Icon name="mdi-github" size="20" style="cursor:pointer" @click="goGithub" />
  </div>
</template>
