const router = require('express').Router()
const db = require('../utils/database')
const rateLimit = require('express-rate-limit')


router.post('/:id?', rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: 'Too many requests'
}), (req, res) => {
  const code = req.body

  if (!code) return res.status(400).send('Unexpected value')

  const id = (Date.now() + Math.floor(Math.random() * 300)).toString(32)

  const query = db.prepare('INSERT INTO document VALUES (?, ?)')

  query.run(id, code)
  return res.json({ id, document: code })
})

module.exports = router
