<script setup lang="ts">
import { NDropdown } from 'naive-ui'
import { LocaleObject } from 'vue-i18n-routing'

const { locale, setLocale, locales } = useI18n()

const localeName = computed<string>(() => {
  const find = (locales.value as LocaleObject[]).find(l => l.code === locale.value)
  if (find)
    return find.name ?? ''
  return ''
})

// console.log('localeName', localeName)

const handleCommand = (command: string) => {
  // locale.value = command
  setLocale(command) // recommended 推荐
  // console.log('switchLocalePath', switchLocalePath)
}

const handleSelect = function (key: string | number) {
  console.log('key', key)
}

const options = (locales.value as LocaleObject[]).map((l) => {
  const o = {
    label: l.name,
    key: l.code,
  }
  return o
})
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
            <ElDropdownItem
              v-for="l in (locales as LocaleObject[])" :key="l.code" :class="{ active: locale === l.code }"
              :command="l.code"
            >
              {{ l.name }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <!-- <NDropdown :options="options" @select="handleSelect">
        <div class="flex items-center language" style="cursor:pointer">
          <Icon name="ion-language" size="20" />
          <span class="text-size-3 font-bold">{{ localeName }}</span>
          <Icon name="ep-caret-bottom" />
        </div>
      </NDropdown> -->
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.language {
  color: var(--el-text-color-primary);

  .active {
    background-color: #efefef;
    color: var(--el-color-primary);
  }
}

.language:hover {
  color: var(--el-color-primary);
}

:deep(.el-dropdown-menu__item) {
  margin: 5px;
}

:deep(.el-dropdown-menu__item.active) {
  background-color: var(--el-dropdown-menuItem-hover-fill);
  color: var(--el-color-primary);
}
</style>
