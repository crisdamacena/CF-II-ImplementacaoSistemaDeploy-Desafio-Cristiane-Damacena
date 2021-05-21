const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //res.status(200).send('Hello World do Nosso tutorial');
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
