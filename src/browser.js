const obstructed = (callback, opts = {threshold: 10}) => {
  let lastExecuted = Date.now()
  const timeToCheckMainThread = 100

  return setInterval(() => {
    const delta = Date.now() - lastExecuted

    if ((delta - timeToCheckMainThread) > opts.threshold) {
      callback(delta - timeToCheckMainThread)
    }

    lastExecuted = Date.now()
  }, timeToCheckMainThread)
}

module.exports = obstructed
