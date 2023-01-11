<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMenuStore } from '@/stores/menu'

interface Props {
  collapse: boolean
}

withDefaults(defineProps<Props>(), { collapse: false })

const route = useRoute()
const menuStore = useMenuStore()

menuStore.getMenuList()
const { menuList } = storeToRefs(menuStore)
</script>

<template>
  <ElScrollbar>
    <ElMenu :collapse="collapse" class="menu" router :default-active="route.path" :collapse-transition="true">
      <MenuItem v-for="menu in menuList" :key="menu.id" :menu="menu" :collapse="collapse" />
    </ElMenu>
  </ElScrollbar>
</template>

<style lang="scss" scoped>
.menu {
  border-right: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
