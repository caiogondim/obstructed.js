const msleep = require('msleep')
const obstructed = require('../src/index')

obstructed((t) => {
  console.log(`main thread was obstructed for about ${t}ms`)
})

console.log(Date.now())
msleep(1000)
console.log(Date.now())
