var performanceNow = require('performance-now')

var obstructed = function (callback, opts) {
  opts = opts || {}
  opts.threshold = opts.threshold || 10

  var lastExecuted = performanceNow()
  var timeToCheckMainThread = 100

  return setInterval(function () {
    var delta = performanceNow() - lastExecuted

    if ((delta - timeToCheckMainThread) > opts.threshold) {
      callback(Math.round(delta - timeToCheckMainThread))
    }

    lastExecuted = performanceNow()
  }, timeToCheckMainThread)
}

module.exports = obstructed
