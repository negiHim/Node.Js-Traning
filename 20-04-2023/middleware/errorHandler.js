
// this function for customerHandler
const customeErrorHandler = async (err, req, res) => {
    res.status(404)
        .json(
            {
                status: '404',
                msg: `Check your Request Url ${req.url}`,
                visitUrl: {
                    addCustomer: 'http://localhost:8080/restapi/addCustomer',
                    testing: 'http://localhost:8080/restapi/testing'
                }
            });
};

//export module
module.exports = { customeErrorHandler };