function getresource(key, store) {
    const output = store[key];
    if (output)
    {
        console.log('URL response found, writing this out');
        console.log(output);
    }
    return output || null;
};

module.exports = getresource;