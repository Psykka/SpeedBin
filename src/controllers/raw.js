const router = require('express').Router();
const { Schemas: document } = require('../database');

router.get('/:id?', async function(req, res) {
    const { id } = req.params;
    if(!id) return res.status(400).send('Document not found');
  
    const data = await document.findById(id);
    if(!data) return res.status(400).send('Document not found');
    return res.send(data.code);
});

module.exports = router;