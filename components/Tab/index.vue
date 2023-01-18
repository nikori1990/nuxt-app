<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { storeToRefs } from 'pinia'
import type { Tag } from '@/types/tag'

import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { tagList, titleKey } = storeToRefs(pageStore)

const { t } = useI18n()

const router = useRouter()

const clickTab = (tab: TabsPaneContext, event: Event) => {
  console.log('tab-click', tab, event)
}

const removeTab = (tabName: string | number) => {
  const newPath = pageStore.removeTag(tabName)
  if (newPath !== '')
    router.push(newPath)
}

const changeTab = (tabName: string | number) => {
  console.log('tab-change', tabName)
  tagList.value.forEach((tag) => {
    if (tag.name === tabName) {
      const localePath = useLocalePath()
      const path = localePath(tag.path)
      router.push({ path })
    }
  })
}

const { setX, setY, setTag, show } = useContextMenu()

const handleContextMenu = (v: Tag, e: MouseEvent) => {
  const { clientX, clientY } = e
  setX(clientX)
  setY(clientY)
  setTag(v)
  show()
}
</script>

<template>
  <div>
    <ClientOnly>
      <ElTabs
        v-model="titleKey"
        type="card"
        @tab-click="clickTab"
        @tab-remove="removeTab"
        @tab-change="changeTab"
      >
        <ElTabPane
          v-for="item in tagList"
          :key="item.path"
          :closable="item?.closable"
          :label="item.name"
          :name="item.name"
        >
          <template #label>
            <div class="flex items-center" @contextmenu.prevent="handleContextMenu(item, $event)">
              <ElIcon v-if="item.icon" class="mr-1">
                <NuxtIcon :name="item.icon" />
              </ElIcon>
              {{ t(item.name) }}
            </div>
          </template>
        </ElTabPane>
      </ElTabs>
      <TabContextMenu />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
  :deep(.el-tabs) {
      .el-tabs__header {
          margin: 0;
          display: flex;
          align-items: center;
      }

      .el-tabs__nav {
          border: none;
          display: flex;
      }

      .el-tabs__item {
          height: 30px;
          margin: 5px;
          line-height: 28px;
          border: 1px solid var(--el-border-color-light) !important;
          border-radius: var(--el-border-radius-base);
          display: flex;
          align-items: center;
      }

      .el-tabs__item:not(.is-active):hover {
          color: var(--el-color-primary);
          background-color: var(--el-color-primary-light-9);
          border-color: var(--el-color-primary-light-7);
          outline: none;
      }

      .el-tabs__item.is-active {
          color: #fff;
          background: var(--el-color-primary);

          &:hover {
              background: var(--el-color-primary-light-3);
          }
      }
  }
</style>
