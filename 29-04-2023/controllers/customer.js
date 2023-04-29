const customerModel = require('../models/customer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CustomeError = require('../utils/customerError');
const errorHandlerMiddleware = require('../middlewares/errorHandler');
const REFERSH_SECRET_KEY = 'RESTAPI1';
const ACCESS_SECRET_KEY = 'RESTAPI2';


//function to base url
const restApi = async (req, res, next) => {
    try { res.send('Hello !! welcome to Home Page') }
    catch (err) { next(err); }
};

// function add customer
const addCustomer = async (req, res, next) => {
    const customerData = req.body;
    try {
        //first we will check the customer is already exisits or not
        const existingCustomer = await customerModel.findOne({ email: customerData.email });
        if (existingCustomer) return res.status(404).json({ msg: 'User already existing by this email Id' });
      
        //add customer
        const result = await customerModel.create(customerData);
        if (result === null) errorHandlerMiddleware(new CustomeError('Customer Not Added', 500, "Unsuccessfull"))
        //response
        return res.status(200).json({ msg: 'Customer Added Successfully' });

    }
    catch (err) {
        const error = new CustomeError('something went wrong with Database', 503)
        return errorHandlerMiddleware(error, req, res, next);
        // res.status(500).json({ status :500,msg: 'something went wrong with Database' });
        // next(err);
    }
};

//to siginCustomer
const signinCustomer = async (req, res, next) => {
    const customerData = req.body;
    try {
        const customer = await customerModel.findOne({ email: customerData.email });
        if (!customer) return res.status(401).json({ status: 401, msg: 'Email Not Found' });

        const passwordMatched = await bcrypt.compare(customerData.password, customer.password);
        if (!passwordMatched) return res.status(401).json({ status: 401, msg: ' Invalid Credentials!' });

        //Refresh Token
        const refreshToken = jwt.sign({ email: customer.email, customerId: customer._id }, REFERSH_SECRET_KEY, { expiresIn: '1d' });
        console.log(`Refresh Token ${refreshToken}`);

        //Access Token
        const accessToken = jwt.sign({ email: customer.email, customerId: customer._id }, ACCESS_SECRET_KEY, { expiresIn: '2m' });
        return res.status(200).json({ status: 200, msg: 'Success', accessToken });
    }
    catch (err) {
        res.status(500).json({ status: 401, msg: "Internal server error" });
    }
}

//get customer details
const getCustomerDetails = async (req, res, next) => {
    const customerId = req.params.id;
    const customer = await customerModel.findById({ _id: customerId });
    if (customer) res.status(200).json({ customer: customer, msg: ' Get details successfully' })
    res.status(404).json({ msg: 'Invalid User Id' });
}

//update customer details+
const updateCustomerDetails = async (req, res, next) => {
    const customerId = req.params.id;

    const customerData = req.body;
    
    const customer = await customerModel.findByIdAndUpdate(customerId, customerData, { new: true });

    if (customer) res.status(200).json({ status: 200, customer: customer, msg: 'Customer Updated Successfully' })
    else {
        const err = new CustomeError(`Invalid UserId `, 401, 'not updated')
        errorHandlerMiddleware(err, req, res, next);
    }
}


//create access Token
const getAccessToken = (req, res, next) => {
    //refersh token
    try {
        const refreshToken = req.body;
        const customer = jwt.verify(refreshToken.token, REFERSH_SECRET_KEY);

        //Access Token
        const accessToken = jwt.sign({ email: customer.email, customerId: customer.customerId }, ACCESS_SECRET_KEY, { expiresIn: '2m' });
        return res.status(200).json({ status: 200, msg: 'Success', accessToken });
    } catch (err) { res.status(401).json({ status: 401, msg: 'Referesh token Expire || Login through Credentails' }); }
}

// authorization
const authorization = (req, res, next) => {
    try {
        let accessToken = req.body.token;
        if (accessToken) {
            token = accessToken.split(' ')[1];
            let customer = jwt.verify(token, ACCESS_SECRET_KEY);
            res.status(200).json(
                {
                    msg: 'logged in by token',
                    token: jwt.sign({ email: customer.email, customerId: customer.customerId }, ACCESS_SECRET_KEY, { expiresIn: '2m' })

                });
        }
    } catch (err) {
        res.status(401).json({ msg: 'Unauthorized Customer || Token expired' });
    }
}

//delete customer detail
const deleteCustomerDetails = async (req, res, next) => {
    const customerId = req.params.id;
    const customer = await customerModel.findByIdAndDelete({ _id: customerId });
    if (customer === null) errorHandlerMiddleware(new CustomeError(`Invalid UserId `, 401, 'Not deleted'), req, res, next);
    res.status(200).json({ msg: 'successfully deleted' });
}



// this function only for testing purpose
const addCustomerTesting = async (req, res) => {
    res.status(200).json({
        success: 200,
        status: 'Success',
        msg: 'Testing Customer Added successfully'
    });
};

//now exporting 
module.exports = {
    restApi, addCustomer, signinCustomer, getAccessToken, getCustomerDetails,
    updateCustomerDetails, authorization, deleteCustomerDetails, addCustomerTesting
};
