const logdown = require('logdown')()
const blocked = require('blocked')
const obstructed = require('../src/')

function msleep (s) {
  var start = Date.now()
  
  while((Date.now() - start) < s) {}
}

logdown.log('Listening for obstructed main thread')
obstructed((time) => {
  logdown.warn(`obstructed by ~${time}ms`)
}, {threshold: 10})

blocked((time) => {
  logdown.warn(`blocked by ~${time}ms`)
}, {threshold: 10})


setTimeout(() => {
  logdown.log('Blocking main thread')
  var start = Date.now()
  msleep(20)
  logdown.log(`Releasing main thread. *${Date.now() - start}ms* blocked.`)
}, 500)
