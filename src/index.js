const express = require('express');

const handleGET = require('./handlers/handleGET');
const handlePUT = require('./handlers/handlePUT');

const app = express()
const port = 3000

const store = [];

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
  if (req.method === 'PUT') {
    handlePUT(req, res, store);
  }
  else {
    handleGET(req, res, store);
  }
})

app.listen(port, () => {
  console.log('API Faker listening on port ' + port)
})