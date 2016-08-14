const performanceNow = require('./util/performance-now')

const obstructed = (callback, opts = {threshold: 10}) => {
  let lastExecuted = performanceNow()
  const timeToCheckMainThread = 100

  return setInterval(() => {
    const delta = performanceNow() - lastExecuted

    if ((delta - timeToCheckMainThread) > opts.threshold) {
      callback(Math.round(delta - timeToCheckMainThread))
    }

    lastExecuted = performanceNow()
  }, timeToCheckMainThread)
}

module.exports = obstructed
