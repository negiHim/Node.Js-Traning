const mongoose = require('mongoose');

const apiSchema = mongoose.Schema({

    author:{
        type:String,
        // required:true
    },
    title:{
        type:String,
        // require:true
    },
    description:{
        type:String,
        // require:true
    },
    url:{
        type:String,

    },
    urlToImage:{
        type:String,
    },
    publishedAt:{
        type:String,
        // require:true
    },
    source:{
        name:{
            type:String
        }
    }
    
    

});

module.exports = mongoose.model('apidata',apiSchema)