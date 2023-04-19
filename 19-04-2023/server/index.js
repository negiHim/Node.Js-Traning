const express = require('express');
//to parse the body data 
const bodyParser = require('body-parser');


// to create an Express application object
const app = express();
const port = 8080;

// to use the data send from the form
app.use(bodyParser.urlencoded({ extended: true }));

// get method
app.get('/get',(req,res)=>{
    res.send('Hello !!! Welcome to Express server');
    console.log(req.url);
});

// post method
app.post('/postReq',(req,res) => {
    console.log(req.url);
    res.write('Hello response by post method');
});

// put method
app.put('/putReq',(req,res) => {
    console.log(req.url);
    res.send('Got a PUT request at /user');
});

// delete method
app.delete('/delReq',(req,res) => {
    console.log(req.url);
    res.send('Got a DELETE request at /user');
});

// calculator method
app.get('/calculator',(req,res) => {
    // eslint-disable-next-line no-undef
    res.sendFile(__dirname+'/index.html');
});

//calculator post function
app.post('/calculator', (req,res) => {
    const no1 = Number(req.body.no1);
    const no2 = Number(req.body.no2);
    console.log(req.body.third);
    res.send(` addition :- ${no1+no2} and third value ${req.body.third}`);
});


// to run server on port
app.listen(port,()=>console.log(`Server has been started on port ${port}`));