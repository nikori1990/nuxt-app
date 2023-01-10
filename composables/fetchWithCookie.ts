import type { H3Event } from 'h3'

export const fetchWithCookie = async (event: H3Event, url: string) => {
  const res = await $fetch.raw(url, {
    onResponseError({ request, response, options }) {
      console.log('[fetch response error]', request, response, options)
    },
  })
  const cookies = (res.headers.get('set-cookie') || '').split(',')
  console.log('cookies', cookies)
  for (const cookie of cookies)
    appendHeader(event, 'set-cookie', cookie)

  return res._data
}
