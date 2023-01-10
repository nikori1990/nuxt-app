<script setup>
const { locale, setLocale } = useI18n()
// const switchLocalePath = useSwitchLocalePath()

const handleCommand = (command) => {
  // locale.value = command
  setLocale(command) // recommended 推荐
  // switchLocalePath(command)
}
</script>

<template>
  <div class="flex items-center">
    <!-- <Icon class="mr-2" name="ion-language" size="20" style="cursor:pointer" /> -->
    <!-- <NuxtLink :to="switchLocalePath('en')" class="fr-2">
      English
    </NuxtLink> -->

    <ClientOnly>
      <ElDropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <Icon class="mr-2" name="ion-language" size="20" style="cursor:pointer" />
        </span>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem :disabled="locale === 'zh'" command="zh">
              {{ $t('chinese') }}
            </ElDropdownItem>
            <ElDropdownItem command="en" :disabled="locale === 'en'">
              {{ $t('english') }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ClientOnly>
  </div>
</template>
