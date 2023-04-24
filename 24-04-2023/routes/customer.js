const express = require('express');
const router = express.Router();


// import controllers and utils
const { restApi, addCustomer, signinCustomer, addCustomerTesting } = require('../controllers/customer');
const CustomeError = require('../utils/customerError');
const errorHandlerMiddleware = require('../middlewares/errorHandler');
const CustomerSchema = require('../schema/addCustomerSchema');
const addCustomerValidatorDto = require('../middlewares/validators/addCustomerValidatorDto');
const auth = require('../middlewares/authentication');
const signinCustomerSchema = require('../schema/signinCustomerSchema');
const signinValidatorDto = require('../middlewares/validators/signinValidatorDto');

// handling routes
router.get('/', restApi);
router.post('/addcustomer', addCustomerValidatorDto(CustomerSchema), addCustomer);
router.post('/signin', auth(),signinValidatorDto(signinCustomerSchema),signinCustomer);
router.get('/testing', addCustomerTesting);

//to handle invalid endpoints 
router.get('*', (req, res, next) => {
    const err = new CustomeError(`Requested URL ${req.url} not found`, 400, 'Bad Request');
    next(err);
});

// middleware to handle wrong endpoints 
router.use(errorHandlerMiddleware);

// exports router
module.exports = router;
