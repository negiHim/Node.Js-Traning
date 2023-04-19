// creating express server
const express = require('express');
const app = express();

// to im port router
const {addCustomer_route} = require('./routes/addCustomer');

// eslint-disable-next-line no-undef
const PORT = 8080;

// get method
// app.get('/',(req,res)=>{
//     res.send('Hello !!!');
// });

// middleware or to set router
//for main implementation
app.use('/restapi',addCustomer_route);



// starting server
const start = async ()=>{
    try{
        app.listen(PORT,()=> console.log(`server has been started on ${PORT}`));
    } catch(err) {
        console.error(err);
    }
};

start();
