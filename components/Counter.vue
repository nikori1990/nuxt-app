<script setup lang="ts">
const { count } = useCount()
</script>

<template>
  <ElInputNumber v-model="count" :min="1" :max="10" />
</template>
