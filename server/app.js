require('dotenv').config();
const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookie = require('cookie-parser');
const router = require('./routes');

const { NODE_ENV } = process.env;

const app = express();

app.use(compression());
app.disabled('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(cookie());

app.use(express.static(join(__dirname, '..', 'client', 'build')));

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.set('port', process.env.PORT || 3000);

app.use(router);

module.exports = app;
