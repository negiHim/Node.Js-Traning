// creating express server
const express = require('express');
const app = express();

// to import router
const addCustomer_route = require('./routes/addCustomer');
const CustomeError = require('./utils/customerError');
const PORT = 8080;

// base url
app.use('/restapi',addCustomer_route);

//to handle invalid endpoints 
app.all('*',(req,res,next)=>{
    const err = new CustomeError(`Requested URL ${req.url} not found`,400,'Bad Request','http://localhost:8080/restapi/');
    next(err);
});

//middleware to handle wrong endpoints 
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success:err.statusCode,
        status:err.status,
        message:err.message,
        visitUrl : {url:err.visitUrl1}
    });
});

// starting server
const start = async ()=>{
    try{
        app.listen(PORT,()=> console.log(`server has been started on ${PORT}`));
    } catch(err) {
        console.error(err);
    }
};

start();
