<script setup lang="ts">
import { ElDivider, ElDropdown, ElDropdownItem, ElDropdownMenu, ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

definePageMeta({
  layout: 'default',
  // middleware: 'redirect-console',
})

const route = useRoute()

const { locale } = useI18n()

const handleCommand = (command: string) => {
  locale.value = command
  // ElMessage(`click on item ${command}`)
}
</script>

<template>
  <div>
    <h1 class="text-yellow-300">
      Index Page
    </h1>

    <ElDivider />

    <div>{{ $myPlugin() }}</div>

    <ElDivider />

    <h3>token: {{ userStore.token }}</h3>

    <ElDivider />

    <div>
      <ClientOnly>
        <ElDropdown @command="handleCommand">
          <span class="el-dropdown-link">
            Language
            <Icon name="ep-arrow-down" />
          </span>
          <template #dropdown>
            <ElDropdownMenu>
              <ElDropdownItem command="en_US">
                en_US
              </ElDropdownItem>
              <ElDropdownItem command="zh_CN">
                zh_CN
              </ElDropdownItem>
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </ClientOnly>
      <p>{{ $t('hello', { name: 'Nuxt3' }, 'hahaha') }}</p>
      <p>{{ $t('haha', { name: 'Nuxt3' }, 'hahaha') }}</p>
    </div>

    <ElDivider />

    <NuxtLink to="/" class="n-link-base">
      Home
    </NuxtLink>
    <NuxtLink to="/forbidden" class="text-light-blue-400">
      Forbidden
    </NuxtLink>
    <NuxtLink to="/redirect" class="n-link-base">
      Redirect
    </NuxtLink>

    <div class="text-center p-4 op-50">
      Current route: <code>{{ route.path }}</code>
    </div>
  </div>
</template>

<style>
.el-dropdown-link {
  cursor: pointer;
  /* color: var(--el-color-primary); */
  display: flex;
  align-items: center;
}
</style>
