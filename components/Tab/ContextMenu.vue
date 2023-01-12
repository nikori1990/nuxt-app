<script setup lang="ts">
import { NDropdown, NIcon } from 'naive-ui'
import type { Component } from 'vue'
import { CircleClose, CircleCloseFilled, Close, FullScreen, Refresh, SwitchButton } from '@element-plus/icons-vue'
import { usePageStore } from '@/stores/page'

const { contextMenu, hide } = useContextMenu()

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

function onClickoutside() {
  hide()
}

const { layout, setLayout } = useLayout()
const isFullPage = computed(() => layout.value === 'full-page')
console.log('layout', layout)
console.log('isFullPage', isFullPage)

function handleSelect(key: string | number) {
  switch (key) {
    case 'fullscreen':
      // pageStore.setLayout('full-page')
      setLayout('full-page')
      setPageLayout('full-page')
      break
    case 'exitFullScreen':
      // pageStore.setLayout('console')
      setLayout('console')
      setPageLayout('console')
      break
  }
  hide()
}

const options = [
  {
    label: '重新加载',
    key: 'jay gatsby',
    icon: renderIcon(Refresh),
  },
  {
    label: '关闭当前',
    key: 'daisy buchanan',
    icon: renderIcon(Close),
  },
  {
    label: '关闭其他',
    key: 'nick carraway',
    icon: renderIcon(CircleClose),
  },
  {
    label: '关闭所有',
    key: 'others1',
    icon: renderIcon(CircleCloseFilled),
  },
  {
    label: '页面全屏',
    key: 'fullscreen',
    icon: renderIcon(FullScreen),
    show: !isFullPage.value,
  },
  {
    label: '退出全屏',
    key: 'exitFullScreen',
    icon: renderIcon(SwitchButton),
    show: isFullPage.value,
  },
]
</script>

<template>
  <NDropdown
    placement="bottom-start"
    trigger="manual"
    :x="contextMenu.x"
    :y="contextMenu.y"
    :options="options"
    :show="contextMenu.isShow"
    :on-clickoutside="onClickoutside"
    @select="handleSelect"
  />
</template>
