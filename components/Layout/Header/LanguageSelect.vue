<script setup>
const { locale, setLocale, locales } = useI18n()

const localeName = computed(() => {
  return locales.value.find(l => l.code === locale.value).name
})

// console.log('localeName', localeName)

const handleCommand = (command) => {
  // locale.value = command
  setLocale(command) // recommended 推荐
  // switchLocalePath(command)
}
</script>

<template>
  <div class="flex items-center">
    <ClientOnly>
      <ElDropdown @command="handleCommand">
        <span class="el-dropdown-link flex items-center language">
          <Icon name="ion-language" size="20" style="cursor:pointer" />
          <span class="text-size-3 font-bold">{{ localeName }}</span>
          <Icon name="ep-caret-bottom" />
        </span>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem v-for="l in locales" :key="l.code" :disabled="locale === l.code" :command="l.code">
              {{ l.name }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.language{
  color: var(--el-text-color-primary)
}
.language:hover {
  color: var(--el-color-primary);
}
</style>
