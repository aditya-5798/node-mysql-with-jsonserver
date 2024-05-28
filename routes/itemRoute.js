const ItemController = require('../controllers/itemController')
const express = require('express');
const Router = express.Router();

Router.get('/getall', ItemController.getAllItems);
Router.post('/addNewItem', ItemController.addNewItem);
Router.get('/:item_id', ItemController.getItemById);
Router.delete('/:item_id', ItemController.deleteItemById)
Router.patch('/:item_id', ItemController.updateItemByFetch)

module.exports = Router;