const ajvInstance = require('./avjSchemaInstance');

//Customer schema 
const SigninCustomerSchema = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string' }
    },
    required: ['email', 'password'],
    additionalProperties: false,
};

//exports
module.exports = ajvInstance.compile(SigninCustomerSchema);