export const myFetch = async (url: string) => {
  const res = await $fetch.raw(url, {
    onResponseError({ request, response, options }) {
      console.log('[fetch response error]', request, response, options)
    },
  })
  return res._data
}
