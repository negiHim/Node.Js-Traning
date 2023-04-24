//importing ajvInstance
const ajvInstance = require('./avjSchemaInstance');

//Customer schema 
const CustomerSchema = {
    type: 'object',
    properties: {
        customerfirstname: { type: 'string' },
        customerlastname: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 6, maxLength: 12, pattern: '^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\\d@$!%*?&](?=.*\\d)(?=.*[!#@%]).+$' },
        mobile: { type: 'string', pattern: '^[0-9].+$', maxLength: 10, minLength: 10 },
        gender: { type: 'string' },
    },
    required: ['customerfirstname', 'customerlastname', 'email', 'password', 'mobile', 'gender'],
    additionalProperties: false
};

//exports
module.exports = ajvInstance.compile(CustomerSchema);