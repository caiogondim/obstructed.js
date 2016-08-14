const browserImplementation = require('./browser')
const nodeImplementation = require('./node')
const isBrowser = require('util/is-browser')

if (isBrowser()) {
  module.exports = browserImplementation
} else {
  module.exports = nodeImplementation
}
