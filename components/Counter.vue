<script setup lang="ts">
import { ElInputNumber } from 'element-plus'
const { count } = useCount()
</script>

<template>
  <ElInputNumber v-model="count" :min="1" :max="10" />
</template>
