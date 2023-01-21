<script setup lang="ts">
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
// const colorMode = useColorMode()
// console.log('colorMode', colorMode)
// console.log(colorMode.preference)
</script>

<template>
  <ClientOnly>
    <div class="flex items-center mr-4">
      <Icon v-if="!$colorMode.unknown && 'dark' === $colorMode.value" name="ep-moon" size="20" @click="$colorMode.preference = 'light'" />
      <Icon v-if="!$colorMode.unknown && 'light' === $colorMode.value" name="ep-sunny" size="20" @click="$colorMode.preference = 'dark'" />
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  &:hover {
    color: var(--el-color-primary)
  }
}
</style>
