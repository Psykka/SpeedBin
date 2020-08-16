const express = require('express')
const { connect } = require('mongoose')
const { join } = require('path')

const app = express()

connect(process.env.MONGO_URI || '', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  err ? console.error('[ERROR] Error on connect to MongoDB. Erro:', err.stack) : console.info('[LOG] MongoDB Connected!')
})

app
  .use(express.text({ limit: '5mb' }))
  .use(express.static(join(__dirname, '/public')))
  .use(require('./routes'))

module.exports = app
