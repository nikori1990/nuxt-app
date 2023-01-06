<script setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <Icon v-if="isFullscreen" name="ant-design:fullscreen-exit-outlined" size="20" style="cursor:pointer" @click="toggle" />
  <Icon v-else name="ant-design:fullscreen-outlined" size="20" style="cursor:pointer" @click="toggle" />
</template>
