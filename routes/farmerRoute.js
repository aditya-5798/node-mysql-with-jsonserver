const FarmerContoller = require('../controllers/farmerController');
const express = require('express');
const Router = express.Router();

Router.post('/addFarmer', FarmerContoller.addNewFarmer);




module.exports = Router;