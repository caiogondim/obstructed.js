const obstructed = require('../src/index')

obstructed(() => {
  console.log('main thread was obstructed')
})
