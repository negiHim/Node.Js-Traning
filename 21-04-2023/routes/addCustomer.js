const express = require('express');
const router = express.Router();


// import controllers and utils
const { restApi, addCustomer, addCustomerTesting } = require('../controllers/addCustomer');
const CustomeError = require('../utils/customerError');
const errorHandlerMiddleware = require('../middlewares/errorHandler');
const addCustomerSchema = require('../schema/addCustomerSchema');
const validatorDto = require('../middlewares/validatorDto');

// handling routes
router.get('/', restApi);
router.post('/addcustomer',validatorDto(addCustomerSchema),addCustomer);
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
