const express = require('express');

const putResource = require('./resourcehandling/putresource');
const getResource = require('./resourcehandling/getresource');

const app = express()
const port = 3000

const store = [];

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
    if (req.method === 'PUT') {
        let body = JSON.stringify(req.body);
        putResource(req.originalUrl, body, store);
        res.end(body);
    }
    else {
        console.log('Standard GET/POST request for: ' + req.originalUrl);
        const resource = getResource(req.originalUrl, store); 
        if (resource != undefined) {         
          res.header['Content-Type'] = 'application/json';
          res.write(resource);
        }
        else {
          res.statusCode = '404';
        }
        res.end();
    }
})

app.listen(port, () => {
  console.log('API Faker listening on port ' + port)
})