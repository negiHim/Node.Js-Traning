const express = require('express');
const router = express.Router();

// import controllers and utils
const customer  = require('../controllers/customer');
const CustomeError = require('../utils/customerError');
const errorHandlerMiddleware = require('../middlewares/errorHandler');
const CustomerSchema = require('../schema/addCustomerSchema');
const addCustomerValidatorDto = require('../middlewares/validators/addCustomerValidatorDto');
const auth = require('../middlewares/authentication');
const signinCustomerSchema = require('../schema/signinCustomerSchema');
const signinValidatorDto = require('../middlewares/validators/signinValidatorDto');

// handling routes
router.get('/', customer.restApi);
router.post('/addcustomer', addCustomerValidatorDto(CustomerSchema), customer.addCustomer);
router.post('/createAccessToken',customer.getAccessToken);
router.post('/authorization',customer.authorization);
router.post('/signin',signinValidatorDto(signinCustomerSchema),customer.signinCustomer);
router.get('/getCustomer/:id',auth(),customer.getCustomerDetails);
router.put('/updateCustomerDetails/:id',auth(),addCustomerValidatorDto(CustomerSchema),customer.updateCustomerDetails);
router.delete('/deleteCustomerDetails/:id',auth(),customer.deleteCustomerDetails);
router.get('/testing', customer.addCustomerTesting);

//to handle invalid endpoints 
router.get('*', (req, res, next) => {
    const err = new CustomeError(`Requested URL ${req.url} not found`, 400, 'Bad Request');
    next(err);
});

// middleware to handle wrong endpoints 
router.use(errorHandlerMiddleware);

// exports router
module.exports = router;
