const express = require('express')
const { join } = require('path')

const app = express()

app
  .use(express.text({ limit: '5mb' }))
  .use(express.static(join(__dirname, '/public')))
  .use(require('./routes'))

module.exports = app
