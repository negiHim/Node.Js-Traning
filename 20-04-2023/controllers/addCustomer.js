//function to base url
const restApi = async (req, res, next) => {
    try {
        res.send('Hello !! welcome to this page');
    } catch (err) {
        next(err);
    }
};

// function add customer
const addCustomer = async (req, res, next) => {
    try {
        res.status(200).json({
            success: 200,
            status: 'Success',
            msg: 'Customer Added successfully'
        });
    } catch (err) {
        next(err);
    }
};

// this function only for testing purpose
const addCustomerTesting = async (req, res) => {
    res.status(200).json({
        success: 200,
        status: 'Success',
        msg: 'Testing Customer Added successfully'
    });
};

//now exporting 
module.exports = { restApi, addCustomer, addCustomerTesting };
