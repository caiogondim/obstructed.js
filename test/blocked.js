// obstructed.js should be compatible with blocked.

// blocked package tests ported to TAP
// https://github.com/tj/node-blocked/blob/master/test/test.js

var tap = require('tap')
var blocked = require('../src/index')

tap.test('should accept the new options param', function (test) {
  var interval = setInterval(function () { new Array(10000000).join('a') }, 500)

  var blockedInterval = blocked(function () {
    clearInterval(blockedInterval)
    clearInterval(interval)
    test.end()
  }, {threshold: 1})
})

tap.test('should not break backwards compatibility', function (test) {
  var interval = setInterval(function () { new Array(10000000).join('a') }, 500)

  var blockedInterval = blocked(function () {
    clearInterval(blockedInterval)
    clearInterval(interval)
    test.end()
  })
})
