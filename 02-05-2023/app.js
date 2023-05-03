const express = require('express');
const PORT = 8080;
const app = express();
const apiCall = require('./routes/apiCall');
const connectDb = require('./db/connnectDb');

app.use("/thirdpartyapi",apiCall);

app.use('*',(req,res)=>{
    res.status(404).json({msg:'invalid url'})
})

const start = async ()=>{
    await connectDb().then(()=>{
        console.log('DB Connected succcessfully')
    }).catch((err)=>{
        console.log('something went wrong with DB',err)
    })
    app.listen(PORT,()=>{
        console.log(`Server has been started successfully on port ${PORT}`)
    })
}

start();