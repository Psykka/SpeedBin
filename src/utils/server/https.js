const { createServer } = require('https')

const httpsServer = (app, config) => {
  return createServer(config, app)
}

module.exports = httpsServer
