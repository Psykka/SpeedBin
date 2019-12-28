const { Schema, model } = require('mongoose');

const document = new Schema({
  _id: String,
  code: { type: String, required: true },
}, { versionKey: false })

module.exports = model('Codes', document);