const express = require('express');
const router = express.Router();

const {addCustomer,addCustomerTesting}= require('../controllers/addCustomer');

// eslint-disable-next-line no-undef
router.route('/').get(addCustomer);
router.route('/testing').get(addCustomerTesting);

//exports router
module.exports = router;