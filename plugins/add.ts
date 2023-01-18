export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('this global middleware was added in a plugin')
    // const { locale } = useI18n()
    // console.log('locale', locale.value)
  }, { global: true })

  addRouteMiddleware('named-test', () => {
    // console.log('this named middleware was added in a plugin')
  })
})
