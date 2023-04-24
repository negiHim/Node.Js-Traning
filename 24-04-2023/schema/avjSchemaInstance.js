//creating ajv Instance
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv({allErrors: true});
addFormats(ajv);
// export
module.exports = ajv;