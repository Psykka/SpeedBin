const PORT = process.env.PORT || 8080
const app = require('./src/speedbin')
const { servers } = require('./src/utils')
const { readFileSync } = require('fs')

let serverType = 'http'
const options = {}

try {
  const key = readFileSync('ssl/key.key', 'utf8')
  const cert = readFileSync('ssl/cert.cert', 'utf8')

  options.key = key
  options.cert = cert
  serverType = 'https'
} catch (e) {
  console.warn('[WARN] SSL certificate not found, starting HTTP server in unsecured version')
}

const server = servers[serverType]

server(app, options)
  .listen(PORT, () => {
    console.log('[LOG] SpeedBin is ready, listen port:', PORT)
  })
