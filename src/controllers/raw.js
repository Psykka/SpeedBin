const router = require('express').Router();
const { Schemas: document } = require('../database');

router.get('/:id?', async function(req, res) {
    const { id } = req.params;
    if(!id) return res.status(400).send({ error: 'Document not found' });
  
    const data = await document.findOne({ _id: id });
    if(!data) return res.status(400).json({ error: 'Document not found' });
    return res.send(data.code);
});

module.exports = router;