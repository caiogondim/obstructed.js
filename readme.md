<img src="http://rawgit.com/caiogondim/obstructed.js/master/img/logo.svg">

# obstructed.js
[![npm version](https://badge.fury.io/js/obstructed.svg)](https://badge.fury.io/js/obstructed) <img src="http://travis-ci.org/caiogondim/obstructed.js.svg?branch=master" alt="Travis CI"> [![codecov](https://codecov.io/gh/caiogondim/obstructed.js/branch/master/graph/badge.svg)](https://codecov.io/gh/caiogondim/obstructed.js) <img src="https://david-dm.org/caiogondim/obstructed.js/status.svg" alt="dependencies status">

obstructed.js checks if the main thread is busy, executing a callback whenever
it happens. It runs on the browser and on the server. The API is compatible with
[blocked](https://github.com/tj/node-blocked).

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

## Installation

### Bundler

To use the library, install it through [npm](https://npmjs.com)

```shell
npm install --save obstructed
```

To port it to Browser or any other (non CJS) environment, use your favorite CJS
bundler. No favorite yet? Try: [Browserify](http://browserify.org/),
[Webmake](https://github.com/medikoo/modules-webmake) or
[Webpack](http://webpack.github.io/)

### Drop-in

If using a bunlder is not your thing, there are two files with UMD (Universal
Module Definition) under `dist/` folder, one of them already minified. Just
reference it on your browser (drop it) and use it.

```html
<script src="dist/obstructed.min.js"></script>
<script>
  const timer = window.obstructed(function(ms) {
    console.log('Main thread was blocked for about ' + ms + 'ms')
  })
</script>
```

## Credits
- Icon by Edward Boatman
- [blocked](https://github.com/tj/node-blocked)

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
