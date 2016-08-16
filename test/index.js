var tap = require('tap')
var logdown = require('logdown')
var msleep = require('msleep')
var obstructed = require('../src/index')

var debugMsleep = logdown({prefix: 'msleep'})

tap.test('should run callback if main thread is obstructed', function (test) {
  var obstructedTimer = obstructed(function (time) {
    clearInterval(obstructedTimer)

    test.end()
  })

  console.log(':')
  debugMsleep.log('blocking thread')
  msleep(110)
  debugMsleep.log('releasing thread')
})

tap.test('should not run callback if main thread is obstructed but threshold is higher', function (test) {
  var didCallbackRun = false

  var obstructedTimer = obstructed(function (time) {
    didCallbackRun = true
  }, {threshold: 100})

  console.log(':')
  debugMsleep.log('blocking thread')
  msleep(50)
  debugMsleep.log('releasing thread')

  setTimeout(function () {
    clearInterval(obstructedTimer)
    test.ok(!didCallbackRun)
    test.end()
  }, 100)
})
