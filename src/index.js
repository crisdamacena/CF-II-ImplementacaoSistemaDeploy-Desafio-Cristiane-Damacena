const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Helo World do Nosso tutorial');
});

module.exports = app;
