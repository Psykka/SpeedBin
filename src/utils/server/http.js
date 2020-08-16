const { createServer } = require('http')

const httpServer = (app) => {
  return createServer({}, app)
}

module.exports = httpServer
