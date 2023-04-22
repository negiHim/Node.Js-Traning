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
    try {
        res.status(200).json({
            success: 200,
            status: 'Success',
            msg: 'Customer Added successfully',
            data:{
                firstName:req.body.firstName,
                lastName :req.body.lastName,
                email :req.body.email,
                mobile:req.body.mobile,
                gender:req.body.gender
            },
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
