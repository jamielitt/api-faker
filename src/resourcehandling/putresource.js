function putResource(key, resource, store) {
    console.log('Storing resource for key: ' + key);
    console.log('Resource to be stored: ' + resource)
    store[key] = resource;
};

module.exports = putResource;