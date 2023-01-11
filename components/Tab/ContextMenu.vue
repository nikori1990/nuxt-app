<script setup lang="ts">
import { NDropdown } from 'naive-ui'

const { contextMenu, hide } = useContextMenu()
console.log('ContextMenu - contextMenu', contextMenu.value)

function onClickoutside() {
  hide()
}

function handleSelect(key: string | number) {
  console.log('key', key)
  hide()
}

const options = [
  {
    label: '重新加载',
    key: 'jay gatsby',
  },
  {
    label: '关闭当前',
    key: 'daisy buchanan',
  },
  {
    label: '关闭其他',
    key: 'nick carraway',
  },
  {
    label: '关闭所有',
    key: 'others1',
  },
  {
    label: '页面全屏',
    key: 'fullscreen',
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
