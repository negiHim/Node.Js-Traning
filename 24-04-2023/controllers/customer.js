const customerModel = require('../models/customer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/authentication');
const SECRET_KEY = 'RESTAPI';

//function to base url
const restApi = async (req, res, next) => {
    try {
        res.send('Hello !! welcome to Home Page');
    } catch (err) {
        next(err);
    }
};

// function add customer
const addCustomer = async (req, res, next) => {

    const customerData = req.body;
    try {
        //first we will check the customer is already exisits or not
        const existingCustomer = await customerModel.findOne({ email: customerData.email });
        // console.log(`hello ${existingCustomer}`);
        //if customer exists
        if (existingCustomer) {
            return res.status(404).json({ msg: 'User already existing by this email Id' });
        } 
            //here encrypt user password
            customerData.password = await bcrypt.hash(customerData.password, 10);

            //add customer
            const result = await customerModel.create(customerData);

            //generate token
            const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY, { expiresIn: '2m' });

            //response
            return res.status(200).json({
                msg: 'Customer Added Successfully',
                token: token
            });

        

    } catch (err) {
        res.status(500).json({ msg: 'something went wrong ' });
        next(err);
    }
};



//to siginCustomer
const signinCustomer = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const customer = await customerModel.findOne({ email });
        if (!customer) return res.status(401).json({ status: 401, msg: 'Email Not Found' });
        const passwordMatched = await bcrypt.compare(password, customer.password);
        if (!passwordMatched) return res.status(401).json({ status: 401, msg: ' Invalid Credentials!' });
       
        const token = jwt.sign({ email: customer.email,customerId: customer._id  }, SECRET_KEY, { expiresIn: '2m' });
        return res.status(200).json({ status: 200, msg: 'Success', token });
    }
    catch (err) {
        res.status(500).json({ status: 401, msg: "Internal server error" });
    }
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
module.exports = { restApi, addCustomer, signinCustomer, addCustomerTesting };
