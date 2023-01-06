<script setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <div class="flex items-center">
    <Icon v-show="isFullscreen" name="ant-design:fullscreen-exit-outlined" size="20" style="cursor:pointer" @click="toggle" />
    <Icon v-show="!isFullscreen" name="ant-design:fullscreen-outlined" size="20" style="cursor:pointer" @click="toggle" />
  </div>
</template>
