const express = require('express');
const router = express.Router();
const apiCall = require('../controllers/apiCall')

router.get('/',apiCall.thirdPartyApi);
router.get('/storeData',apiCall.storeData);
router.get('/getAllData',apiCall.getAllData);
router.get('/getApiData',apiCall.getApiData);

router.use('/*',(req,res)=>{
    res.status(404).json({msg:'invalid url'})
})

module.exports=router;