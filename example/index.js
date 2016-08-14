const logdown = require('logdown')()
const msleep = require('msleep')
const obstructed = require('../src/')

logdown.log('Listening for obstructed main thread')
const obstructedTimer = obstructed((time) => {
  logdown.warn(`obstructed by ~${time}ms`)
  clearInterval(obstructedTimer)
}, {threshold: 10})

setTimeout(() => {
  logdown.log('Blocking main thread')
  var start = Date.now()
  msleep(100)
  logdown.log(`Releasing main thread. *${Date.now() - start}ms* blocked.`)
}, 500)
