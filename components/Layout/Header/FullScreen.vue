<script setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <div class="flex items-center">
    <Icon v-if="isFullscreen" name="ant-design:fullscreen-exit-outlined" size="20" @click="toggle" />
    <Icon v-else name="ant-design:fullscreen-outlined" size="20" @click="toggle" />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  &:hover {
    color: var(--el-color-primary)
  }
}
</style>
