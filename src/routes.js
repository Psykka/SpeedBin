const { Router } = require('express');
const routes = Router();
const { DocumentController, RawController } = require('./controllers');

routes.use('/documents', DocumentController);
routes.use('/raw', RawController);

routes.get('/:id?', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

routes.get('*', (req, res) =>{
  res.redirect('/')
});

module.exports = routes;