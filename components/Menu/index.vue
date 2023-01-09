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
      :collapse="collapse" class="menu" router :default-active="route.path" :collapse-transition="true"
      @open="handleOpen" @close="handleClose"
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

::v-deep .el-sub-menu {
    border: none;
    padding: 0 15px;
}

::v-deep .el-sub-menu__title {
  height: calc(var(--el-menu-sub-item-height) - 12px);
  line-height: calc(var(--el-menu-sub-item-height) - 10px);
  margin-top: 6px;

  &:hover {
    border-left: 4px solid var(--el-color-primary);
    border-radius: 4px;
  }
}

::v-deep .el-menu-item {
  height: calc(var(--el-menu-sub-item-height) - 12px);
  line-height: calc(var(--el-menu-sub-item-height) - 10px);
  margin-top: 6px;
}

::v-deep .el-menu-item.is-active {
  color: var(--el-menu-active-color);
  // background: var(--el-menu-hover-bg-color);
  background-color: var(--el-color-primary-light-9);
  border-left: 4px solid var(--el-color-primary);
  border-radius: 4px;
}

::v-deep .el-menu-item:hover {
  // background-color: var(--el-menu-hover-bg-color);
  background-color: var(--el-color-primary-light-9);
  border-left: 4px solid var(--el-color-primary);
  border-radius: 4px;
}
</style>
