self.addEventListener('install', (event) => {
  console.log(event)
})

self.addEventListener('fetch', (event) => {
  console.log('fetch', event)
})