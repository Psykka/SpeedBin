const { Schema, model } = require('mongoose');

const document = new Schema({
  _id:{ type: String, default: Date.now().toString(36) },
  code: { type: String, required: true },
}, { versionKey: false })

module.exports = model('Codes', document);