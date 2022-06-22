const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('Welcome to CORS server 😁');
});
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ msg: 'This has CORS enabled 🎈' });
});
app.listen(8080, () => {
  console.log('listening on port 8080');
});

