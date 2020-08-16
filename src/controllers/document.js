const router = require('express').Router()
const { Schemas: document } = require('../database')

router.post('/:id?', async function (req, res) {
  const code = req.body

  if (!code) return res.status(400).send('Unexpected value')

  const id = (Date.now() + Math.floor(Math.random() * 300)).toString(32)
  const data = await document.findById(id) || await document.create({ code, _id: id })

  await data.save()

  return res.json({ key: data._id, document: code })
})

module.exports = router
