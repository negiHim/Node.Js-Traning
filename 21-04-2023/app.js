// creating express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;



// to configure the body coming with Http Request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to import router
const addCustomer_route = require('./routes/addCustomer');
const CustomeError = require('./utils/customerError');
const errorHandlerMiddleware = require('./middlewares/errorHandler');


// base url
app.use('/restapi', addCustomer_route);

//to handle invalid endpoints 
app.all('*', (req, res, next) => {
    const err = new CustomeError(`Requested URL ${req.url} not found`, 400, 'Bad Request');
    next(err);
});

//middleware to handle wrong endpoints 
app.use(errorHandlerMiddleware);

// starting server
const start = async () => {
    try {
        app.listen(PORT, () => console.log(`server has been started on ${PORT}`));
    } catch (err) {
        console.error(err);
    }
};
start();
