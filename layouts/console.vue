<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const isCollapse = ref(false)
const asideClass = computed(() => {
  if (isCollapse.value)
    return 'layout-aside-collapse'
  return 'layout-aside'
})

const pageStore = usePageStore()
const { title } = storeToRefs(pageStore)

useHead({
  title,
})
</script>

<template>
  <ElContainer class="common-layout">
    <ElHeader class="layout-header">
      <div class="header-left">
        <div class="logo">
          <a class="logo-img" href="/">By-Admin</a>
        </div>
        <div class="collapse-box">
          <Icon v-show="!isCollapse" name="ep-fold" @click="isCollapse = !isCollapse" />
          <Icon v-show="isCollapse" name="ep-expand" @click="isCollapse = !isCollapse" />
        </div>
        <Breadcrumb />
      </div>
      <div class="header-right">
        <LayoutHeaderThemeMode class="mr-4" />
        <LayoutHeaderGithubSite class="mr-4" />
        <LayoutHeaderFullScreen class="mr-4" />
        <LayoutHeaderLanguageSelect class="mr-4" />
        <LayoutHeaderAvator />
      </div>
    </ElHeader>

    <ElContainer class="layout-main">
      <ElAside :class="asideClass" class="h-full">
        <Menu :collapse="isCollapse" />
      </ElAside>

      <ElContainer class="page">
        <Tab />
        <ElMain class="p-[15px] bg-gray-100 dark:bg-gray-800">
          <slot />
        </ElMain>
        <ElFooter class="layout-footer">
          Footer
        </ElFooter>
      </ElContainer>
    </ElContainer>
  </ElContainer>
</template>

<style lang="scss" scoped>
  .common-layout {
      height: 100%;
      overflow: hidden;
  }

  .layout-header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--el-border-color-light);
      justify-content: space-between;

      .logo {
          display: flex;
          align-items: center;
          width: 200px;
          height: 100%;

          .logo-img {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
              color: var(--el-color-primary);
              cursor: pointer;
          }
      }
      .header-left {
        display: flex;
        align-items: center;
      }

      .header-right {
        display: flex;
        align-items: center;
        .header-icon {
          cursor: pointer;
          margin-right: 10px;
        }
      }
  }

  .layout-aside {
      width: 220px;
      height: 100%;
      border-right: 1px solid var(--el-border-color-light);
      transition: width 0.3s ease;
  }

  .layout-aside-collapse {
      width: 60px;
      height: 100%;
      border-right: 1px solid var(--el-border-color-light);
      transition: width 0.3s ease;
  }

  .layout-main {
      height: 100%;
      overflow: auto;
  }

  .collapse-box {
      display: flex;
      margin-right: 20px;
      font-size: 20px;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      &:hover {
          color: var(--el-color-primary);
      }
  }

  .page-tags {
      display: flex;
      width: 100%;
      height: 40px;
      padding: 8px 15px;
      box-sizing: border-box;
      align-items: center;

      .tag {
          padding: 0 10px;
          margin-right: 10px;
      }
  }

  .layout-footer {
      display: flex;
      align-items: center;
      height: 40px;
      color: #fff;
      background: var(--el-color-primary);
  }
</style>
