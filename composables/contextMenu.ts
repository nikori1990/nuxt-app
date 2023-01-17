import type { Tag } from '@/types/tag'
import { usePageStore } from '@/stores/page'

export function useContextMenu() {
  const pageStore = usePageStore()
  const router = useRouter()

  const contextMenu = useState('contextMenu', () => {
    return {
      isShow: false,
      x: 0,
      y: 0,
      tag: <Tag>{},
    }
  })

  function show() {
    contextMenu.value.isShow = true
  }

  function hide() {
    contextMenu.value.isShow = false
  }

  function setX(x: number) {
    contextMenu.value.x = x
  }

  function setY(y: number) {
    contextMenu.value.y = y
  }

  function setTag(tag: Tag) {
    contextMenu.value.tag = tag
  }

  function closeAll() {
    pageStore.closeAll()
    router.push('/dashboard')
  }

  function closeOthers() {
    const path = contextMenu.value.tag.path
    pageStore.closeOthers(path)
    router.push(path)
  }

  function closeMe() {
    const path = contextMenu.value.tag.path
    const newPath = pageStore.removeTag(path)
    if (newPath !== '')
      router.push(newPath)
  }

  return {
    contextMenu,
    show,
    hide,
    setX,
    setY,
    setTag,
    closeOthers,
    closeAll,
    closeMe,
  }
}
