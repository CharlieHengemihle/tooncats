const express = require('express');

const app = express();
const path = require('path');

app.use('/cats', require('./controllers/cats'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
