const { Router } = require("express");
const routes = Router();
const { DocumentController, RawController } = require('./controllers');

routes.use('/documents', DocumentController);
routes.use('/raw', RawController);

routes.get('/*', (req, res) => {
  res.render(__dirname + '/views/index.ejs', { code: '', disabled: false });
});

// routes.get('/raw/:id', async (req, res) => res.json(await Mongo.index(req, res)));

// routes.get('/:id', async (req, res) =>{
//   const data = await Mongo.index(req, res);
//   res.render(__dirname + '/views/index.ejs', { code: data.code, disabled: true });
// });

module.exports = routes;