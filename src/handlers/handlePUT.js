const putResource = require('../resourcehandling/putresource');

function handlePUT(req, res, store) {
    let body = JSON.stringify(req.body);
    putResource(req.originalUrl, body, store);
    res.end(body);
};

module.exports = handlePUT;