const express = require('express')
const router = express.Router();
const studetController = require('../controllers/studentController.js');

router.get('/add', studetController.addStudent);
// Create a new employee
router.post('/getAll', studetController.allStudent);

module.exports = router


