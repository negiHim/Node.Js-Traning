const mongoose = require('mongoose');

const uri = 'mongodb+srv://himanshunegi:vi0tJV7njJPFFnoS@restappiapp.ny0ucia.mongodb.net/test';
const connectDb = ()=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}

module.exports = connectDb;