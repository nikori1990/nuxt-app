<script setup lang="ts">
import type { Menu } from '@/types/menu'

interface Props {
  menu: Menu
  collapse?: boolean
}

defineProps<Props>()

const router = useRouter()
const { getLocaleMenuName } = useMenu()

const localePath = useLocalePath()

const handleClick = (menu: Menu) => {
  const path = localePath(menu.path)
  router.push({ path })
}
</script>

<template>
  <ElSubMenu v-if="menu?.children?.length" :index="localePath(menu.path)">
    <template #title>
      <ElIcon v-if="menu.icon">
        <NuxtIcon :name="menu.icon" />
      </ElIcon>
      <span>{{ getLocaleMenuName(menu.path) }}</span>
    </template>

    <MenuItem v-for="subMenu in menu?.children" :key="subMenu.id" :menu="subMenu" :collapse="collapse" />
  </ElSubMenu>
  <ElMenuItem v-else :index="localePath(menu.path)" @click="handleClick(menu)">
    <ElIcon v-if="menu.icon" class="z-10">
      <NuxtIcon :name="menu.icon" />
    </ElIcon>
    <span class="z-10">{{ getLocaleMenuName(menu.path) }}</span>
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
        @include bgStyle(var(--el-color-primary-light-9));
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
