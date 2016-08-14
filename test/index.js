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

  console.log(':')
  debugMsleep.log('blocking thread')
  msleep(110)
  debugMsleep.log('releasing thread')
})

tap.test('should not run callback if main thread is obstructed but threshold is higher', (test) => {
  let didCallbackRun = false

  const obstructedTimer = obstructed((time) => {
    didCallbackRun = true
  }, {threshold: 100})

  console.log(':')
  debugMsleep.log('blocking thread')
  msleep(50)
  debugMsleep.log('releasing thread')

  setTimeout(() => {
    clearInterval(obstructedTimer)
    test.ok(!didCallbackRun)
    test.end()
  }, 100)
})
