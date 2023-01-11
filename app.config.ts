export default defineAppConfig({
  head: {
    charset: 'utf-8',
    viewport: 'width=500, initial-scale=1',
    title: 'My App',
    meta: [
      // <meta name="description" content="My amazing site">
      { name: 'description', content: 'My amazing site.' },
    ],
  },
  pageTransition: { name: 'page', mode: 'out-in' },
})
