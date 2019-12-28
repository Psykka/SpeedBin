const { Router } = require("express");
const routes = Router();
const { DocumentController, RawController } = require('./controllers');

routes.use('/documents', DocumentController);
routes.use('/raw', RawController);

routes.get('/*', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = routes;