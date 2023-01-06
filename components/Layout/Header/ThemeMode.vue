<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div>
    <Icon v-show="isDark" name="ep-moon" size="20" style="cursor:pointer" @click="toggleDark()" />
    <Icon v-show="!isDark" name="ep-sunny" size="20" style="cursor:pointer" @click="toggleDark()" />
  </div>
</template>
