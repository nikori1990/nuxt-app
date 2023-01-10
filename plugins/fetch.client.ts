export default defineNuxtPlugin(() => {
  // console.log('$fetch', $fetch)
  const { path } = useRoute()
  // console.log(route.path)
  $fetch = $fetch.create({
    onResponseError({ request, response, options }) {
      console.log('request', request)
      console.log('status', response.status)
      console.log('body', response.body)
      console.log('options', options)
      if (response.status === 403 || response.status === 500)
        // console.log('path', path)
        // console.log('route', route)
        navigateTo(`/login?redirect=${path}`)
    },
  })
})
