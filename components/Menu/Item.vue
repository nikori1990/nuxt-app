<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import type { Menu } from '@/types/menu'
import type { Tag } from '@/types/tag'

interface Props {
  menu: Menu
  collapse?: boolean
}

defineProps<Props>()

const pageStore = usePageStore()
const router = useRouter()

const handleClick = (menu: Menu) => {
  const tag: Tag = {
    name: menu.name,
    path: menu.path,
    icon: menu.icon,
    closable: true,
  }
  pageStore.addTag(tag)
  router.push({ path: menu.path })
}
</script>

<template>
  <ElSubMenu v-if="menu?.children?.length" :index="menu.path">
    <template #title>
      <ElIcon v-if="menu.icon">
        <NuxtIcon :name="menu.icon" />
      </ElIcon>
      <span>{{ menu.name }}</span>
    </template>

    <MenuItem v-for="subMenu in menu?.children" :key="subMenu.id" :menu="subMenu" :collapse="collapse" />
  </ElSubMenu>
  <ElMenuItem v-else :index="menu.path" @click="handleClick(menu)">
    <ElIcon v-if="menu.icon" class="z-10">
      <NuxtIcon :name="menu.icon" />
    </ElIcon>
    <span class="z-10">{{ menu.name }}</span>
  </ElMenuItem>
</template>

<style scoped lang="scss">
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

.el-menu--vertical {
  .el-menu-item {
    position: relative;

    &:hover {
      background-color: transparent;

      &::after {
        @include bgStyle(var(--el-color-info-light-9));
      }
    }
  }

  .el-menu-item.is-active {
    &::after {
      @include bgStyle(var(--el-color-primary-light-9));
    }
  }
}
</style>
