const router = require('express').Router();
const { Schemas: document } = require('../database');

router.post('/', async function(req, res) {
    const { code } = req.body;
    if(!code) return res.status(400).send({ error: 'cade o código?' });
    const data = await document.create({ code });
    return res.json({ key: data._id });
});

module.exports = router;