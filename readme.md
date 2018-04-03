<img src="http://rawgit.com/caiogondim/obstructed.js/master/img/logo.svg">

# obstructed
[![npm version](https://badge.fury.io/js/obstructed.svg)](https://badge.fury.io/js/obstructed) [![codecov](https://codecov.io/gh/caiogondim/obstructed.js/branch/master/graph/badge.svg)](https://codecov.io/gh/caiogondim/obstructed.js)

obstructed.js checks if the main thread is busy, executing a callback whenever
it happens. It runs on the browser and on the server. The API is compatible with
[blocked](https://github.com/tj/node-blocked).

## Installation

```shell
npm install --save obstructed
```

## Usage

```js
const timer = obstructed(function(ms) {
  console.log('Main thread was blocked for about ' + ms + 'ms')
})
```

Use the returned timer and `clearInterval` on it to stop the lib on checking if
the main thread is blocked.

```js
// Uses the previously defined `timer`
clearInterval(timer)
```

## Credits
- Icon by Edward Boatman
- [blocked](https://github.com/tj/node-blocked)

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
