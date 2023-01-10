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

    <MenuItem
      v-for="subMenu in menu?.children"
      :key="subMenu.id"
      :menu="subMenu"
      :collapse="collapse"
    />
  </ElSubMenu>
  <ElMenuItem v-else :index="menu.path" @click="handleClick(menu)">
    <ElIcon v-if="menu.icon">
      <NuxtIcon :name="menu.icon" />
    </ElIcon>
    <span>{{ menu.name }}</span>
  </ElMenuItem>
</template>

<style scoped></style>
