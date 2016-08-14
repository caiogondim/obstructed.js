const tap = require('tap')
const logdown = require('logdown')
const msleep = require('msleep')
const obstructed = require('../src/index')

const debugMsleep = logdown({prefix: 'msleep'})

tap.test('should run callback if main thread is obstructed', (test) => {
  const obstructedTimer = obstructed((time) => {
    clearInterval(obstructedTimer)

    test.end()
  })

  console.log(`:`)
  debugMsleep.log('blocking thread')
  msleep(500)
  debugMsleep.log('releasing thread')
})
