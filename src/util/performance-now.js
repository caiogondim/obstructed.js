// Code originally from https://github.com/myrne/performance-now/blob/master/src/performance-now.coffee

if ((typeof performance !== 'undefined') && performance.now) {
  module.exports = performance.now
} else if (typeof process !== 'undefined' && process.hrtime) {
  let hrtime = process.hrtime
  let getNanoSeconds = () => {
    let hr = hrtime()
    return (hr[0] * 1e9 + hr[1])
  }
  let loadTime = getNanoSeconds()

  module.exports = () => {
    return (getNanoSeconds() - loadTime) / 1e6
  }
} else if (Date.now) {
  let loadTime = Date.now()
  module.exports = () => {
    return (Date.now() - loadTime)
  }
} else {
  loadTime = new Date().getTime()
  module.exports = () => {
    return ((new Date()).getTime() - loadTime)
  }
}
