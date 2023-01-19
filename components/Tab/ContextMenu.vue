<script setup lang="ts">
import { NDropdown, NIcon } from 'naive-ui'
import type { Component } from 'vue'
import { CircleClose, CircleCloseFilled, Close, FullScreen, Refresh, SwitchButton } from '@element-plus/icons-vue'

import { Icon } from '#components'

const { contextMenu, hide, closeAll, closeOthers, closeMe } = useContextMenu()

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
// console.log('layout', layout)
// console.log('isFullPage', isFullPage)

function handleSelect(key: string | number) {
  switch (key) {
    case 'fullscreen':
      setLayout('full-page')
      setPageLayout('full-page')
      break
    case 'exitFullScreen':
      setLayout('console')
      setPageLayout('console')
      break
    case 'closeAll':
      closeAll()
      break
    case 'closeOthers':
      closeOthers()
      break
    case 'closeMe':
      closeMe()
      break
    case 'refresh':
      break
  }
  hide()
}

const options = [
  {
    label: '重新加载',
    key: 'refresh',
    icon: renderIcon(Refresh),
  },
  {
    label: '关闭当前',
    key: 'closeMe',
    icon: renderIcon(Close),
  },
  {
    label: '关闭其他',
    key: 'closeOthers',
    icon: renderIcon(CircleClose),
  },
  {
    label: '关闭所有',
    key: 'closeAll',
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
