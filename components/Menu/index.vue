<script setup lang="ts">
import { ElMenu, ElScrollbar } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useMenuStore } from '@/stores/menu'

withDefaults(defineProps<Props>(), { collapse: false })

const menuStore = useMenuStore()

interface Props {
  collapse: boolean
}

const route = useRoute()

menuStore.getMenuList()
const { menuList } = storeToRefs(menuStore)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <ElScrollbar>
    <ElMenu
      :collapse="collapse"
      class="menu"
      router
      :default-active="route.path"
      :collapse-transition="true"
      @open="handleOpen"
      @close="handleClose"
    >
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
