const express = require('express');
const router = express.Router();

// import controllers and utils
const { restApi, addCustomer, addCustomerTesting } = require('../controllers/addCustomer');
const CustomeError = require('../utils/customerError');

router.get('/', restApi);
router.get('/addcustomer', addCustomer);
router.get('/testing', addCustomerTesting);

//to handle invalid endpoints 
router.get('*', (req, res, next) => {
    const err = new CustomeError(`Requested URL ${req.url} not found`, 400, 'Bad Request'
        , 'http://localhost:8080/restapi/addCustomer', 'http://localhost:8080/restapi/testing');
    next(err);
});

// middleware to handle wrong endpoints 
router.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: err.statusCode,
        status: err.status,
        message: err.message,
        visitUrl: { urlOfAddCustomer: err.visitUrl1, urlOfTesting: err.visitUrl1 }
    });
});

// exports router
module.exports = router;