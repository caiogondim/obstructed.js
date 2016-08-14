// obstructed.js should be compatible with blocked.

// blocked package tests ported to TAP
// https://github.com/tj/node-blocked/blob/master/test/test.js

const tap = require('tap')
const blocked = require('../src/index')

tap.test('should accept the new options param', function (test) {
  const interval = setInterval(function () { new Array(10000000).join('a') }, 500)

  const blockedInterval = blocked(function () {
    clearInterval(blockedInterval)
    clearInterval(interval)
    test.end()
  }, {threshold: 1})
})

tap.test('should not break backwards compatibility', function (test) {
  const interval = setInterval(function () { new Array(10000000).join('a') }, 500)

  const blockedInterval = blocked(function () {
    clearInterval(blockedInterval)
    clearInterval(interval)
    test.end()
  })
})
