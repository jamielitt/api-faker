const getResource = require('../resourcehandling/getresource');

function handleGET(req, res, store) {
    console.log('Standard GET/POST request for: ' + req.originalUrl);
    const resource = getResource(req.originalUrl, store); 
    if (resource != undefined) {         
      res.header['Content-Type'] = 'application/json';
      res.write(resource);
    } else {
      res.statusCode = '404';
    }
    res.end();
};

module.exports = handleGET;