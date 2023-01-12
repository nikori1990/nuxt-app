export function useLayout() {
  const layout = useState<LayoutKey>('layout', () => 'console')

  function setLayout(layoutKey: LayoutKey) {
    layout.value = layoutKey
  }

  return {
    layout,
    setLayout,
  }
}
