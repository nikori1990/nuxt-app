export default defineNuxtRouteMiddleware((from, to) => {
  console.log('from', from)
  console.log('to', to)
  console.log('Heading to', to.path, 'but I think we should go somewhere else...')
  // return '/console'
})
