const fetch = require('node-fetch');
const apiSchema = require('../model/apiSchema');
const queryParamsHandler = require('../middleware/queryParamsHandler');

const thirdPartyApi = (req, res) => {
    res.status(200).status("Welcome to Third Party API Call App");
}


const storeData = async (req, res) => {
    let response = "";
    try {
        response = await fetch('https://newsapi.org/v2/top-headlines?country=us&country=in&pageSize=100&category=business&apiKey=820ce47c52044561bc51a2a3d6ea8c2c');
        response = await response.json();
        //here we are storing data into database
        await apiSchema.deleteMany();
        await apiSchema.create(response.articles);
    } catch (err) {
        console.log(err);
    }
    res.status(200).json({
        msg: 'Data stored into DB Successfully',
        data: response.articles
    });
}


const getAllData = async (req, res) => {
    try {
        const apiData = await queryParamsHandler(apiSchema,req.query);
        // console.log(apiData)
        res.status(200).json({
            totalData:apiData.length,
            data:apiData
        });
    } catch (err) {
        console.log(err);
    }
}

const getApiData = async (req, res) => {
    try {
        const data = await apiSchema.find(req.query);
        res.status(200).send({ data });
    } catch (err) {
        console.log(err);
    }
}



module.exports = { thirdPartyApi, storeData, getAllData, getApiData }


