const { Schema, model } = require('mongoose');

const document = new Schema({
  _id: String,
  code: { type: String, required: true },
  createdAt: { type: Date, expires: '2m', default: Date.now }
}, { versionKey: false });

module.exports = model('Codes', document);