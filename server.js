const express = require('express');
const { connect } = require('mongoose');

const app = express();

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  err ? console.error('Erro ao conectar ao MongoDB. Erro:', err.stack) : console.info('Conectado ao MongoDB');
});

app.use(express.text({ limit: '5mb' }));
app.use(express.static('src/public'));
app.use(require('./src/routes'));

app.listen(process.env.PORT, _ => console.info('Ouvindo a porta:', process.env.PORT));
