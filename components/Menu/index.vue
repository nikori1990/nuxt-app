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

@mixin bgStyle($color) {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    right: 5px;
    bottom: 2px;
    pointer-events: none;
    border-radius: 4px;
    background-color: $color;
    border-left: 4px solid var(--el-color-primary);
}

// ::v-deep .el-sub-menu {
//   border: none;
//   padding: 0 15px;
// }

// ::v-deep .el-sub-menu__title {
//   height: calc(var(--el-menu-sub-item-height) - 12px);
//   line-height: calc(var(--el-menu-sub-item-height) - 10px);
//   margin-top: 6px;

//   &:hover {
//     border-left: 4px solid var(--el-color-primary);
//     border-radius: 4px;
//   }
// }

// ::v-deep .el-menu-item {
//   height: calc(var(--el-menu-sub-item-height) - 12px);
//   line-height: calc(var(--el-menu-sub-item-height) - 10px);
//   margin-top: 6px;
// }

// ::v-deep .el-menu-item.is-active {
//   color: var(--el-menu-active-color);
//   // background: var(--el-menu-hover-bg-color);
//   background-color: var(--el-color-primary-light-9);
//   border-left: 4px solid var(--el-color-primary);
//   border-radius: 4px;
// }

// ::v-deep .el-menu-item:hover {
//   // background-color: var(--el-menu-hover-bg-color);
//   background-color: var(--el-color-primary-light-9);
//   border-left: 4px solid var(--el-color-primary);
//   border-radius: 4px;
// }
</style>
