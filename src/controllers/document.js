const router = require('express').Router();
const { Schemas: document } = require('../database');

router.post('/:id?', async function(req, res) {
    const { code } = req.body;
    if(!code) return res.status(400).send({ error: 'cade o código?' });
  
    const date = Buffer.from(Date.now()+'').toString('base64').slice(-10, -2);
    const data = await document.findById(req.params.id) || await document.create({ code, _id: date });
  
    data._id = date;
    data.code = code;
    await data.save();
  
    return res.json({ key: data._id });
});

module.exports = router;