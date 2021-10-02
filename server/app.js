require('dotenv').config();
const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookie = require('cookie-parser');
const router = require('./routes');

const app = express();

app.use(compression());
app.disabled('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(cookie());

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.set('port', process.env.PORT || 3000);

app.use(router);

module.exports = app;
