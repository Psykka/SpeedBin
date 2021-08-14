const router = require('express').Router()
const db = require('../utils/database')

router.get('/:id?', async function (req, res) {
  const { id } = req.params
  if (!id) return res.status(400).send('Document not found')

  const query = db.prepare('SELECT data FROM document WHERE id = ?')
  const document = query.get(id)

  if (!document) return res.status(400).send('Document not found')
  if (req.query.noHTML) return res.send(document.data)

  return res.send(`<pre>${document.data}</pre>`)
})

module.exports = router
