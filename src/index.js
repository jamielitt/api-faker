const express = require('express');
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
        console.log('PUT request for: ' + req.originalUrl);
        console.log('BODY of PUT: ' + JSON.stringify(req.body))
        // Here we need to save the request and the payload
        store[req.originalUrl] = body;
        res.write('PUT caught and handled')
        res.write('URLs currently handled');
        res.write(store.toString());
        res.end();
    }
    else {
        console.log('Standard GET/POST request for: ' + req.originalUrl);
        // We need to try and retrieve the request and serve the response,
        // if no response, just move on
        //if (store[store.originalUrl] !== undefined) {
            const output = store[req.originalUrl];
            console.log('URL response found, writing this out');
            console.log(output);
            res.header['Content-Type'] = 'application/json';
            res.write(output);
            res.end();
        //}
        //else {
          //  console.log('Dumping what we currently have');
          //  console.log(store);
          //  console.log('URL response not found, moving on to next pipeline step');
            //next();
        //}
    }
})

app.listen(port, () => {
  console.log('API Faker listening on port ' + port)
})