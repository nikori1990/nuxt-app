<script setup>
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const handleCommand = (command) => {
  locale.value = command
  // switchLocalePath(command)
}
</script>

<template>
  <div class="flex items-center">
    <!-- <Icon class="mr-2" name="ion-language" size="20" style="cursor:pointer" /> -->
    <!-- <NuxtLink :to="switchLocalePath('en')">
      English
    </NuxtLink> -->

    <ClientOnly>
      <ElDropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <Icon class="mr-2" name="ion-language" size="20" style="cursor:pointer" />
        </span>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem command="zh">
              {{ $t('chinese') }}
            </ElDropdownItem>
            <ElDropdownItem command="en">
              {{ $t('english') }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ClientOnly>
  </div>
</template>
