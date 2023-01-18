export function useMenu() {
  const { t } = useI18n()
  function getLocaleMenuName(path: string) {
    const { locale } = useI18n()

    const langKey = `pages${path.replaceAll(`/${locale.value}`, '').replaceAll('/', '.')}`
    let result = t(langKey, ' ')
    if (result === ' ')
      result = t(`${langKey}.index`)
    return result
  }

  return {
    getLocaleMenuName,
  }
}
