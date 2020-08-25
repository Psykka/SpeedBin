const { Schema, model } = require('mongoose')

const document = new Schema({
  _id: String,
  code: { type: String, required: true },
  createAt: { type: Date, default: Date, index: { expires: '48h' }}
}, { versionKey: false })

module.exports = model('Codes', document)
