export function useContextMenu() {
  const contextMenu = useState('contextMenu', () => {
    return {
      isShow: false,
      x: 0,
      y: 0,
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

  return {
    contextMenu,
    show,
    hide,
    setX,
    setY,
  }
}
