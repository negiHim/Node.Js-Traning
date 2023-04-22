//importing ajvInstance
const ajvInstance = require('./avjSchemaInstance');

//addCustomer schema 
const addCustomerSchema = {
    type: 'object',
    properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 6, maxLength: 12, pattern: '^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\\d@$!%*?&](?=.*\\d)(?=.*[!#@%]).+$' },
        mobile: { type: 'string', pattern: '^[0-9].+$', maxLength: 10, minLength: 10 },
        gender: { type: 'string' },
    },
    required: ['firstName', 'lastName', 'email', 'password', 'mobile', 'gender'],
    additionalProperties: false
};

//exports
module.exports = ajvInstance.compile(addCustomerSchema);